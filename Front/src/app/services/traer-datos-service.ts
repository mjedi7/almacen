import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataTablesResponse } from '../classes/data-tables-response';
import { environment } from '../../../src/environments/environment';


var url='http://localhost:8081/api';

@Injectable({
  providedIn: 'root'
})


export class TraerDatosService {

  constructor(public http:HttpClient) { }

  traerDatos(){
    
    console.log("llego al service");
    return this.http.get(`${url}/traerDatos`);

  }

}