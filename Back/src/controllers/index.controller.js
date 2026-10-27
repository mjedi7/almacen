const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD
})



// jasper = require('node-jasper')({
//     path: '../../lib/jasperreports-6.19.1',
//     reports: {
//         credencialTemporal: {
//             jasper: '../../reports/credencialTemporal/credencialTemporal.jasper'
//         },
//         credencialTemporalGrupo: {
//             jasper: '../../reports/credencialTemporalGrupo.jasper'
//         },

//         redi: {
//             jasper: '../../reports/Redi.jasper'
//         },
//         lista_de_alumnos: {
//             jasper: '../../reports/Disenolistaalumnos.jasper'
//         },
//         acta_de_calificacion: {
//             jasper: '../../reports/Acta_calificaciones_Ordinaria.jasper'
//         },
//         acta_de_submodulos: {
//             jasper: '../../reports/Acta_de_calificaciones_de_submodulos.jasper'
//         },
//         lista_de_alumnos_reprobados_en_ordinario: {
//             jasper: '../../reports/Lista_de_alumnos_reprobados_ordinario.jasper'
//         },
//         acta_de_calificaciones_extracurricular: {
//             jasper: '../../reports/Acta_calificaciones.jasper'
//         },
//         Lista_de_alumnos_reporbados_extraordinario: {
//             jasper: '../../reports/Lista_de_alumnos_reporbados_extraordinario.jasper'
//         },
//         lista_de_alumnos_reprobados_intersemestral: {
//             jasper: '../../reports/lista_de_alumnos_reprobados_intersemestral.jasper'
//         },
//         acta_de_calificacion_anterior: {
//             jasper: '../../reports/Acta_calificaciones_Anterior.jasper'
//         },
//         acta_de_submodulos_anterior: {
//             jasper: '../../reports/Acta_de_calificaciones_de_subAnteriores.jasper'
//         },
//         boleta_anterior: {
//             jasper: '../../reports/boleta.jasper'
//         },
//         boleta_anteriorRNP: {
//             jasper: '../../reports/boletaRNP.jasper'
//         },
//         boleta_anteriorRP: {
//             jasper: '../../reports/boletaRP.jasper'
//         },
//         historial: {
//             jasper: '../../reports/historialacademico.jasper'
//         },
//         constancia: {
//             jasper: '../../reports/constancia.jasper'
//         },
//         AutorizacionInscr: {
//             jasper: '../../reports/AutorizacionInscr.jasper'
//         },

//         arancelexamen: {
//             jasper: '../../reports/arancelexamen.jasper'
//         },
//         arancelpreinscripcion2: {
//             jasper: '../../reports/arancelpreinscripcion2.jasper'
//         },
//         AutorizacionReins: {
//             jasper: '../../reports/AutorizacionReins.jasper'
//         },
//         AutorizacionReinsRNP: {
//             jasper: '../../reports/AutorizacionReinsRNP.jasper'
//         },
//         arancelreinscripcion: {
//             jasper: '../../reports/arancelreinscripcion.jasper'
//         },
//         /////////////////////////2.3.3
//         AutorizacionReinsNoVigen: {
//             jasper: '../../reports/AutorizacionReinsNoVigen.jasper'
//         },
//         /////////////////////////2.3.5
//         acta_de_calificacion_nuevo_marco: {
//             jasper: '../../reports/Acta_calificaciones_Ordinaria_Nuevo_Marco.jasper'
//         },
//         lista_de_alumnosNo: {
//             jasper: '../../reports/ListaAsistenciaNo.jasper'
//         },
//         redi1: {
//             jasper: '../../reports/Redi1.jasper'
//         },

//         acta_de_calificacionExtra_nuevo_marco: {
//             jasper: '../../reports/Acta_calificacionesExtra_Ordinaria_Nuevo_Marco.jasper'
//         },
//         boleta_nuevomarco: {
//             jasper: '../../reports/boleta_nuevo_marco.jasper'
//         },
//     },
//     drivers: {
//         pg: {
//             path: '../../lib/postgresql-42.3.6.jar',
//             class: 'org.postgresql.Driver',
//             type: 'postgresql'
//         }
//     },
//     conns: {
//         dbserverCECyTEV: {
//             //Datos local
//             host: 'localhost',
//             port: 5432,
//             dbname: 'sigePruebaFina',
//             user: 'postgres',
//             pass: 'admin',
//             driver: 'pg'
//                 //Datos Finanzas
//                 // host: '10.1.40.81',
//                 // port: 5432,
//                 // dbname: 'sige',
//                 // user: 'usrsigebd',
//                 // pass: 'SIGEbd*2021!',
//                 // driver: 'pg'
//         }
//     },
//     defaultConn: 'dbserverCECyTEV'
// });
/////////////////////////////////////                          /////////////////////////////////////

