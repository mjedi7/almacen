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
   * @param idCosto ID del costo o artículo (ej: '271')
   * @param usuario Nombre del usuario autenticado (opcional, por defecto lee localStorage)
   */
  descargarKardex(partida: string, idCosto: string, usuario?: string): Observable<Blob> {
    const usuarioSesion =
      usuario ||
      localStorage.getItem('nombre') ||
      localStorage.getItem('usuario') ||
      'ADMINISTRADOR';

    const params = new HttpParams()
      .set('clavePartida', partida)
      .set('idCostos', idCosto)
      .set('usuario', usuarioSesion);

    return this.http.get(`${this.API}/reporte/kardex`, {
      params,
      responseType: 'blob'
    });
  }
}