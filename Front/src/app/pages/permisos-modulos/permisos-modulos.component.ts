import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-permisos-modulos',
  templateUrl: './permisos-modulos.component.html',
  styleUrls: ['./permisos-modulos.component.css']
})
export class PermisosModulosComponent implements OnInit {
  datoss=JSON.parse(localStorage.getItem('datos')!);
  mailusu= this.datoss.correop;


  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: any={};
  dtTrigger= new Subject;

  API_URI = environment.uri_api;
  users:any=[];
  us:any=[];

  checkControlEscolar=true;
  checkProgramExtra=true;
  checkCatalogos=true;
  checkUsuarios=true;
  checkOvh=true;
  checkPreinscripcion=true;
  checkPermisos=true;
  checkAjedrez=true;
  checkDescargas=true;
  checkReapertura=true;

  cargo:string;
  idcargo:number;

  datosStorage:any;
  cargoperfil:string;

  constructor(private traer:TraerDatosService) { }

  ngOnInit(): void {
    this.traerUsuarios();
    console.log(this.mailusu)
  }

  traerUsuarios(){

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      searching:true,
      processing:true,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
      }
    };
  
      this.traer.http.get(this.API_URI+`/getCargos`).subscribe( 
      res=>{
       this.users=res;
      //  console.log(res)
       this.dtTrigger.next();
      })

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  openPermisos(idcargo:number){

    // this.datosStorage=JSON.parse(localStorage.getItem('datos')!);
    // this.cargoperfil=this.datosStorage.cargodb;
  
    this.traer.http.get(this.API_URI+`/getPermisos/${idcargo}`)
    .subscribe((res:any)=>{
  
      console.log(res);
  
    this.us=res;
    this.VerModulos();
  
    })

  }

  VerModulos(){
  
    if(this.us[0].control_escolar==false){
      this.checkControlEscolar=false;
    }else{this.checkControlEscolar=true;}
    if(this.us[0].programas_extra==false){
      this.checkProgramExtra=false;
    }else{this.checkProgramExtra=true;}
    if(this.us[0].catalogos==false){
      this.checkCatalogos=false;
    }else{this.checkCatalogos=true;}
    if(this.us[0].usuarios==false){
      this.checkUsuarios=false;
    }else{this.checkUsuarios=true;}
    if(this.us[0].ovh==false){
      this.checkOvh=false;
    }else{this.checkOvh=true;}
    if(this.us[0].preinscripcion==false){
      this.checkPreinscripcion=false;
    }else{this.checkPreinscripcion=true;}
    if(this.us[0].permisos_modulos==false){
      this.checkPermisos=false;
    }else{this.checkPermisos=true;}
    if(this.us[0].ajedrez==false){
      this.checkAjedrez=false;
    }else{this.checkAjedrez=true;}
    if(this.us[0].descargas==false){
      this.checkDescargas=false;
    }else{this.checkDescargas=true;}
    if(this.us[0].reapertura==false){
      this.checkReapertura=false;
    }else{this.checkReapertura=true;}

  }

  testCheckControlEscolar(event:any){
    console.log(event.target.checked); 
    this.us[0].control_escolar=event.target.checked;
      console.log(this.us);
  }
  testCheckProgramExtra(event:any){
    console.log(event.target.checked);
    this.us[0].programas_extra=event.target.checked;
      console.log(this.us);
  }
  testCheckCatalogos(event:any){
    console.log(event.target.checked);
    this.us[0].catalogos=event.target.checked;
      console.log(this.us);
  }
  testCheckUsuarios(event:any){
    console.log(event.target.checked);
    this.us[0].usuarios=event.target.checked;
      console.log(this.us);
  }
  testCheckOvh(event:any){
    console.log(event.target.checked);
    this.us[0].ovh=event.target.checked;
      console.log(this.us);
  }
  testCheckPreinscripcion(event:any){
    console.log(event.target.checked);
    this.us[0].preinscripcion=event.target.checked;
      console.log(this.us);
  }
  testCheckPermisos(event:any){
    console.log(event.target.checked);
    this.us[0].permisos_modulos=event.target.checked;
      console.log(this.us);
  }
  testCheckAjedrez(event:any){
    console.log(event.target.checked);
    this.us[0].ajedrez=event.target.checked;
      console.log(this.us);
  }
  testCheckDescargas(event:any){
    console.log(event.target.checked);
    this.us[0].descargas=event.target.checked;
      console.log(this.us);
  }
  testCheckReapertura(event:any){
    console.log(event.target.checked);
    this.us[0].reapertura=event.target.checked;
      console.log(this.us);
  }

  savePermisos(){
    this.traer.http.post(this.API_URI+`/savePermisos/${this.us[0].idcargo}/${this.mailusu}`,this.us[0],{})
    .subscribe((res:any)=>{

      if(res=="Actualizados"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Permisos Actualizados',
          showConfirmButton: false,
          timer: 1500
        }
        )
        location.reload()

      }else{
        console.log("Error al actualizar");
      }
    
        console.log(res);
    
      })
  }

  datos(cargo:string,idcargo:number){

    this.cargo=cargo;
    this.idcargo=idcargo;
    console.log(this.idcargo);

    this.openPermisos(this.idcargo);

  }

}