const getAlumnos = async (req, res) => {
    const response = await pool.query('SELECT * FROM alumnos');
    res.status(200).json(response.rows);
};


/*const registrarStock = async(req, res) => {


    var { partida,producto,fechaAd,cantidad,unidad,descripcion,proveedor,telefono,direccion,costo,iva,total,folio,centro_trabajo,subTotal} = req.body;


    try {


        var comprobarDuplicado = await pool.query(' select * from costos where id_articulo='+producto+' and id_proveedor='+proveedor+' and precio_unitario='+costo);

      if(comprobarDuplicado.rowCount>0){

        res.json('Duplicado');

      }else{

    iva=16;
    
      var response1 = await pool.query(' select id,descripcion from cat_articulos where id='+producto);
      var nombreProducto=response1.rows[0].descripcion;
               

      var response = await pool.query(' INSERT INTO costos(id_articulo, id_proveedor,precio_unitario,iva,precio_total,fecha_inicio,esactivo) VALUES ($1, $2, $3, $4, $5, $6,$7) returning id as ultimoid; ',
                [producto,proveedor,costo,iva,total,fechaAd,true ]);  

                 var ultimoID = response.rows[0].ultimoid;
                
                if(response){

                var response2 = await pool.query(' INSERT INTO almacen(id_centrotrabajo,id_costos,existencias,fecha_adquisicion,esactivo,unidad,descripcion,id_partida,nombre_producto) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9)',
                [ centro_trabajo,ultimoID,cantidad,fechaAd,true,unidad,descripcion, partida,nombreProducto]);  

                }else{
                    res.json("Error");
                }

                if(response2){

                     var response3 = await pool.query(' INSERT INTO compras(id_costo,total_articulos,fecha_compra,folio_compra,esactivo) VALUES ($1, $2, $3, $4, $5)',
                [ ultimoID,cantidad,fechaAd,folio,true]);  

                }


                const impuestoReal = (subTotal * 0.16);

                 await pool.query ('INSERT INTO compras_reportes (folio_factura, id_proveedor, fecha_compra, importe, impuesto, total, id_partida) VALUES ($1, $2, $3, $4, $5, $6, $7)', [folio, proveedor, fechaAd, subTotal, impuestoReal, total, partida]);



                res.json("Save");

            }

        
    } catch (error) {

        console.log(error);
        res.json("Error");
        
    }


};*/

//La funcion registrarStock es utilizada en el componente de generar-documento, donde se registra la compra
const registrarStock = async (req, res) => {
    var {
        partida,
        producto,
        fechaAd,
        cantidad,
        unidad,
        descripcion,
        proveedor,
        telefono,
        direccion,
        costo,
        iva,
        total,
        folio,
        centro_trabajo,
        subTotal
    } = req.body;

    var idPartida = partida || req.body.id_partidas;

    try {
        var comprobarDuplicado = await pool.query(
            'SELECT * FROM costos WHERE id_articulo = $1 AND id_proveedor = $2 AND precio_unitario = $3',
            [producto, proveedor, costo]
        );

        let ultimoID;

        if (comprobarDuplicado.rowCount > 0) {
            ultimoID = comprobarDuplicado.rows[0].id;
        } else {
            iva = 16;
            var responseCostos = await pool.query(
                'INSERT INTO costos(id_articulo, id_proveedor, precio_unitario, iva, precio_total, fecha_inicio, esactivo) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id AS ultimoid;',
                [producto, proveedor, costo, iva, total, fechaAd, true]
            );
            ultimoID = responseCostos.rows[0].ultimoid;
        }

        var response1 = await pool.query(
            'SELECT id, descripcion FROM cat_articulos WHERE id = $1',
            [producto]
        );
        var nombreProducto = response1.rows[0]?.descripcion || descripcion;

        var existeEnAlmacen = await pool.query(
            'SELECT id FROM almacen WHERE id_costos = $1 AND id_centrotrabajo = $2',
            [ultimoID, centro_trabajo]
        );

        if (existeEnAlmacen.rowCount === 0) {
            await pool.query(
                'INSERT INTO almacen(id_centrotrabajo, id_costos, existencias, fecha_adquisicion, esactivo, unidad, descripcion, id_partida, nombre_producto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
                [centro_trabajo, ultimoID, 0, fechaAd, true, unidad, descripcion, idPartida, nombreProducto]
            );
        }

        // Insertamos en compras
        await pool.query(
            'INSERT INTO compras(id_costo, total_articulos, cantidad_recibida, estatus, fecha_compra, folio_compra, esactivo, id_partidas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [ultimoID, cantidad, 0, 'Pendiente', fechaAd, folio, true, idPartida]
        );

        // Intentamos insertar la cabecera en compras_reportes. 
        // Si el folio ya existe, la base de datos lo rechazará de forma segura gracias al UNIQUE.
        const impuestoReal = (parseFloat(subTotal) * 0.16) || 0;
        
        try {
            await pool.query(
                'INSERT INTO compras_reportes (folio_factura, id_proveedor, fecha_compra, importe, impuesto, total, id_partida, estatus_entrega) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
                [folio, proveedor, fechaAd, subTotal, impuestoReal, total, idPartida, 'Pendiente']
            );
        } catch (dbError) {
            // Si el error es violación de restricción única (código 23505 en PostgreSQL)
            if (dbError.code === '23505') {
                return res.status(400).json({ error: `El folio de compra '${folio}' ya se encuentra registrado en el sistema.` });
            }
            throw dbError; // Si es otro error, que lo atrape el catch principal
        }

        return res.json({ mensaje: "Save" });

    } catch (error) {
        console.error("Error en registrarStock:", error);
        
        // Doble seguridad por si el error sube al catch principal
        if (error.code === '23505') {
            return res.status(400).json({ error: `El folio de compra '${folio}' ya se encuentra registrado en el sistema.` });
        }

        return res.status(500).json({ error: "Error interno al registrar la compra." });
    }
};

