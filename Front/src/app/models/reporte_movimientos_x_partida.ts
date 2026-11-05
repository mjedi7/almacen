export class reporte_x_partida {

    fechaIni?: Date;
    fechaFin?: Date;
    partida?: string;

}

export class reporte_de_compras {

    fechaIni?: Date;
    fechaFin?: Date;
    partida?: string;
    clavePartida?: string;
    fechaReporte?:Date;

}

export class reporte_de_compras_x_proveedor{

    fechaIni?: Date;
    fechaFin?: Date;
    idproveedor: number;
    nombreProveedor?: string;
    fechaReporte?:Date;

}

export class reporte_existencia_x_partida {

    centro_trabajo?: number;
    partida?: string;
    fecha?:Date;

}

