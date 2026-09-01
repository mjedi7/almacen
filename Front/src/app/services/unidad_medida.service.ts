import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaServices {
  private baseUrl: string = 'http://172.16.0.100:4200';

  constructor(private http: HttpClient) { }

  listarUnidadesMedida(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/unidad-medida`);
  }
}