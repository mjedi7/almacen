const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const { randomUUID } = require('crypto');
const pool = new Pool({ host: process.env.HOST_BD, user: process.env.USER_BD,
  password: process.env.PASSWORD_BD, database: process.env.DATABASE_BD, port: process.env.PORT_BD });
const fail = (message, status = 400) => Object.assign(new Error(message), { status });
function decimal(value, name, allowZero = false) {
  if (value === null || value === undefined || !/^\d+(\.\d{1,6})?$/.test(String(value)) ||
      !Number.isFinite(Number(value)) || Number(value) > 1e12 || (!allowZero && Number(value) === 0))
    throw fail(`${name}: indique una cantidad válida, hasta seis decimales.`);
  return String(value);
}
function entero(value, name) {
  if (!/^\d+$/.test(String(value)) || !Number.isSafeInteger(Number(value)) || Number(value) <= 0)
    throw fail(`${name} inválido.`);
  return Number(value);
}
function fecha(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
      !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0,10) !== value)
    throw fail('Indique una fecha válida.');
  return value;
}
function texto(value, name, required = false, max = 2000) {
  if (value != null && typeof value !== 'string') throw fail(`${name} inválido.`);
  const result = (value || '').trim();
  if ((required && !result) || result.length > max) throw fail(`${name} inválido.`);
  return result;
}
function clave(value) {
  if (typeof value !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value))
    throw fail('Falta el identificador de operación. Actualice la pantalla.');
  return value;
}
function error(res, err) {
  const status = err.status || (['P0001','23505','23503','23514','22007','22008'].includes(err.code) ? 409 : 500);
  if (status === 500) console.error('Recepciones:', err.code || err.message);
  return res.status(status).json({ error: status === 500 ? 'No se guardaron los cambios. Revise el servidor y la migración SQL.' : err.message });
}
// Los permisos coinciden con Registrar Compra / Recargar Stock del menú actual.
async function autorizar(req, res, next) {
  try {
    let decoded;
    try { decoded = jwt.verify((req.header('Authorization') || '').replace(/^Bearer\s+/i,''), process.env.LLAVE); }
    catch (_) { throw fail('Sesión vencida. Inicie sesión nuevamente.',401); }
    const { rows } = await pool.query('SELECT id_usuario,nombre,usuario,id_tipo_usuario,centro_trabajo FROM usuarios WHERE usuario=$1 AND esactivo IS TRUE',[decoded.email]);
    if (rows.length !== 1 || ![0,1].includes(rows[0].id_tipo_usuario)) throw fail('Sin permiso para gestionar compras.',403);
    req.usuarioCompra = rows[0]; next();
  } catch (err) { error(res,err); }
}
async function transaccion(res, work) {
  let client;
  try {
    client = await pool.connect(); await client.query('BEGIN');
    const result = await work(client);
    await client.query('COMMIT'); return res.json(result);
  } catch (err) { if (client) await client.query('ROLLBACK'); return error(res,err); }
  finally { if (client) client.release(); }
}
async function cabeceraRecepcion(db, user, body, key, original) {
  const { rows } = await db.query(`INSERT INTO recepciones_compra
    (fecha_recepcion,id_usuario,usuario_nombre,referencia,observaciones,clave_operacion,solicitud_original)
    VALUES ($1,$2,$3,$4,$5,$6,$7::jsonb) RETURNING id`,
    [fecha(body.fecha_recepcion),user.id_usuario,user.nombre || user.usuario,
      texto(body.referencia,'Referencia',false,200),texto(body.observaciones,'Observaciones'),key,JSON.stringify(original)]);
  return rows[0].id;
}
async function registrarCompra(req,res) {
  return transaccion(res,async db => {
    const b=req.body, user=req.usuarioCompra, key=clave(b.clave_operacion);
    const original={...b, usuarioAutenticado:user.id_usuario};
    await db.query('SELECT pg_advisory_xact_lock(hashtext($1))',[key]);
    const prev=await db.query('SELECT id,solicitud_original=$2::jsonb AS igual FROM compras WHERE clave_operacion=$1',[key,JSON.stringify(original)]);
    if(prev.rowCount) { if(!prev.rows[0].igual) throw fail('Esta operación ya se guardó con otros datos.',409); return {mensaje:'Save',id_compra:prev.rows[0].id}; }
    const producto=entero(b.producto,'Artículo'), proveedor=entero(b.proveedor,'Proveedor');
    const partida=entero(b.partida,'Partida'), centro=entero(user.centro_trabajo,'Centro del usuario');
    const cantidad=decimal(b.cantidad,'Cantidad comprada'), recibida=decimal(b.cantidad_recibida,'Cantidad recibida',true);
    const precio=decimal(b.costo,'Precio unitario',true), dia=fecha(b.fechaAd), folio=texto(b.folio,'Folio de compra',true,200);
    const fechaRecepcion=Number(recibida)>0 ? fecha(b.fecha_recepcion) : null;
    if(Number(recibida)>Number(cantidad)) throw fail('La recepción inicial supera la cantidad comprada.');
    if(fechaRecepcion && fechaRecepcion<dia) throw fail('La recepción no puede ser anterior a la compra.');
    await db.query('SELECT pg_advisory_xact_lock(hashtext($1))',[JSON.stringify([folio,proveedor,centro,dia.slice(0,4)])]);
    const dup=await db.query(`SELECT c.id FROM compras c JOIN costos co ON co.id=c.id_costo JOIN almacen a ON a.id=c.id_almacen
      WHERE c.gestion_recepciones AND c.esactivo IS TRUE AND c.folio_compra=$1 AND co.id_proveedor=$2
      AND a.id_centrotrabajo=$3 AND EXTRACT(YEAR FROM c.fecha_compra)=$4 AND co.id_articulo=$5`,[folio,proveedor,centro,Number(dia.slice(0,4)),producto]);
    if(dup.rowCount) throw fail('Este artículo ya está registrado en ese folio, proveedor, centro y año. Use Recargar Stock para recibir pendientes.',409);
    const art=await db.query('SELECT descripcion,unidad_medida_id FROM cat_articulos WHERE id=$1 AND id_partidas=$2',[producto,partida]);
    if(!art.rowCount) throw fail('El artículo no pertenece a la partida seleccionada.');
    if(!(await db.query('SELECT id FROM cat_proveedores WHERE id=$1',[proveedor])).rowCount) throw fail('Proveedor inexistente.');
    if(!(await db.query('SELECT id FROM centro_trabajo WHERE id=$1',[centro])).rowCount) throw fail('Centro de trabajo inexistente.');
    // Un costo/lote por compra: nunca se altera el precio de compras anteriores.
    const cost=await db.query(`INSERT INTO costos(id_articulo,id_proveedor,precio_unitario,iva,precio_total,fecha_inicio,esactivo)
      VALUES ($1,$2,$3,16,$3::numeric*$4::numeric*1.16,$5,true) RETURNING id`,[producto,proveedor,precio,cantidad,dia]);
    const almacen=await db.query(`INSERT INTO almacen(id_centrotrabajo,id_costos,existencias,fecha_adquisicion,esactivo,unidad,descripcion,id_partida,nombre_producto,id_unidad_medida)
      VALUES ($1,$2,0,$3,true,$4,$5,$6,$7,$8) RETURNING id`,[centro,cost.rows[0].id,dia,texto(b.unidad,'Unidad',false,20),texto(b.descripcion,'Descripción'),partida,art.rows[0].descripcion,art.rows[0].unidad_medida_id]);
    const compra=await db.query(`INSERT INTO compras(id_costo,total_articulos,fecha_compra,folio_compra,esactivo,id_partidas,
      gestion_recepciones,id_almacen,id_usuario_registro,registrado_en,precio_unitario_compra,iva_compra,folio_factura,clave_operacion,solicitud_original)
      VALUES ($1,$2,$3,$4,true,$5,true,$6,$7,clock_timestamp(),$8,16,$9,$10,$11::jsonb) RETURNING id`,
      [cost.rows[0].id,cantidad,dia,folio,partida,almacen.rows[0].id,user.id_usuario,precio,texto(b.folio_factura,'Folio factura',false,200),key,JSON.stringify(original)]);
    if(Number(recibida)>0) {
      const id=await cabeceraRecepcion(db,user,{...b,fecha_recepcion:fechaRecepcion},randomUUID(),{inicial:compra.rows[0].id});
      await db.query('INSERT INTO recepciones_compra_detalle(id_recepcion,id_compra,cantidad) VALUES($1,$2,$3)',[id,compra.rows[0].id,recibida]);
    }
    return {mensaje:'Save',id_compra:compra.rows[0].id};
  });
}
async function recibir(req,res) {
  return transaccion(res,async db => {
    const b=req.body,user=req.usuarioCompra,key=clave(b.clave_operacion), original={...b,usuarioAutenticado:user.id_usuario};
    await db.query('SELECT pg_advisory_xact_lock(hashtext($1))',[key]);
    const prev=await db.query('SELECT id,solicitud_original=$2::jsonb AS igual FROM recepciones_compra WHERE clave_operacion=$1',[key,JSON.stringify(original)]);
    if(prev.rowCount) { if(!prev.rows[0].igual) throw fail('Esta recepción ya se guardó con otros datos.',409); return {mensaje:'Save',id_recepcion:prev.rows[0].id}; }
    if(!Array.isArray(b.detalles)||!b.detalles.length||b.detalles.length>200) throw fail('Seleccione entre 1 y 200 artículos.');
    const detalles=b.detalles.map(d=>({id:entero(d.id_compra,'Compra'),cantidad:decimal(d.cantidad,'Cantidad recibida')})).sort((a,c)=>a.id-c.id);
    if(new Set(detalles.map(d=>d.id)).size!==detalles.length) throw fail('Artículo repetido en la recepción.');
    const id=await cabeceraRecepcion(db,user,b,key,original);
    let grupo;
    for(const d of detalles) {
      const {rows}=await db.query(`SELECT c.*,co.id_proveedor,a.id_centrotrabajo FROM compras c
        JOIN costos co ON co.id=c.id_costo JOIN almacen a ON a.id=c.id_almacen WHERE c.id=$1 FOR UPDATE OF c`,[d.id]);
      const c=rows[0];
      if(!c||!c.gestion_recepciones||!c.esactivo) throw fail('Compra no disponible para recepción.');
      if(Number(c.id_centrotrabajo)!==Number(user.centro_trabajo)) throw fail('La compra pertenece a otro centro de trabajo.',403);
      const g=JSON.stringify([c.folio_compra,c.id_proveedor,c.id_centrotrabajo,new Date(c.fecha_compra).getFullYear()]);
      if(grupo && grupo!==g) throw fail('Una recepción debe corresponder al mismo folio, proveedor, centro y año.');
      grupo=g;
      await db.query('INSERT INTO recepciones_compra_detalle(id_recepcion,id_compra,cantidad) VALUES($1,$2,$3)',[id,d.id,d.cantidad]);
    }
    return {mensaje:'Save',id_recepcion:id};
  });
}
async function buscar(req,res) {
  try {
    const folio=texto(req.query.folio,'Folio de compra',true,200);
    const {rows}=await pool.query(`SELECT * FROM v_compras_recepciones WHERE folio_compra=$1
      AND (id_centrotrabajo=$2 OR (NOT gestion_recepciones AND EXISTS
        (SELECT 1 FROM almacen a WHERE a.id_costos=v_compras_recepciones.id_costo AND a.id_centrotrabajo=$2))) ORDER BY fecha_compra DESC,id`,[folio,req.usuarioCompra.centro_trabajo]);
    res.json(rows);
  } catch(err) { error(res,err); }
}
async function historial(req,res) {
  try {
    const id=entero(req.params.id,'Compra');
    const allowed=await pool.query(`SELECT id FROM v_compras_recepciones WHERE id=$1 AND
      (id_centrotrabajo=$2 OR (NOT gestion_recepciones AND EXISTS
      (SELECT 1 FROM almacen a WHERE a.id_costos=v_compras_recepciones.id_costo AND a.id_centrotrabajo=$2)))`,[id,req.usuarioCompra.centro_trabajo]);
    if(!allowed.rowCount) throw fail('Compra no disponible.',404);
    const {rows}=await pool.query(`SELECT r.id,r.fecha_recepcion,r.registrado_en,r.usuario_nombre,r.referencia,r.observaciones,d.cantidad
      FROM recepciones_compra r JOIN recepciones_compra_detalle d ON d.id_recepcion=r.id
      WHERE d.id_compra=$1 ORDER BY r.fecha_recepcion,r.registrado_en,r.id`,[id]);
    res.json(rows);
  } catch(err) { error(res,err); }
}
module.exports={autorizar,registrarCompra,recibir,buscar,historial};
