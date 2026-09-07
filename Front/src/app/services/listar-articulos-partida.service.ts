import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListarArticulosPartidaService {

  private API = environment.uri_api;


  constructor(
    private http: HttpClient
  ) { }


  listarPartidas() {

    return this.http.get<any>(
      `${this.API}/articulos/partidas`
    );

  }


  listarArticulosPorPartida(
    idPartida: number
  ) {

    return this.http.get<any>(
      `${this.API}/articulos/por-partida/${idPartida}`
    );

  }

}