const recibirEntregaParcial = async (req, res) => {
    const client = await pool.connect();

    try {
        const { 
            folio_compra, 
            id_compra, // ID del registro específico en la tabla 'compras'
            cantidad_recibida_ahora, 
            id_centrotrabajo, 
            id_usuario, 
            usuario_nombre, 
            referencia, 
            observaciones 
        } = req.body;

        const cantidadLlegada = parseInt(cantidad_recibida_ahora, 10);

        if (isNaN(cantidadLlegada) || cantidadLlegada <= 0) {
            return res.status(400).json({ error: "Cantidad inválida" });
        }

        // Iniciamos transacción SQL
        await client.query('BEGIN');

        // 1. Consultamos el artículo en la tabla 'compras'
        const compraRes = await client.query(
            `SELECT c.id, c.id_compra_reporte, c.id_costo, c.total_articulos, COALESCE(c.cantidad_recibida, 0) AS cantidad_recibida
             FROM compras c
             INNER JOIN compras_reportes cr ON c.id_compra_reporte = cr.id
             WHERE c.id = $1 AND cr.folio_factura = $2 AND c.esactivo = true FOR UPDATE`,
            [id_compra, folio_compra]
        );

        if (compraRes.rowCount === 0) {
            await client.query('ROLLBACK');
            return res.status(404).json({ error: "Artículo no encontrado en la compra especificada" });
        }

        const item = compraRes.rows[0];
        const nuevaCantidadRecibida = item.cantidad_recibida + cantidadLlegada;

        if (nuevaCantidadRecibida > item.total_articulos) {
            await client.query('ROLLBACK');
            return res.status(400).json({ 
                error: `La cantidad total (${nuevaCantidadRecibida}) supera la cantidad pedida (${item.total_articulos})` 
            });
        }

        const nuevoEstatus = nuevaCantidadRecibida >= item.total_articulos ? 'Entregada' : 'Incompleta';

        // 2. Insertamos la CABECERA de la recepción (recepciones_compra)
        const resCabecera = await client.query(
            `INSERT INTO recepciones_compra (
                fecha_recepcion, registrado_en, id_usuario, usuario_nombre, referencia, observaciones, solicitud_original
            ) VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $1, $2, $3, $4, $5) RETURNING id`,
            [id_usuario || null, usuario_nombre || 'Sistema', referencia || folio_compra, observaciones || 'Entrega parcial', folio_compra]
        );

        const idRecepcion = resCabecera.rows[0].id;

        // 3. Insertamos el DETALLE de la recepción (recepciones_compra_detalle)
        await client.query(
            `INSERT INTO recepciones_compra_detalle (id_recepcion, id_compra, cantidad)
             VALUES ($1, $2, $3)`,
            [idRecepcion, item.id, cantidadLlegada]
        );

        // 4. Actualizamos el acumulado y estatus en 'compras'
        await client.query(
            `UPDATE compras SET cantidad_recibida = $1, estatus = $2 WHERE id = $3`,
            [nuevaCantidadRecibida, nuevoEstatus, item.id]
        );

        // 5. Incrementamos el stock real en 'almacen'
        await client.query(
            `UPDATE almacen SET existencias = COALESCE(existencias, 0) + $1 
             WHERE id_costos = $2 AND id_centrotrabajo = $3`,
            [cantidadLlegada, item.id_costo, id_centrotrabajo]
        );

        // 6. Verificamos si todo el folio en 'compras_reportes' ya se completó
        const partidasReporte = await client.query(
            `SELECT estatus FROM compras WHERE id_compra_reporte = $1`,
            [item.id_compra_reporte]
        );

        const estatusArray = partidasReporte.rows.map(r => r.estatus);
        const estatusGeneral = estatusArray.every(est => est === 'Entregada') ? 'Entregada' : 'Incompleta';

        await client.query(
            `UPDATE compras_reportes SET estatus_entrega = $1 WHERE id = $2`,
            [estatusGeneral, item.id_compra_reporte]
        );

        // Confirmamos los cambios
        await client.query('COMMIT');

        return res.json({ 
            mensaje: "Recepción registrada correctamente", 
            id_recepcion: idRecepcion,
            estatusArticulo: nuevoEstatus, 
            estatusGeneral 
        });

    } catch (error) {
        await client.query('ROLLBACK');
        console.error("Error en la transacción de recepción:", error);
        return res.status(500).json({ error: "Error en el servidor al registrar la recepción" });
    } finally {
        client.release();
    }
};

