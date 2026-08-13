export interface articulo {
    id?: number;
    clave: string;
    id_partidas?: number | null;
    id_unidad_medida?: number | null;
    unidad_medida?: string;
    descripcion: string;
    esActivo: boolean;
    esBasico: boolean;
}

export interface partida {
    id: number;
    clave: string;
    descripcion: string;
}

export interface unidad_medida {
    id: number;
    nombre_medida: string;
}