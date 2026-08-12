export interface articulo{
    id?: number;
    clave: string;
    id_partidas?: number | null;
<<<<<<< HEAD
    id_unidad_medida?:number | null;
=======
    unidad_medida?: string;
>>>>>>> c1c31cfdce4e82004943d05247d013c1e6466b6a
    descripcion: string;
    esActivo: boolean;
    esBasico: boolean;
}

export interface partida{
    id: number;
    clave: string;
    descripcion: string;
}

export interface unidad_medida{
    id: number;
    nombre_medida: string;
}