const getDetalleCompraPorFolio = async (req, res) => {
    const { folio } = req.params;

    try {
        const query = `
            SELECT 
                c.id AS id_compra,
                c.id_compra_reporte,
                c.id_costo,
                c.total_articulos,
                COALESCE(c.cantidad_recibida, 0) AS cantidad_recibida,
                (c.total_articulos - COALESCE(c.cantidad_recibida, 0)) AS cantidad_pendiente,
                c.estatus,
                cr.folio_factura AS folio_compra,
                a.descripcion AS nombre_producto,
                a.clave AS clave_producto,
                p.nombre AS nombre_proveedor,
                cos.precio_unitario,
                alm.id_centrotrabajo
            FROM compras c
            INNER JOIN compras_reportes cr ON c.id_compra_reporte = cr.id
            INNER JOIN costos cos ON c.id_costo = cos.id
            INNER JOIN cat_articulos a ON cos.id_articulo = a.id
            LEFT JOIN proveedores p ON cos.id_proveedor = p.id
            LEFT JOIN almacen alm ON alm.id_costos = cos.id
            WHERE cr.folio_factura = $1 AND c.esactivo = true
            ORDER BY c.id ASC;
        `;

        const response = await pool.query(query, [folio]);

        if (response.rowCount === 0) {
            return res.status(404).json({
                msg: 'Folio no encontrado o sin artículos activos'
            });
        }

        return res.json(response.rows);

    } catch (error) {
        console.error('Error al traer detalle de compra: ', error);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
};

const registrarRecepcionBatch = async (req, res) => {
    const client = await pool.connect();

    try {
        const { clave_operacion, fecha_recepcion, referencia, observaciones, detalles } = req.body;
        const id_usuario = req.usuario?.id || null; // Extraído del middleware validarJWT
        const usuario_nombre = req.usuario?.nombre || 'Usuario Almacén';

        if (!detalles || !Array.isArray(detalles) || detalles.length === 0) {
            return res.status(400).json({ error: 'Debe incluir al menos un artículo para recibir.' });
        }

        // 1. Verificación de idempotencia (Evita duplicados si el usuario reintenta)
        const recepcionExistente = await pool.query(
            'SELECT id FROM recepciones_compra WHERE clave_operacion = $1',
            [clave_operacion]
        );

        if (recepcionExistente.rowCount > 0) {
            return res.json({ 
                id_recepcion: recepcionExistente.rows[0].id, 
                mensaje: 'La recepción ya había sido procesada anteriormente.' 
            });
        }

        await client.query('BEGIN');

        // 2. Insertar Cabecera en recepciones_compra
        const insertCabecera = await client.query(
            `INSERT INTO recepciones_compra 
                (fecha_recepcion, registrado_en, id_usuario, usuario_nombre, referencia, observaciones, clave_operacion) 
             VALUES ($1, CURRENT_TIMESTAMP, $2, $3, $4, $5, $6) 
             RETURNING id`,
            [fecha_recepcion, id_usuario, usuario_nombre, referencia, observaciones, clave_operacion]
        );

        const idRecepcion = insertCabecera.rows[0].id;

        // 3. Procesar cada ítem del arreglo 'detalles'
        for (const item of detalles) {
            const id_compra = parseInt(item.id_compra, 10);
            const cantidadRecibir = parseInt(item.cantidad, 10);

            if (isNaN(cantidadRecibir) || cantidadRecibir <= 0) {
                await client.query('ROLLBACK');
                return res.status(400).json({ error: `Cantidad inválida para el artículo ID ${id_compra}` });
            }

            // Consultar el registro actual en compras
            const compraRes = await client.query(
                `SELECT c.id, c.id_compra_reporte, c.id_costo, c.total_articulos, 
                        COALESCE(c.cantidad_recibida, 0) AS cantidad_recibida,
                        cr.id_centrotrabajo
                 FROM compras c
                 INNER JOIN compras_reportes cr ON c.id_compra_reporte = cr.id
                 WHERE c.id = $1 AND c.esactivo = true FOR UPDATE`,
                [id_compra]
            );

            if (compraRes.rowCount === 0) {
                await client.query('ROLLBACK');
                return res.status(404).json({ error: `No se encontró el renglón de compra ID ${id_compra}` });
            }

            const compra = compraRes.rows[0];
            const nuevaCantidadRecibida = compra.cantidad_recibida + cantidadRecibir;

            if (nuevaCantidadRecibida > compra.total_articulos) {
                await client.query('ROLLBACK');
                return res.status(400).json({ 
                    error: `La cantidad a recibir excede el pendiente para la compra ID ${id_compra}` 
                });
            }

            const nuevoEstatus = nuevaCantidadRecibida >= compra.total_articulos ? 'Entregada' : 'Incompleta';

            // Insertar Renglón en recepciones_compra_detalle
            await client.query(
                `INSERT INTO recepciones_compra_detalle (id_recepcion, id_compra, cantidad) 
                 VALUES ($1, $2, $3)`,
                [idRecepcion, id_compra, cantidadRecibir]
            );

            // Actualizar acumulado en compras
            await client.query(
                `UPDATE compras SET cantidad_recibida = $1, estatus = $2 WHERE id = $3`,
                [nuevaCantidadRecibida, nuevoEstatus, id_compra]
            );

            // Sumar a las existencias físicas en almacen
            await client.query(
                `UPDATE almacen SET existencias = COALESCE(existencias, 0) + $1 
                 WHERE id_costos = $2 AND id_centrotrabajo = $3`,
                [cantidadRecibir, compra.id_costo, compra.id_centrotrabajo]
            );

            // Evaluar el estatus global en compras_reportes
            const partidasRes = await client.query(
                'SELECT estatus FROM compras WHERE id_compra_reporte = $1',
                [compra.id_compra_reporte]
            );

            const todoEntregado = partidasRes.rows.every(r => r.estatus === 'Entregada');
            const estatusGeneral = todoEntregado ? 'Entregada' : 'Incompleta';

            await client.query(
                'UPDATE compras_reportes SET estatus_entrega = $1 WHERE id = $2',
                [estatusGeneral, compra.id_compra_reporte]
            );
        }

        await client.query('COMMIT');
        return res.json({ id_recepcion: idRecepcion, mensaje: 'Recepción procesada exitosamente' });

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error al procesar recepciones batch:', error);
        return res.status(500).json({ error: 'Error interno en el servidor al registrar la recepción.' });
    } finally {
        client.release();
    }
};

const getComprasPorFolio = async (req, res) => {
    const { folio } = req.query;
    try {
        const query = `
            SELECT 
                c.id,
                c.id_compra_reporte,
                c.id_costo,
                c.total_articulos,
                COALESCE(c.cantidad_recibida, 0) AS recibido,
                (c.total_articulos - COALESCE(c.cantidad_recibida, 0)) AS pendiente,
                c.estatus AS estado,
                c.esactivo,
                c.fecha_compra,
                cr.folio_factura AS folio_compra,
                cr.id_proveedor,
                p.razon_social AS proveedor,
                art.descripcion AS articulo,
                art.clave,
                TRUE AS gestion_recepciones
            FROM compras c
            INNER JOIN compras_reportes cr ON c.id_compra_reporte = cr.id
            INNER JOIN costos cos ON c.id_costo = cos.id
            INNER JOIN cat_articulos art ON cos.id_articulo = art.id
            LEFT JOIN cat_proveedores p ON cr.id_proveedor = p.id
            WHERE cr.folio_factura = $1 AND c.esactivo = true
            ORDER BY c.id ASC;
        `;
        const response = await pool.query(query, [folio]);
        return res.json(response.rows);
    } catch (error) {
        console.error('Error en getComprasPorFolio:', error);
        return res.status(500).json({ error: 'Error al consultar folio' });
    }
};

const getHistorialItem = async (req, res) => {
    const { id } = req.params;
    try {
        const query = `
            SELECT 
                rc.id,
                rc.fecha_recepcion,
                rc.registrado_en,
                rc.referencia,
                rc.observaciones,
                rc.usuario_nombre,
                rcd.cantidad
            FROM recepciones_compra_detalle rcd
            INNER JOIN recepciones_compra rc ON rcd.id_recepcion = rc.id
            WHERE rcd.id_compra = $1
            ORDER BY rc.fecha_recepcion DESC;
        `;
        const response = await pool.query(query, [id]);
        return res.json(response.rows);
    } catch (error) {
        console.error('Error en getHistorialItem:', error);
        return res.status(500).json({ error: 'Error al consultar historial' });
    }
};




const transferirArticulosPlantel = async (req, res) => {


    var { plantel, partida, idcosto, fecha, cantidadEnStock, cantidadTransferir, consecutivo, autorizo, recibio, nombreProducto } = req.body;

    console.log(req.body);


    const BuscarDuplicado = await pool.query('SELECT id_costos,folio_transferencia FROM movimientosdg WHERE folio_transferencia= $1 and id_costos=$2 and id_centrotrabajo_transfiere=$3;', [consecutivo, idcosto, plantel]);

    if (BuscarDuplicado.rowCount > 0) {
        res.json("Duplicado");
    } else {

        var response = await pool.query('select nombre_producto from almacen where id_costos=' + idcosto);
        var nom_producto = response.rows[0].nombre_producto;

        var nuevaExistencia = parseInt(cantidadEnStock) - parseInt(cantidadTransferir);


        if (response) {

            var response2 = await pool.query(' INSERT INTO movimientosdg(id_costos,existencia_inicial,num_articulos_solicitados,existencia_final,id_centrotrabajo_transfiere,fecha,folio_transferencia,nom_articulo) VALUES ($1, $2, $3, $4, $5, $6,$7,$8)',
                [idcosto, cantidadEnStock, cantidadTransferir, nuevaExistencia, plantel, fecha, consecutivo, nom_producto]);

        } else {
            res.json("Error");
        }


        res.json("Add");

    }

};



/*const recargarStock = async(req, res) => {


    var idArticulo=req.params.idproducto;
    var idProveedor=req.params.idproveedor;

    var impuesto=(req.body.importe * 0.16).toFixed(2);


    console.log(req.body);
    console.log(impuesto);


    var { partida,producto,proveedor,folio,cantidad,fechaAd,importe,totalCompra} = req.body;

    iva=16;

      var response = await pool.query('select costos.id,id_articulo,id_proveedor,existencias FROM costos ' +
                                      'INNER JOIN almacen ON costos.id = almacen.id_costos where id_articulo='+idArticulo+' and id_proveedor='+idProveedor
                                     );

      if(response.rowCount > 0){


        var idCosto=response.rows[0].id;
        var existencia=response.rows[0].existencias;

        let nuevaExistencia= parseInt(existencia) +  parseInt(cantidad);
        console.log(nuevaExistencia);

        var response5 = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_costos='+idCosto, [nuevaExistencia]);


      }else{
        console.log("SinRegistro")
      }

      if(response5){

               var response3 = await pool.query(' INSERT INTO compras(id_costo,total_articulos,fecha_compra,folio_compra,esactivo) VALUES ($1, $2, $3, $4, $5)',
                [ idCosto,cantidad,fechaAd,folio,true]);  

                       
      }else{
        console.log("error al insertar a la tabla de compra");
        res.json("SinRegistrox")
      }


    //   inicia guardado en tabla de compras_reporte

      if(response3){

       var response4= await pool.query ('INSERT INTO compras_reportes (folio_factura, id_proveedor, fecha_compra, importe, impuesto, total, id_partida) VALUES ($1, $2, $3, $4, $5, $6, $7)', [folio, proveedor, fechaAd, importe, impuesto, totalCompra, partida]);
        res.json("reload");
      }

      else{
        res.json("Error al insertar en compras reporte");
      }

};*/


const recargarStock = async (req, res) => {
    console.log("=== BODY RECIBIDO ===", req.body);

    // 1. Resolver identificadores soportando params o body
    const idArticulo = req.params.idproducto || req.body.producto;
    const idProv = req.params.idproveedor || req.body.proveedor;
    const idPartidaRaw = req.body.partida || req.body.id_partidas;
    const idPartida = idPartidaRaw ? parseInt(idPartidaRaw, 10) : null;

    const cantidad = parseInt(req.body.cantidad, 10);
    const fechaAd = req.body.fechaAd;
    const folio = req.body.folio;

    // 2. Extraer costo unitario y cálculos de montos
    const precioUnitario = parseFloat(
        req.body.costo ?? req.body.precioUnitario ?? req.body.costoUnitario ?? req.body.precio ?? 0
    );

    // Si viene subtotal/importe se usa, si no, se calcula: precioUnitario * cantidad
    const subtotal = parseFloat(
        req.body.subTotal || req.body.importe || (precioUnitario * cantidad) || 0
    );
    const impuesto = parseFloat((subtotal * 0.16).toFixed(2));
    const totalFinal = parseFloat(
        req.body.total || req.body.totalCompra || (subtotal + impuesto)
    );

    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // Buscar el costo y registro de almacén asociado
        const response = await client.query(
            `SELECT costos.id AS id_costo, costos.precio_unitario, almacen.existencias 
             FROM costos 
             INNER JOIN almacen ON costos.id = almacen.id_costos 
             WHERE costos.id_articulo = $1 AND costos.id_proveedor = $2`,
            [idArticulo, idProv]
        );

        if (response.rowCount === 0) {
            await client.query('ROLLBACK');
            console.log("SinRegistro: No existe relación costo/almacén para este artículo y proveedor");
            return res.status(200).send("SinRegistro");
        }

        const idCosto = response.rows[0].id_costo;

        // 1. Actualizar el precio unitario en costos si viene un valor mayor a 0
        if (precioUnitario > 0) {
            await client.query(
                `UPDATE costos 
                 SET precio_unitario = $1 
                 WHERE id = $2`,
                [precioUnitario, idCosto]
            );
        }

        // 2. Suma atómica en almacén
        await client.query(
            `UPDATE almacen 
             SET existencias = existencias + $1 
             WHERE id_costos = $2`,
            [cantidad, idCosto]
        );

        // 3. Registrar compra
        await client.query(
            `INSERT INTO compras (id_costo, total_articulos, fecha_compra, folio_compra, esactivo, id_partidas) 
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [idCosto, cantidad, fechaAd, folio, true, idPartida]
        );

        // 4. Registrar compras_reportes
        await client.query(
            `INSERT INTO compras_reportes (folio_factura, id_proveedor, fecha_compra, importe, impuesto, total, id_partida) 
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [folio, idProv, fechaAd, subtotal, impuesto, totalFinal, idPartida]
        );

        await client.query('COMMIT');
        return res.status(200).send("Save");

    } catch (error) {
        await client.query('ROLLBACK');
        console.error("Error en recargarStock:", error);
        return res.status(500).json("Error");
    } finally {
        client.release();
    }
};



