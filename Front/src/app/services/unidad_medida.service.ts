import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaServices {
  private baseUrl: string = environment.uri_api;

  constructor(private http: HttpClient) { }

  listarUnidadesMedida(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/unidad-medida`);
  }
}