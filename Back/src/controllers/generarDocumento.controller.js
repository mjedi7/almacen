const { response } = require('express');
const { Pool } = require('pg');
const archiver = require('archiver');
const path = require('path');
const fs = require('fs');


const pool = new Pool({

    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD

})

/*jasper = require('node-jasper')({
    path: '../../lib/jasperreports-6.19.1',
    reports: {


        ReporteGeneralPorPlantel: {
            jasper: '../../reports/Reporte_General.jasper'
        },

        FormatoRequisicion: {
            jasper: '../../reports/Reporte_Requisicion.jasper'
        },
        FormatoRequisicionPlantel: {
            jasper: '../../reports/Reporte_Requisicion_Plantel.jasper'
        },
        FormatoRequisicionDG: {
            jasper: '../../reports/Reporte_Requisicion_DG.jasper'
        },
        ListaArticulosSurtidos: {
            jasper: '../../reports/ListaArticulosSurtidos.jasper'
        },
        ListaArticulosSurtidosSinMontos: {
            jasper: '../../reports/ListaArticulosSurtidosSinMontos.jasper'
        },
        reporte_movimiento_x_partida: {
            jasper: '../../reports/Movimientos_x_partida.jasper'
        },
        reporte_movimiento_x_partida_todos: {
            jasper: '../../reports/Movimientos_x_partida_todos.jasper'
        },
        reporte_existencias_x_partida: {
            jasper: '../../reports/reporte_existencias_x_partida.jasper'
        },
        reporte_existencias_x_partida_todas: {
            jasper: '../../reports/reporte_existencias_x_partida_todas.jasper'
        },
        reporte_de_compras_todas: {
            jasper: '../../reports/reporte_de_compras_todas.jasper'
        },
        reporte_de_compras_x_partida: {
            jasper: '../../reports/reporte_de_compras_x_partida.jasper'
        },
        reporte_de_compras_x_proveedor: {
            jasper: '../../reports/reporte_de_compras_x_proveedor.jasper'
        },


    },
    drivers: {
        pg: {
            path: '../../lib/postgresql-42.3.6.jar',
            class: 'org.postgresql.Driver',
            type: 'postgresql'
        }
    },
    conns: {
        dbserverCECyTEV: {
            host: process.env.HOST_BD || 'localhost',
            port: process.env.PORT_BD || 5432,
            dbname: process.env.DATABASE_BD || 'almacen',
            user: process.env.USER_BD || 'postgres',
            pass: process.env.PASSWORD_BD || 'admin',
            driver: 'pg'
        }
    },
    defaultConn: 'dbserverCECyTEV'
});
// //////////////////////////////////////////////////////////////////////

function generarPDF(nombreReporte, parametros, nombreArchivo) {
    return new Promise((resolve, reject) => {

        const rutaSalida = path.join(tempDir, nombreArchivo);

        jasper.pdf({
            report: nombreReporte,
            data: parametros,
            output: rutaSalida.replace('.pdf', '')
        }, (err) => {

            if (err) {
                return reject(err);
            }

            resolve(rutaSalida);
        });
    });
}
/////////////////////////////////////                          /////////////////////////////////////


const ReporteGeneralPorPlantel = async (req, res) => {

    var idPlantel = req.params.idPlantel;

    console.log(idPlantel);

    let ReporteGeneralPorPlantel = {
        report: 'ReporteGeneralPorPlantel',
        data: {
            ID_PLANTEL: parseInt(idPlantel)
        },
    };

    try {
        let pdf = jasper.pdf(ReporteGeneralPorPlantel);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }
};


const FormatoRequisicion = async (req, res) => {

    var idPlantel = req.params.idPlantel;
    var folio = req.params.folio;

    let FormatoRequisicion = {
        report: 'FormatoRequisicion',
        data: {
            ID_PLANTEL: parseInt(idPlantel),
            FOLIO_SOLICITUD: parseInt(folio)

        },
    };

    try {
        let pdf = jasper.pdf(FormatoRequisicion);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        const response4 = await pool.query('SELECT folio_requisicion from consecutivo_requisicion where id_centrotrabajo=' + idPlantel);
        var nuevoConsecutivo = response4.rows[0].folio_requisicion + 1;

        var response5 = await pool.query('UPDATE consecutivo_requisicion SET folio_requisicion=$1 WHERE id_centrotrabajo=$2', [nuevoConsecutivo, idPlantel]);

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }


};


const FormatoRequisicionPlantel = async (req, res) => {

    var idPlantel = req.params.idPlantel;
    var folio = req.params.folio;

    let FormatoRequisicionPlantel = {
        report: 'FormatoRequisicionPlantel',
        data: {
            ID_PLANTEL: parseInt(idPlantel),
            FOLIO_SOLICITUD: parseInt(folio)

        },
    };

    try {
        let pdf = jasper.pdf(FormatoRequisicionPlantel);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        const response4 = await pool.query('SELECT num_folio from consecutivo_usar_articulo_plantel where id_centrotrabajo=' + idPlantel);
        var nuevoConsecutivo = response4.rows[0].num_folio + 1;

        var response5 = await pool.query('UPDATE consecutivo_usar_articulo_plantel SET num_folio=$1 WHERE id_centrotrabajo=$2', [nuevoConsecutivo, idPlantel]);

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }


};



const FormatoRequisicionDG = async (req, res) => {

    var idPlantel = req.params.idPlantel;
    var folio = req.params.folio;

    let FormatoRequisicionDG = {
        report: 'FormatoRequisicionDG',
        data: {
            ID_PLANTEL: parseInt(idPlantel),
            FOLIO_SOLICITUD: parseInt(folio)
        },
    };

    try {
        let pdf = jasper.pdf(FormatoRequisicionDG);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        const response4 = await pool.query('SELECT folio_requisicion from consecutivo_requisicion where id_centrotrabajo=' + idPlantel);
        var nuevoConsecutivo = response4.rows[0].folio_requisicion + 1;

        var response5 = await pool.query('UPDATE consecutivo_requisicion SET folio_requisicion=$1 WHERE id_centrotrabajo=$2', [nuevoConsecutivo, idPlantel]);

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }


};

const ListaArticulosSurtidos = async (req, res) => {

    var idPlantel = req.params.plantel;
    var folio = req.params.folio;

    console.log("xxx: " + idPlantel);
    console.log("xxx= " + folio);

    let ListaArticulosSurtidos = {
        report: 'ListaArticulosSurtidos',
        data: {
            ID_PLANTEL: parseInt(idPlantel),
            FOLIO_SOLICITUD: parseInt(folio)
        },
    };

    try {

        let pdf = jasper.pdf(ListaArticulosSurtidos);

        const folderPath = path.join(__dirname, '/reportes');
        const filePath = path.join(folderPath, 'Transferencia_Con_Montos-' + Date.now() + '.pdf');

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        // Asegurar que la carpeta existe
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        fs.writeFile(filePath, pdf, 'binary', (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
            } else {
                console.log('PDF guardado exitosamente en:', filePath);
                res.json("pdf1-Generado")
            }
        });

    } catch (error) {
        console.log(error);
    }

};

const ListaArticulosSurtidosSinMontos = async (req, res) => {

    var idPlantel = req.params.plantel;
    var folio = req.params.folio;

    console.log("xxx: " + idPlantel);
    console.log("xxx= " + folio);

    let ListaArticulosSurtidosSinMontos = {
        report: 'ListaArticulosSurtidosSinMontos',
        data: {
            ID_PLANTEL: parseInt(idPlantel),
            FOLIO_SOLICITUD: parseInt(folio)
        },
    };

    try {

        let pdf = jasper.pdf(ListaArticulosSurtidosSinMontos);

        const folderPath = path.join(__dirname, '/reportes');
        const filePath = path.join(folderPath, 'Transferencia_Sin_Montos-' + Date.now() + '.pdf');

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        // Asegurar que la carpeta existe
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        fs.writeFile(filePath, pdf, 'binary', (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
            } else {
                console.log('PDF guardado exitosamente en:', filePath);
                res.json("pdf2-Generado")
            }
        });


        // res.send(pdf);

    } catch (error) {
        console.log(error);
    }
};




const reporte_movimiento_x_partida = async (req, res) => {

    console.log(req.body);

    var partida = req.body.partida;
    var fechaIni = req.body.fechaIni;
    var fechaFin = req.body.fechaFin;

    var fechaIni2 = new Date(fechaIni);
    var fechaFin2 = new Date(fechaFin);

    const fechaEnviar1 = fechaIni2.toISOString().slice(0, 10);
    const fechaEnviar2 = fechaFin2.toISOString().slice(0, 10);

    var anio = fechaEnviar1.slice(0, 4);
    console.log(anio);
    var mes = fechaEnviar1.slice(5, 7);
    console.log(mes)
    var dia = fechaEnviar1.slice(8, 10);
    console.log(dia);


    var anio2 = fechaEnviar2.slice(0, 4);
    console.log(anio2);
    var mes2 = fechaEnviar2.slice(5, 7);
    console.log(mes2)
    var dia2 = fechaEnviar2.slice(8, 10);
    console.log(dia2);

    var enviarFecha1 = dia + "-" + mes + "-" + anio;
    var enviarFecha2 = dia2 + "-" + mes2 + "-" + anio2;


    let reporte_movimiento_x_partida = {
        report: 'reporte_movimiento_x_partida',
        data: {
            ID_PARTIDA: partida,
            FECHA_INICIO: enviarFecha1,
            FECHA_FIN: enviarFecha2
        },
    };

    try {
        let pdf = jasper.pdf(reporte_movimiento_x_partida);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }
};


const reporte_de_compras_todas = async (req, res) => {

    console.log(req.body);

    var partida = req.body.partida;
    var fechaIni = req.body.fechaIni;
    var fechaFin = req.body.fechaFin;
    var fechaReport = req.body.fechaReporte;

    var fechaIni2 = new Date(fechaIni);
    var fechaFin2 = new Date(fechaFin);

    const fechaEnviar1 = fechaIni2.toISOString().slice(0, 10);
    const fechaEnviar2 = fechaFin2.toISOString().slice(0, 10);

    var anio = fechaEnviar1.slice(0, 4);
    console.log(anio);
    var mes = fechaEnviar1.slice(5, 7);
    console.log(mes)
    var dia = fechaEnviar1.slice(8, 10);
    console.log(dia);


    var anio2 = fechaEnviar2.slice(0, 4);
    console.log(anio2);
    var mes2 = fechaEnviar2.slice(5, 7);
    console.log(mes2)
    var dia2 = fechaEnviar2.slice(8, 10);
    console.log(dia2);

    var enviarFecha1 = dia + "-" + mes + "-" + anio;
    var enviarFecha2 = dia2 + "-" + mes2 + "-" + anio2;


    let reporte_de_compras_todas = {
        report: 'reporte_de_compras_todas',
        data: {
            // ID_PARTIDA: partida,
            FechaParaReporte: fechaReport,
            FechaInicioReporte: enviarFecha1,
            FechaFinReporte: enviarFecha2,
        },
    };

    try {
        let pdf = jasper.pdf(reporte_de_compras_todas);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }
};

const reporte_de_compras_x_partida = async (req, res) => {

    console.log(req.body);

    var partida = parseInt(req.body.partida);
    var fechaIni = req.body.fechaIni;
    var fechaFin = req.body.fechaFin;
    var fechaReport = req.body.fechaReporte;

    var fechaIni2 = new Date(fechaIni);
    var fechaFin2 = new Date(fechaFin);

    const fechaEnviar1 = fechaIni2.toISOString().slice(0, 10);
    const fechaEnviar2 = fechaFin2.toISOString().slice(0, 10);

    var anio = fechaEnviar1.slice(0, 4);
    console.log(anio);
    var mes = fechaEnviar1.slice(5, 7);
    console.log(mes)
    var dia = fechaEnviar1.slice(8, 10);
    console.log(dia);


    var anio2 = fechaEnviar2.slice(0, 4);
    console.log(anio2);
    var mes2 = fechaEnviar2.slice(5, 7);
    console.log(mes2)
    var dia2 = fechaEnviar2.slice(8, 10);
    console.log(dia2);

    var enviarFecha1 = dia + "-" + mes + "-" + anio;
    var enviarFecha2 = dia2 + "-" + mes2 + "-" + anio2;


    let reporte_de_compras_x_partida = {
        report: 'reporte_de_compras_x_partida',
        data: {
            // ID_PARTIDA: partida,
            FechaParaReporte: fechaReport,
            FechaInicioReporte: enviarFecha1,
            FechaFinReporte: enviarFecha2,
            IdPartida: partida
        },
    };

    try {
        let pdf = jasper.pdf(reporte_de_compras_x_partida);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }
};


const reporte_movimiento_x_partida_todos = async (req, res) => {

    console.log(req.body);

    var partida = req.body.partida;
    var fechaIni = req.body.fechaIni;
    var fechaFin = req.body.fechaFin;

    var fechaIni2 = new Date(fechaIni);
    var fechaFin2 = new Date(fechaFin);

    const fechaEnviar1 = fechaIni2.toISOString().slice(0, 10);
    const fechaEnviar2 = fechaFin2.toISOString().slice(0, 10);

    var anio = fechaEnviar1.slice(0, 4);
    console.log(anio);
    var mes = fechaEnviar1.slice(5, 7);
    console.log(mes)
    var dia = fechaEnviar1.slice(8, 10);
    console.log(dia);


    var anio2 = fechaEnviar2.slice(0, 4);
    console.log(anio2);
    var mes2 = fechaEnviar2.slice(5, 7);
    console.log(mes2)
    var dia2 = fechaEnviar2.slice(8, 10);
    console.log(dia2);

    var enviarFecha1 = dia + "-" + mes + "-" + anio;
    var enviarFecha2 = dia2 + "-" + mes2 + "-" + anio2;


    let reporte_movimiento_x_partida_todos = {
        report: 'reporte_movimiento_x_partida_todos',
        data: {
            ID_PARTIDA: partida,
            FECHA_INICIO: enviarFecha1,
            FECHA_FIN: enviarFecha2
        },
    };

    try {
        let pdf = jasper.pdf(reporte_movimiento_x_partida_todos);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }
};


const reporte_de_compras_x_proveedor = async (req, res) => {

    console.log(req.body);

    var idproveedor = parseInt(req.body.idproveedor);
    var fechaIni = req.body.fechaIni;
    var fechaFin = req.body.fechaFin;
    var fechaReport = req.body.fechaReporte;

    var fechaIni2 = new Date(fechaIni);
    var fechaFin2 = new Date(fechaFin);

    const fechaEnviar1 = fechaIni2.toISOString().slice(0, 10);
    const fechaEnviar2 = fechaFin2.toISOString().slice(0, 10);

    var anio = fechaEnviar1.slice(0, 4);
    console.log(anio);
    var mes = fechaEnviar1.slice(5, 7);
    console.log(mes)
    var dia = fechaEnviar1.slice(8, 10);
    console.log(dia);


    var anio2 = fechaEnviar2.slice(0, 4);
    console.log(anio2);
    var mes2 = fechaEnviar2.slice(5, 7);
    console.log(mes2)
    var dia2 = fechaEnviar2.slice(8, 10);
    console.log(dia2);

    var enviarFecha1 = dia + "-" + mes + "-" + anio;
    var enviarFecha2 = dia2 + "-" + mes2 + "-" + anio2;


    let reporte_de_compras_x_proveedor = {
        report: 'reporte_de_compras_x_proveedor',
        data: {

            FechaParaReporte: fechaReport,
            FechaInicioReporte: enviarFecha1,
            FechaFinReporte: enviarFecha2,
            IdProveedor: idproveedor
        },
    };

    try {
        let pdf = jasper.pdf(reporte_de_compras_x_proveedor);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }
};



const reporte_existencias_x_partida = async (req, res) => {

    console.log(req.body);

    var partida = req.body.partida;
    var centro_trabajo = req.body.centro_trabajo;
    var fechaReporte = req.body.fecha;

    var D = new Date(fechaReporte)

    var anio = D.getFullYear();
    var dia = D.getDate() + 1;
    var mes = D.getMonth() + 1;

    var Completa = dia + "/" + mes + "/" + anio
    console.log(Completa);

    let reporte_existencias_x_partida = {
        report: 'reporte_existencias_x_partida',
        data: {
            ID_PLANTEL: centro_trabajo,
            Clave_Partida: partida,
            FechaParaReporte: Completa
        },
    };

    try {
        let pdf = jasper.pdf(reporte_existencias_x_partida);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }
};


const reporte_existencias_x_partida_todas = async (req, res) => {

    console.log(req.body);

    var partida = req.body.partida;
    var centro_trabajo = req.body.centro_trabajo;
    var fechaReporte = req.body.fecha;

    var D = new Date(fechaReporte)

    var anio = D.getFullYear();
    var dia = D.getDate() + 1;
    var mes = D.getMonth() + 1;

    var Completa = dia + "/" + mes + "/" + anio
    console.log(Completa);


    let reporte_existencias_x_partida_todas = {
        report: 'reporte_existencias_x_partida_todas',
        data: {
            ID_PLANTEL: centro_trabajo,
            Clave_Partida: partida,
            FechaParaReporte: Completa
        },
    };

    try {
        let pdf = jasper.pdf(reporte_existencias_x_partida_todas);

        res.set({
            'Content-type': 'application/pdf',
            'Content-Length': pdf.length
        });

        res.send(pdf);

    } catch (error) {
        console.log(error);
    }
};

const descargarzip = async (req, res) => {

    try {

        console.log("LLego a descargar ZIP")

        const carpetaPDFs = path.join(__dirname, '/reportes');

        if (!fs.existsSync(carpetaPDFs)) {
            return res.status(404).json({ error: 'La carpeta no existe' });
        }


        const archivos = fs.readdirSync(carpetaPDFs)
            .filter(file => file.toLowerCase().endsWith('.pdf'));

        if (archivos.length === 0) {
            return res.status(404).json({ error: 'No hay archivos PDF para comprimir' });
        }


        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', 'attachment; filename=archivos_pdf.zip');

        const archive = archiver('zip', {
            zlib: { level: 9 }
        });

        archive.pipe(res);

        // 📎 Agregar cada PDF al ZIP
        archivos.forEach(file => {
            const rutaCompleta = path.join(carpetaPDFs, file);
            archive.file(rutaCompleta, { name: file });
        });

        // Finalizar ZIP
        await archive.finalize();

        console.log('ZIP generado y enviado correctamente');


        //Eliminamos lo PDF ALV

        setTimeout(() => {

            fs.rm(carpetaPDFs, { recursive: true, force: true }, (err) => {
                if (err) {
                    console.error('Error eliminando carpeta:', err);
                } else {
                    console.log('Carpeta eliminada correctamente');
                }
            });

        }, 2000);



    } catch (error) {
        console.error('Error generando ZIP:', error);
        res.status(500).json({ error: 'Error generando ZIP' });
    }


};











const generarDocumento = async (req, res) => {

    var numidentificador = req.params.numidentificador;
    var fecha_registrox = req.params.fecha_registrox;
    var EmiteAuxiliar = req.params.Emite;


    console.log(req.body)

    var {
        tipo,
        areaQueEmite,
        tipoAtencion,
        personaQueEmite,
        tipoDocumento,
        prioridad,
        areaTurnada,
        idDepartamentoRecibe,
        idDepartamentoEmite,
        nomDepartamentoEmite,
        referenciaDocumento,
        asuntoDocumento,
        fechaDocumento,
        fechaRecepcion,
        fechaLimiteRespuesta,
        resumen,
        estatus,
        direccionFirmante
    } = req.body;

    var idDependenciaexterna = areaQueEmite;



    const datosBase = await pool.query("select * from documentos_generados where referencia='" + referenciaDocumento + "'");


    if (datosBase.rowCount > 0) {

        console.log("IF  Repetido")
        res.json("Repetido");

    } else {


        if (areaQueEmite >= 100) {

            areaQueEmite = EmiteAuxiliar;

        } else {
            areaQueEmite = areaQueEmite;
        }


        console.log("enter en ELSE")


        if (areaQueEmite == 99) {
            var ruta = "Documentos/Direccion/" + numidentificador + "";
        } else if (areaQueEmite == 98) {
            var ruta = "Documentos/Academica/" + numidentificador + "";
        } else if (areaQueEmite == 97) {
            var ruta = "Documentos/Administrativa/" + numidentificador + "";
        } else if (areaQueEmite == 96) {
            var ruta = "Documentos/Vinculacion/" + numidentificador + "";
        } else if (areaQueEmite == 95) {
            var ruta = "Documentos/Planeacion/" + numidentificador + "";
        } else if (areaQueEmite == 94) {
            var ruta = "Documentos/Tecnologia/" + numidentificador + "";
        } else if (areaQueEmite == 93) {
            var ruta = "Documentos/Juridico/" + numidentificador + "";
        } else if (areaQueEmite == 92) {
            var ruta = "Documentos/Transparencia/" + numidentificador + "";
        } else if (areaQueEmite == 91) {
            var ruta = "Documentos/UnidadGenero/" + numidentificador + "";
        } else if (areaQueEmite == 90) {
            var ruta = "Documentos/Oficialia/" + numidentificador + "";
        }

        try {
            var response = await pool.query(' INSERT INTO documentos_generados( tipo, area_que_emite,tipo_atencion,persona_que_emite,tipo_documento,prioridad,area_turnada,fecha_sello_recibido,id_departamento_turnado,departamento_emite,referencia,asunto,fecha_documento,fecha_limite_respuesta,resumen,url,estatus,direccion_firmante,fecha_registro,id_externo) VALUES ($1, $2, $3, $4, $5, $6, ' +
                '$7, $8, $9, $10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) returning id as ultimoid; ', [tipo, areaQueEmite, tipoAtencion, personaQueEmite, tipoDocumento, prioridad, areaTurnada, fechaRecepcion, idDepartamentoRecibe, idDepartamentoEmite, referenciaDocumento, asuntoDocumento,
                fechaDocumento, fechaLimiteRespuesta, resumen, ruta, estatus, direccionFirmante, fecha_registrox, idDependenciaexterna
            ]);

            var ultimoID = response.rows[0].ultimoid;

            if (response) {

                const response2 = await pool.query("select * from  folios_unicos");

                if (response2.rowCount > 0) {

                    var incremento = parseInt(response2.rows[0].folio_unico) + 1;
                    const Fecha = new Date();
                    let anio = Fecha.getFullYear();

                    const response3 = await pool.query('UPDATE folios_unicos SET folio_unico=$1,anio=$2 WHERE (id=1)', [
                        incremento,
                        anio
                    ]);

                    const response4 = await pool.query('UPDATE documentos_generados SET folio_unico=$1 WHERE (id=$2)', [
                        incremento,
                        ultimoID
                    ]);

                    var mensaje = "Registrado";

                    res.status(200).json({ incremento, mensaje });


                } else {
                    res.json("NoEncontrado");
                }

            }

        } catch (error) {
            console.log("Error: " + error);
        }

    }


};


// INICIA GUARDADO MULTIPLE DEPARTAMENTO


const generarDocumentoMultipleEnvio = async (req, res) => {

    var numidentificador = req.params.numidentificador;
    var fecha_registrox = req.params.fecha_registrox;
    var id_externo = req.params.id_externo;


    console.log(req.body)
    console.log(req.body.multipleenviox[0]);


    var {
        tipo,
        areaQueEmite,
        tipoAtencion,
        personaQueEmite,
        tipoDocumento,
        prioridad,
        areaTurnada,
        idDepartamentoRecibe,
        idDepartamentoEmite,
        nomDepartamentoEmite,
        referenciaDocumento,
        asuntoDocumento,
        fechaDocumento,
        fechaRecepcion,
        fechaLimiteRespuesta,
        resumen,
        estatus,
        direccionFirmante,
        multipleenviox
    } = req.body;


    if (areaQueEmite == 99) {
        var ruta = "Documentos/Direccion/" + numidentificador + "";
    } else if (areaQueEmite == 98) {
        var ruta = "Documentos/Academica/" + numidentificador + "";
    } else if (areaQueEmite == 97) {
        var ruta = "Documentos/Administrativa/" + numidentificador + "";
    } else if (areaQueEmite == 96) {
        var ruta = "Documentos/Vinculacion/" + numidentificador + "";
    } else if (areaQueEmite == 95) {
        var ruta = "Documentos/Planeacion/" + numidentificador + "";
    } else if (areaQueEmite == 94) {
        var ruta = "Documentos/Tecnologia/" + numidentificador + "";
    } else if (areaQueEmite == 93) {
        var ruta = "Documentos/Juridico/" + numidentificador + "";
    } else if (areaQueEmite == 92) {
        var ruta = "Documentos/Transparencia/" + numidentificador + "";
    } else if (areaQueEmite == 91) {
        var ruta = "Documentos/UnidadGenero/" + numidentificador + "";
    } else if (areaQueEmite == 90) {
        var ruta = "Documentos/Oficialia/" + numidentificador + "";
    }


    for (var i = 0; i < req.body.multipleenviox.length; i++) {


        try {
            var response = await pool.query(' INSERT INTO documentos_generados( tipo, area_que_emite,tipo_atencion,persona_que_emite,tipo_documento,prioridad,area_turnada,fecha_sello_recibido,id_departamento_turnado,departamento_emite,referencia,asunto,fecha_documento,fecha_limite_respuesta,resumen,url,estatus,direccion_firmante,fecha_registro,id_externo) VALUES ($1, $2, $3, $4, $5, $6, ' +
                '$7, $8, $9, $10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) returning id as ultimoid; ', [tipo, areaQueEmite, tipoAtencion, personaQueEmite, tipoDocumento, prioridad, areaTurnada, fechaRecepcion, multipleenviox[i], idDepartamentoEmite, referenciaDocumento, asuntoDocumento,
                fechaDocumento, fechaLimiteRespuesta, resumen, ruta, estatus, direccionFirmante, fecha_registrox, id_externo
            ]);

            var ultimoID = response.rows[0].ultimoid;

            if (response) {

                const response2 = await pool.query("select * from  folios_unicos");

                if (response2.rowCount > 0) {

                    var incremento = parseInt(response2.rows[0].folio_unico) + 1;
                    const Fecha = new Date();
                    let anio = Fecha.getFullYear();

                    const response3 = await pool.query('UPDATE folios_unicos SET folio_unico=$1,anio=$2 WHERE (id=1)', [
                        incremento,
                        anio
                    ]);

                    const response4 = await pool.query('UPDATE documentos_generados SET folio_unico=$1 WHERE (id=$2)', [
                        incremento,
                        ultimoID
                    ]);

                    var mensaje = "Registrado";

                } else {
                    res.json("NoEncontrado");
                }

            }

        } catch (error) {
            console.log("Error: " + error);
        }


    }

    res.status(200).json({ incremento, mensaje });

};
// TERMINA MULTTIPLE GUARDADO




// INICIA MULTIPLE GUARDADO A MULTIPLES DIRECCIONES **************************************

const generarDocumentoMultipleEnvioDirecciones = async (req, res) => {

    var numidentificador = req.params.numidentificador;
    var fecha_registrox = req.params.fecha_registrox;
    var id_externo = req.params.id_externo;


    console.log(req.body)
    console.log(req.body.multipleenviodireccionesx[0]);


    var {
        tipo,
        areaQueEmite,
        tipoAtencion,
        personaQueEmite,
        tipoDocumento,
        prioridad,
        areaTurnada,
        idDepartamentoRecibe,
        idDepartamentoEmite,
        nomDepartamentoEmite,
        referenciaDocumento,
        asuntoDocumento,
        fechaDocumento,
        fechaRecepcion,
        fechaLimiteRespuesta,
        resumen,
        estatus,
        direccionFirmante,
        multipleenviox,
        multipleenviodireccionesx

    } = req.body;


    if (areaQueEmite == 99) {
        var ruta = "Documentos/Direccion/" + numidentificador + "";
    } else if (areaQueEmite == 98) {
        var ruta = "Documentos/Academica/" + numidentificador + "";
    } else if (areaQueEmite == 97) {
        var ruta = "Documentos/Administrativa/" + numidentificador + "";
    } else if (areaQueEmite == 96) {
        var ruta = "Documentos/Vinculacion/" + numidentificador + "";
    } else if (areaQueEmite == 95) {
        var ruta = "Documentos/Planeacion/" + numidentificador + "";
    } else if (areaQueEmite == 94) {
        var ruta = "Documentos/Tecnologia/" + numidentificador + "";
    } else if (areaQueEmite == 93) {
        var ruta = "Documentos/Juridico/" + numidentificador + "";
    } else if (areaQueEmite == 92) {
        var ruta = "Documentos/Transparencia/" + numidentificador + "";
    } else if (areaQueEmite == 91) {
        var ruta = "Documentos/UnidadGenero/" + numidentificador + "";
    } else if (areaQueEmite == 90) {
        var ruta = "Documentos/Oficialia/" + numidentificador + "";
    }


    for (var i = 0; i < req.body.multipleenviodireccionesx.length; i++) {


        try {
            var response = await pool.query(' INSERT INTO documentos_generados( tipo, area_que_emite,tipo_atencion,persona_que_emite,tipo_documento,prioridad,area_turnada,fecha_sello_recibido,departamento_emite,referencia,asunto,fecha_documento,fecha_limite_respuesta,resumen,url,estatus,direccion_firmante,fecha_registro,id_externo) VALUES ($1, $2, $3, $4, $5, $6, ' +
                '$7, $8, $9, $10,$11,$12,$13,$14,$15,$16,$17,$18,$19) returning id as ultimoid; ', [tipo, areaQueEmite, tipoAtencion, personaQueEmite, tipoDocumento, prioridad, multipleenviodireccionesx[i], fechaRecepcion, idDepartamentoEmite, referenciaDocumento, asuntoDocumento,
                fechaDocumento, fechaLimiteRespuesta, resumen, ruta, estatus, direccionFirmante, fecha_registrox, id_externo
            ]);

            var ultimoID = response.rows[0].ultimoid;

            if (response) {

                const response2 = await pool.query("select * from  folios_unicos");

                if (response2.rowCount > 0) {

                    var incremento = parseInt(response2.rows[0].folio_unico) + 1;
                    const Fecha = new Date();
                    let anio = Fecha.getFullYear();

                    const response3 = await pool.query('UPDATE folios_unicos SET folio_unico=$1,anio=$2 WHERE (id=1)', [
                        incremento,
                        anio
                    ]);

                    const response4 = await pool.query('UPDATE documentos_generados SET folio_unico=$1 WHERE (id=$2)', [
                        incremento,
                        ultimoID
                    ]);

                    var mensaje = "Registrado";

                } else {
                    res.json("NoEncontrado");
                }

            }

        } catch (error) {
            console.log("Error: " + error);
        }


    }

    res.status(200).json({ incremento, mensaje });

};




// TERMINA MULTTIPLE GUARDADO ************************************************************





const subirDocumento = (req, res) => {

    var status = req.params.cb;

    console.log("ESTE ES EL STATUS: " + status);

    try {

        const file = req.files;

        if (file) {
            res.json(req.files);
            console.log("Se subio el documento correctamente");
        } else {
            res.json("sin subir");
        }


    } catch (error) {
        console.log(error);
    }

};



module.exports = {
    generarDocumento,
    subirDocumento,
    generarDocumentoMultipleEnvio,
    generarDocumentoMultipleEnvioDirecciones,
    FormatoRequisicion,
    FormatoRequisicionPlantel,
    FormatoRequisicionDG,
    descargarzip,



    //REPORTES

    ReporteGeneralPorPlantel,
    ListaArticulosSurtidos,
    ListaArticulosSurtidosSinMontos,
    reporte_movimiento_x_partida,
    reporte_movimiento_x_partida_todos,
    reporte_existencias_x_partida,
    reporte_existencias_x_partida_todas,
    reporte_de_compras_todas,
    reporte_de_compras_x_partida,
    reporte_de_compras_x_proveedor

}*/