const getListaArticulosTransferir = async (req, res) => {

    var folio = req.params.folio

    const response = await pool.query('SELECT * from movimientosdg where folio_transferencia=' + folio);
    res.status(200).json(response.rows);

};

const eliminarArticulo = async (req, res) => {

    var idarticulo = req.params.idarticulo

    const response = await pool.query('delete from movimientosdg where id=' + idarticulo);
    res.json("Deleted");

};


const confirmarTransferencia = async (req, res) => {

    var consecutivo = req.params.consecutivo

    const response = await pool.query('SELECT * from movimientosdg where folio_transferencia=' + consecutivo);

    if (response.rowCount > 0) {

        for (var i = 0; i < response.rowCount; i++) {

            const seleccion = await pool.query('SELECT * from almacen where id_centrotrabajo=' + response.rows[i].id_centrotrabajo_transfiere + ' and id_costos=' + response.rows[i].id_costos);


            if (seleccion.rowCount <= 0) {

                console.log("****************** " + response.rows[i].num_articulos_solicitados);

                var insertarEnAlmacen = await pool.query('INSERT INTO almacen(id_centrotrabajo,id_costos,existencias,fecha_adquisicion,esactivo,nombre_producto) VALUES ($1, $2, $3, $4, $5,$6)',
                    [response.rows[i].id_centrotrabajo_transfiere, response.rows[i].id_costos, response.rows[i].num_articulos_solicitados, response.rows[i].fecha, true, response.rows[i].nom_articulo]);

            } else {

                var existenciaActualizada = parseInt(response.rows[i].num_articulos_solicitados) + parseInt(seleccion.rows[0].existencias);
                var actualizacionAlmacen = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_costos=' + response.rows[i].id_costos + ' and id_centrotrabajo= ' + response.rows[i].id_centrotrabajo_transfiere, [existenciaActualizada]);

            }


            console.log(response.rows[i].num_articulos_solicitados);

            const response2 = await pool.query('SELECT id_costos,existencias from almacen where id_costos=' + response.rows[i].id_costos + ' and id_centrotrabajo=47');
            console.log(response2.rows[0].existencias)

            var nuevostock = parseInt(response2.rows[0].existencias) - parseInt(response.rows[i].num_articulos_solicitados);
            console.log(nuevostock);


            var response3 = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_costos=' + response.rows[i].id_costos + ' and id_centrotrabajo=47', [nuevostock]);

        }

        const response4 = await pool.query('SELECT folio_transferencia from consecutivo where id=1');
        var nuevoConsecutivo = response4.rows[0].folio_transferencia + 1;

        var response5 = await pool.query('UPDATE consecutivo SET folio_transferencia=$1 WHERE id=1', [nuevoConsecutivo]);

        res.json("ListaOk");

    }

};

