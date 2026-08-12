export interface articulo{
    id?: number;
    clave: string;
    id_partidas?: number | null;
    unidad_medida?: string;
    descripcion: string;
    esActivo: boolean;
    esBasico: boolean;
}

export interface partida{
    id: number;
    clave: string;
    descripcion: string;
}