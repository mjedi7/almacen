import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { unidad_medida } from "../models/articulos/alta-articulo";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UnidadMedidaServices{
    //private baseUrl: string = environment.uri_api;
    private baseUrl: string = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    //Método que consume la API REST
    listarUnidadesMedida():Observable<any>{
        return this.http.get<any>(`${this.baseUrl}/unidad-medida`);
    }
}