const confirmarTransferenciaEnPlantel = async (req, res) => {

    var consecutivo = req.params.consecutivo

    const response = await pool.query('SELECT * from movimientosplantel where folio_solicitud=' + consecutivo);

    if (response.rowCount > 0) {

        for (var i = 0; i < response.rowCount; i++) {

            const seleccion = await pool.query('SELECT * from almacen where id_centrotrabajo=' + response.rows[i].id_centrotrabajo + ' and id_costos=' + response.rows[i].id_costos);


            var existenciaActualizada = parseInt(seleccion.rows[0].existencias) - parseInt(response.rows[i].num_articulos_solicitados);
            var actualizacionAlmacen = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_costos=' + response.rows[i].id_costos + ' and id_centrotrabajo= ' + response.rows[i].id_centrotrabajo, [existenciaActualizada]);

        }

        res.json("ListaOk");

    }

};


const getxistencias = async (req, res) => {

    var idplantel = req.params.idplantel;


    const response = await pool.query('Select pa.descripcion as "partida", lower (al.nombre_producto) as "descripcion", al.existencias,al.id_costos ' +
        ' from almacen al ' +
        ' INNER JOIN costos co ON (al.id_costos = co.id) ' +
        ' INNER JOIN cat_articulos ca ON (co.id_articulo = ca.id) ' +
        ' INNER JOIN cat_partidas pa ON (ca.id_partidas = pa.id) ' +
        ' where al.id_centrotrabajo =' + idplantel + ' ORDER BY pa.clave, ca.clave');


    res.status(200).json(response.rows);

};

