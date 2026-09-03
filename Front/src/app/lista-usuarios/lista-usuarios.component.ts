import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TraerDatosService } from '../services/traer-datos.service';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NuevoUSer } from '../models/Agregar_Usuario';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  nuevo_usuario: NuevoUSer={

    nombre: '',
    usuario: '',
    password: '',
    numempleado: '',
    area: localStorage.getItem('nombreArea'),
    clave_area:localStorage.getItem('area'),
    esactivo:true


  }


   dtOptions: any={};
   dtTrigger= new Subject;

      API_URL = environment.uri_api;

    usuarios:any=[]

    usuarioSeleccionado: any = null;
    nuevaPassword: string = '';
    confirmarPassword: string = '';

  constructor(private traer:TraerDatosService,private moda:NgbModal) { }

  ngOnInit(): void {

    this.traerListaUsuarios();
  }


  traerListaUsuarios(){  
    

    $('#empleados').DataTable().clear();
   $('#empleados').DataTable().draw();
    $('#empleados').DataTable().destroy();
 

   this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 10,
     searching:true,
     processing:true,
     destroy:true,
     
        language: {
            lengthMenu: 'Mostrando _MENU_ Registros',
            info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
            infoEmpty: 'Mostrando 0 to 0 of 0 entradas',
            infoFiltered: '(Resultados del filtrado)',
            search: 'Buscar:',
            paginate: {
                first: 'Inicio',
                last: 'Último',
                next: 'Siguiente',
                previous: 'Anterior'
            },

        }

   };
   
try{
     this.traer.http.get(this.API_URL + `/gettodosusuarios`)
     .subscribe((res:any)=>{
   
       this.usuarios=res;
       this.dtTrigger.next();

       console.log(this.usuarios);
       
     });    

}catch(error){
 console.log(error)
}

 }

 AgregarUsuario(){

   this.traer.http.post(this.API_URL+`/AgregarUsuario`,this.nuevo_usuario).subscribe((res)=>{
  
    
        if(res=="Registrado"){
  
        Swal.fire({
          icon: 'success',
          title: '¡Usuario Registrado!',
          confirmButtonColor: '#FFC900',
        }) 
  
        }else{
          console.log("Error al registrar el usuario...");
        }  
  
          },(err : HttpErrorResponse)=>{
            console.log(err);
          
            });

            
 }

cambiarPassword() {

  if (!this.nuevaPassword || !this.confirmarPassword) {

    Swal.fire({
      icon: 'warning',
      text: 'Debe ingresar y confirmar la nueva contraseña'
    });

    return;
  }

  if (this.nuevaPassword !== this.confirmarPassword) {

    Swal.fire({
      icon: 'warning',
      text: 'Las contraseñas no coinciden'
    });

    return;
  }

  this.traer.http.put(
    this.API_URL + `/actualizar/${this.usuarioSeleccionado.usuario}/${this.nuevaPassword}`,
    {}
  ).subscribe((res) => {

    if (res === 'Actualizado') {

      Swal.fire({
        icon: 'success',
        title: 'Contraseña actualizada',
        text: 'La contraseña del usuario fue actualizada correctamente'
      });

      this.nuevaPassword = '';
      this.confirmarPassword = '';
      this.usuarioSeleccionado = null;

    } else {

      Swal.fire({
        icon: 'error',
        text: 'No se pudo actualizar la contraseña'
      });

    }

  }, (err: HttpErrorResponse) => {

    console.log(err);

    Swal.fire({
      icon: 'error',
      text: 'Ocurrió un error al actualizar la contraseña'
    });

  });

}

seleccionarUsuario(usuario: any, modal: any) {

  this.usuarioSeleccionado = usuario;
  this.nuevaPassword = '';
  this.confirmarPassword = '';

  this.moda.open(modal);
}

}

