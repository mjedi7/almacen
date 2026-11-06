import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface CentroTrabajo {
  id: number;
  codigo?: number;
  id_tamano_plantel?: string;
  claveplantel: string;
  descripcion: string;
  director: string;
  administrativo: string;
  esactivo?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CentroTrabajoService {

  private API_URL = environment.uri_api;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
  }

  /**
   * Obtener todos los centros de trabajo con sus encargados
   */
  getCentrosTrabajo(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/traerEncargadosPlantel`, {
      headers: this.getHeaders()
    });
  }

  /**
   * Actualizar director y administrativo de un centro de trabajo
   */
  actualizarEncargados(id: number, data: { director: string; administrativo: string }): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/actualizarEncargadosPlantel/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  /**
   * Actualizar solo el Director
   */
  actualizarDirector(id: number, director: string): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/actualizarDirectorPlantel/${id}`, { director }, {
      headers: this.getHeaders()
    });
  }

  /**
   * Actualizar solo el Administrativo
   */
  actualizarAdministrativo(id: number, administrativo: string): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/actualizarAdministrativoPlantel/${id}`, { administrativo }, {
      headers: this.getHeaders()
    });
  }

}
