import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ArticuloBusqueda {
  id: number;
  clave_completa: string;
  descripcion: string;
  partida: string;
}

@Injectable({ providedIn: 'root' })
export class ReporteExistenciasSaldosService {
  private baseUrl = `${environment.uri_api}/api`;

  constructor(private http: HttpClient) {}

  buscarArticulos(q: string): Observable<{ articulos: ArticuloBusqueda[] }> {
    const params = new HttpParams().set('q', q);
    return this.http.get<{ articulos: ArticuloBusqueda[] }>(
      `${this.baseUrl}/articulos/buscar`, { params }
    );
  }

  descargarReporte(
    fechaInicio: string,
    fechaFin: string,
    idsArticulos: number[],
    usuario: string
  ): Observable<Blob> {
    return this.http.post(
      `${this.baseUrl}/reporte-existencias-saldos`,
      { fechaInicio, fechaFin, idsArticulos, usuario },
      { responseType: 'blob' }
    );
  }
}
