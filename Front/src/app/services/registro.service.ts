import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map }from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

 

  API_URI = environment.uri_api;
  //'http://localhost:3000';
  
  url=environment.uri_api+'/users';
  userToken:string="";
  

  constructor(private http:HttpClient) { 
   
      }

  addUsuario(usuario:Usuario){
    console.log(usuario)
    console.log("valor de usuario.cargo en addUsuario "+usuario.cargo)
    return this.http.post(this.url,usuario)
}

loginUsuario(email:string,password:string){

  return this.http.get(this.url+'/'+email+'/'+password)
  .pipe(
      map(res=>{ 
 
        if(res=="NoEncontrado"){
                return res;
        }else{ 
          
           localStorage.setItem('datos',JSON.stringify(res)); //Grabamos la respuesta del RES (token y cargodb) en formato JSON
           var datos=JSON.parse(localStorage.getItem('datos') || '{}'); //Pasamos los datos de STORAGE a  formato legible en consola
        
           var token=datos.token;     
              this.guardarToken(token);
        return res;
        }
      })
  );
}

logOut(){
  localStorage.removeItem('token');
  localStorage.removeItem('datos'); // Elimina datos del Storage (respuesta de la peticion (token y cargodb))
}

private guardarToken(idToken:string){
  this.userToken=idToken;
  localStorage.setItem('token',idToken);
}

// leerToken(){
//   if(localStorage.getItem('token')){

//     this.userToken=localStorage.getItem('token');
//   }else{
//     this.userToken='';
//   }
//   return this.userToken;
// }

// cargarSesionDesdeStorage() {
//   const token = localStorage.getItem('token');
//   const datos = localStorage.getItem('datos');
  
//   if (token) {
//     this.userToken = token;
//   }

//   if (datos) {
//     try {
//       return JSON.parse(datos); 
//     } catch (e) {
//       console.error('Error al parsear datos de sesión:', e);
//       return null;
//     }
//   }

//   return null;
// }



estaAutenticado():boolean{
  let token;

 token=localStorage.getItem('token');
var extraccion="";

if(token==null){
  token="";
}
extraccion=token.substring(0,37);

// console.log("--------"+token.length)

 if(token.length>=150 && extraccion=="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."){
   return true;                       
 }else{
     return false;
 }


}


getPlanteles(){

  var t=localStorage.getItem('token');

    const httpHeaders=new HttpHeaders({
      'content-type':'application/json',
      'Authorization': ''+t
    });

  return this.http.get(this.url,{headers:httpHeaders});
}

getCargos(){

  var t=localStorage.getItem('token');

    const httpHeaders=new HttpHeaders({
      'content-type':'application/json',
      'Authorization': ''+t
    });

  return this.http.get(this.url+'/cargos',{headers:httpHeaders});
}

actualizarPassword(email:string,password:string){

  var t=localStorage.getItem('token');

  const httpHeaders=new HttpHeaders({
    'content-type':'application/json',
    'Authorization': ''+t
  });
return this.http.get(this.url+'/actualizar/'+email+'/'+password,{headers:httpHeaders})
//return this.http.get(this.url+'/cargos',{headers:httpHeaders});
// return this.http.put(`${this.url}/actualizarPassword/${email}/${password}`,{headers:httpHeaders});
}

getDocentes(idplantel:any){
  // console.log(idplantel)
  var t=localStorage.getItem('token');
  
  const httpHeaders=new HttpHeaders({
    'content-type':'application/json',
    'Authorization': ''+t
  });

  return this.http.get(`${this.API_URI}/docentesusuario/${idplantel}`,{headers:httpHeaders});
}

getDatosDocentes(numempleado:any){
  console.log(numempleado)
  var t=localStorage.getItem('token');
  
  const httpHeaders=new HttpHeaders({
    'content-type':'application/json',
    'Authorization': ''+t
  });

  return this.http.get(`${this.API_URI}/docenteos/${numempleado}`,{headers:httpHeaders});
}

getpermodulos(cargodb:string){

  var t=localStorage.getItem('token');
  
  const httpHeaders=new HttpHeaders({
    'content-type':'application/json',
    'Authorization': ''+t
  });

  return this.http.get(`${this.API_URI}/permodulos/${cargodb}`,{headers:httpHeaders});

}

getAdministrativo(idplantel:any){
  // console.log(idplantel)
  var t=localStorage.getItem('token');
  
  const httpHeaders=new HttpHeaders({
    'content-type':'application/json',
    'Authorization': ''+t
  });

  return this.http.get(`${this.API_URI}/administrativousuario/${idplantel}`,{headers:httpHeaders});
}



}

export interface Usuario{
  email?:string;
  nombre?:string;
  password?:string;
  cargo?:number;
  plantel?:string;
  numemp?:number;
  idplantel?:number;
  mailusuario?:string;
}

export interface Cargos{

 idcargo?:number;
 cargo?:string;

}


export interface Planteles{

   nombreplantel?:string;
  nombre?:string;
  correoControlEscolar?:string;
  correoAdministrativo?:string;
  idplantel?:number;

}

