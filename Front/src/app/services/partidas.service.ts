/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { partida } from '../models/articulos/alta-articulo'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  //private API = environment.uri_api;
  private baseUrl: string = 'http://172.16.0.148:3000';

  constructor(private http: HttpClient) { }

  listarPartidas(){
    return this.http.get<{ok: boolean; partidas: partida[]}>(`${this.API}/partidas`);
  }
}*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { partida } from '../models/articulos/alta-articulo'; // Ajusta la ruta a tu modelo

@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  // 1. Declaramos la propiedad API
  private API: string = 'http://172.16.0.148:3000'; 
  // (Si usas environment, sería: private API: string = environment.baseUrl;)

  constructor(private http: HttpClient) { }

  // 2. Método listarPartidas()
  listarPartidas(): Observable<{ ok: boolean; partidas: partida[] }> {
    return this.http.get<{ ok: boolean; partidas: partida[] }>(`${this.API}/partidas`);
  }
}