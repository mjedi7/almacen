

import { proveedores } from '../models/proveedores'; 
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private API = environment.uri_api;
  
    constructor(private http: HttpClient) { }
  


traerProveedoresPorArticulo(idArticulo: number) {

  return this.http.get<proveedores[]>(`${this.API}/proveedores/traerProveedoresPorArticulo/${idArticulo}`);
 } 
}
