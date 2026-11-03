import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proveedores } from '../models/proveedores'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private API = environment.uri_api;

  constructor(private http: HttpClient) { }

  listarProveedores(): Observable<{ ok: boolean; proveedores: proveedores[] }> {
    return this.http.get<{ ok: boolean; proveedores: proveedores[] }>(`${this.API}/proveedores`);
  }

  crearProveedor(proveedor: Partial<proveedores>): Observable<{ ok: boolean; msg: string; proveedor: proveedores }> {
    return this.http.post<{ ok: boolean; msg: string; proveedor: proveedores }>(`${this.API}/proveedores`, proveedor);
  }

  traerProveedoresPorArticulo(idArticulo: number): Observable<proveedores[]> {
    return this.http.get<proveedores[]>(`${this.API}/proveedores/traerProveedoresPorArticulo/${idArticulo}`);
  }
}
