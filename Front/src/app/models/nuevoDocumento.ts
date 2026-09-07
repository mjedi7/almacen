export class almacen {

    partida?: number;
    producto?:string;
    fechaAd?: Date;
    cantidad?: number;
    unidad?:string;
    descripcion?:string;
    proveedor?: string;
    telefono?: string;
    direccion?: string;
    costo?: number;
    iva?:string;
    total?:number;
    folio?:string
    centro_trabajo?:string;
    subTotal?:number;


}


export class recargaAlmacen {

    partida?: number;
    producto?:string;
    proveedor?: string;
    folio?:string
    cantidad?: number;
    fechaAd?: Date;
    importe?:number;
    totalCompra?:number;

}




// Modelos de Transferencias


export  class Transferencias{

    plantel?:number;
    partida?: number;
    idcosto?:string;
    fecha: string;
    cantidadEnStock?: number;
    cantidadTransferir?:number;
    consecutivo?:number;
    autorizo?:string;
    recibio?:string;
    nombreProducto?:string;
}


// Modelo de Usar Articulos

export class UsarArticulo{

    nombreAutoriza?:string;
    nombreSolicita?:string;
    cantidadDisponible?:number;
    cantidadAUtilizar?:number;
    observacion?:string;
    fecha?:string;
    idPlantel:number;
    idCostos:number

}

// Modelo para requisiciones de Plantel a DG

export  class Requisiciones{

    plantel?:number;
    partida?: number;
    idcosto?:string;
    fecha: string;
    cantidadSolicitar?:number;
    consecutivo?:number;
    nombreProducto?:string;
}

// modelo para comentarios en requisiciones pendientes

export class Comentarios{

    comentario?:string;
    fechaComentarioPlantel?:string;
    cts?:number;

}
// modelo para usar articulo plantel

export  class UsarArticuloPlantel{

    plantel?:number;
    producto?:string;
    stockDisponible:number;
    cantidadSolicitar?:number;
    fecha: string;
    nombreSolicitante?:string;
    consecutivo?:number; 
    idcosto?:string;
    existenciaFinal?:number;
    descripcion?:string;
    nomAutoriza?:string;
}
