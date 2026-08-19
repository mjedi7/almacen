import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { articulo } from '../models/articulos/alta-articulo'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

   private API: string = environment.uri_api;
    //  API_URI = environment.uri_api;

  crearArticulo(dto: Omit<articulo, 'id'>){

    return this.http.post<{ok: boolean; articulo: articulo}>(`${this.API}/articulos`, dto)
  }

  obtenerSiguienteClave(idPartida: number | string): Observable<any> {
  // Asegúrate de incluir el prefijo /articulos
  return this.http.get(`${this.API}/articulos/siguiente-clave/${idPartida}`);
}

  obtenerArticulo(id: Number){
    return this.http.get<{ok: boolean, articulo: articulo}>(`${this.API}/articulos/${id}`);
  }

 listarArticulos() {
  return this.http.get<{ ok: boolean; articulos: articulo[] }>(`${this.API}/articulos`);
}

  actualizarArticulo(id: Number, payload: articulo){
    return this.http.put<any>(`${this.API}/articulos/${id}`, payload)
  }

}