const getexistenciaPlantel = async (req, res) => {

    var idArticulo = req.params.idArticulo;


    const response = await pool.query('Select existencias' +
        ' from almacen where id=' + idArticulo);


    res.status(200).json(response.rows);

};

const getSalidas = async (req, res) => {

    var idplantel = req.params.idplantel;


    const response = await pool.query("select distinct on (movimientosplantel.id_centrotrabajo,movimientosplantel.folio_solicitud) movimientosplantel.id,movimientosplantel.id_costos,num_articulos_solicitados,fecha,nombre_solicita,nombre_autoriza,movimientosplantel.ruta,almacen.descripcion,movimientosplantel.folio_solicitud " +
        " from movimientosplantel " +
        " inner join almacen on almacen.id_costos=movimientosplantel.id_costos  " +
        " where movimientosplantel.id_centrotrabajo =" + idplantel + " and almacen.descripcion <> '' ORDER BY movimientosplantel.id_centrotrabajo,movimientosplantel.folio_solicitud, fecha desc");


    res.status(200).json(response.rows);

};


const getexistenciasBajas = async (req, res) => {
    try {
        const idplantel = req.params.idplantel;

        const query = `
            SELECT 
                pa.descripcion AS partida,
                al.nombre_producto AS "descripcion",
                co.precio_unitario AS costo,
                al.existencias,
                pro.razon_social AS proveedor,
                pro.telefono
            FROM almacen al
            INNER JOIN costos co ON (al.id_costos = co.id)
            INNER JOIN cat_articulos ca ON (co.id_articulo = ca.id)
            INNER JOIN cat_partidas pa ON (ca.id_partidas = pa.id)
            INNER JOIN cat_proveedores pro ON (co.id_proveedor = pro.id)
            WHERE al.id_centrotrabajo = $1 AND al.existencias <= 10
            ORDER BY pa.clave, ca.clave, co.precio_unitario ASC
        `;

        const response = await pool.query(query, [idplantel]);
        res.status(200).json(response.rows);

    } catch (error) {
        console.error("Error en getexistenciasBajas:", error);
        res.status(500).json({ error: "Error al obtener existencias bajas" });
    }
};


