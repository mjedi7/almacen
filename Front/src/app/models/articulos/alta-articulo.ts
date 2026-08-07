export interface articulo{
    id?: number;
    clave: string;
    id_partidas?: number | null;
    descripcion: string;
    esActivo: boolean;
    esBasico: boolean;
}

export interface partida{
    id: number;
    clave: string;
    descripcion: string;
}