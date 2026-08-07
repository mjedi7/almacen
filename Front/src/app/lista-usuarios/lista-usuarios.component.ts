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
     this.traer.http.get( this.API_URL+`/getUsuarios/${localStorage.getItem('centro_trabajo')}`)
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



}