const UsarArticuloPlantel = async (req, res) => {

    var { nombreAutoriza, nombreSolicita, cantidadDisponible, cantidadAUtilizar, observacion, fecha, idPlantel, idCostos } = req.body;
    var totalStock = parseInt(cantidadDisponible) - parseInt(cantidadAUtilizar);

    var insertMovimientoPlantel = await pool.query('INSERT INTO movimientosplantel(id_costos,existencia_inicial,num_articulos_solicitados,existencia_final,fecha,nombre_solicita,descripcion,nombre_autoriza,esactivo,id_centrotrabajo) VALUES ($1, $2, $3, $4, $5,$6, $7, $8, $9,$10)',
        [idCostos, cantidadDisponible, cantidadAUtilizar, totalStock, fecha, nombreSolicita, observacion, nombreAutoriza, true, idPlantel]);

    if (insertMovimientoPlantel) {

        const selectAlmacen = await pool.query('SELECT existencias from almacen where id_centrotrabajo=' + idPlantel + ' and id_costos=' + idCostos);

        var stock = selectAlmacen.rows[0].existencias;
        var nuevoStock = parseInt(stock) - parseInt(cantidadAUtilizar);

        if (selectAlmacen) {

            var updateAlmacen = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_centrotrabajo=' + idPlantel + ' and id_costos=' + idCostos, [nuevoStock]);

            res.json("Add")

        }

    } else {
        res.json("Error al usar el artículo")
    }


};



module.exports = {
    getAlumnos,
    registrarStock,
    recargarStock,
    transferirArticulosPlantel,
    getListaArticulosTransferir,
    eliminarArticulo,
    confirmarTransferencia,
    confirmarTransferenciaEnPlantel,
    getxistencias,
    getexistenciaPlantel,
    getSalidas,
    getexistenciasBajas,
    UsarArticuloPlantel,
    recibirEntregaParcial,
    getDetalleCompraPorFolio,
    registrarRecepcionBatch,
    getComprasPorFolio,
    getHistorialItem

}