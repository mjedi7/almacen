import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { partida } from '../models/articulos/alta-articulo'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {
  private API = environment.uri_api;

  constructor(private http: HttpClient) { }

  listarPartidas(): Observable<{ ok: boolean; partidas: partida[] }> {
    return this.http.get<{ ok: boolean; partidas: partida[] }>(`${this.API}/partidas`);
  }

  crearPartida(partida: { clave: string; descripcion: string; esactivo?: boolean }): Observable<{ ok: boolean; msg: string; partida: partida }> {
    return this.http.post<{ ok: boolean; msg: string; partida: partida }>(`${this.API}/partidas`, partida);
  }
}
