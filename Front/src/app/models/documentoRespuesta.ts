export class DocumentoRespuesta {

    tipo?: string;
    nombreAreaEmite?:string;  // agregar a BD
    tipoAtencion?: string;
    personaQueEmite?: string;
    tipoDocumento?: string;
    nombreAreaTurnada?:string; // agregar a BD
    referenciaDocumento?: string;
    fechaRespuesta?: Date;   // agregar a BD
    resumen?: string;
    atendidoPor?:string;
    id_departamentox?:number;

}


export class DocumentoRespuestaSinPDF {

    nombreAreaEmite?:string;  // agregar a BD
    tipoAtencion?: string;
    personaQueEmite?: string;
    tipoDocumento?: string;
    nombreAreaTurnada?:string; // agregar a BD
    fechaRespuesta?: Date;   // agregar a BD
    resumen?: string;
    url_respuesta?:string;
    atendidoPor?:string;
    id_departamentox?:number;

}
