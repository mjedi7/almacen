import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { partida } from '../models/articulos/alta-articulo'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  private API = environment.uri_api;

  constructor(private http: HttpClient) { }

  listarPartidas(){
    return this.http.get<{ok: boolean; partidas: partida[]}>(`${this.API}/partidas`);
  }
}