import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerarPDFService {

  private API = environment.uri_api;

  constructor(private http: HttpClient) { }

  /**
   * Obtiene el PDF del Kardex como Blob binario
   * @param partida Clave de la partida (ej: '21101')
   * @param idCosto ID del costo/artículo (ej: '048')
   */
  descargarKardex(partida: string, idCosto: string): Observable<Blob> {
    const params = new HttpParams()
      .set('clavePartida', partida)
      .set('idCostos', idCosto);

    return this.http.get(`${this.API}/reporte/prueba`, {
      params,
      responseType: 'blob'
    });
  }

}