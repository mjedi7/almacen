import { Component, OnInit } from '@angular/core';
import { CambioPassword } from '../models/cambioPassword';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { TraerDatosService } from '../services/traer-datos.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cambio-password',
  templateUrl: './cambio-password.component.html',
  styleUrls: ['./cambio-password.component.css']
})
export class CambioPasswordComponent implements OnInit {

    API_URL = environment.uri_api;


       cambio: CambioPassword={
          
          usuario: localStorage.getItem('usuario'),
          password: '',
          confirmar:''
    
        };


  constructor(private traer:TraerDatosService) { }

  ngOnInit(): void {
  }

  cambiarPassword(form:NgForm,usuario:string,password:string,confirmar:string){


    this.cambio.password=password;
    this.cambio.confirmar=confirmar;

    if(this.cambio.password == this.cambio.confirmar){

           this.traer.http.put(this.API_URL+`/actualizar/${this.cambio.usuario}/${this.cambio.confirmar}`,this.cambio).subscribe((res)=>{

            if(res=="Actualizado"){

              Swal.fire({

                icon:'success',
                title:'Contraseña actualizada',
                text:'La próxima vez inicia con tu nueva contraseña'

              })

            }else{

              Swal.fire({

                icon:'error',
                text:'La cont'

              })

            }
             
          
                  },(err : HttpErrorResponse)=>{
                    console.log(err);
                  
                    });

    }else{
      Swal.fire({

        icon:'warning',
        text:'Las contraseñas no coinciden'

      })
    }

  }

}
