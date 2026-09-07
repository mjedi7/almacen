import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import { Comentarios } from 'src/app/models/nuevoDocumento';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';

declare var $:any;

@Component({
  selector: 'app-requisiciones-pendientes',
  templateUrl: './requisiciones-pendientes.component.html',
  styleUrls: ['./requisiciones-pendientes.component.css']
})
export class RequisicionesPendientesComponent implements OnInit {

    dtOptions: any={};
    dtTrigger= new Subject;
  
    API_URL = environment.uri_api;

    comentario:Comentarios={

      comentario:'',
      fechaComentarioPlantel:'',
      cts:null

    }

  constructor(private traer:TraerDatosService) { }

   req_pendientes:any=[];
   myFiles!:Array<any>
    myFilesDG!:Array<any>
   numidentificador:any;

   id:number;
   folio_solicitud:number;

   mostrarsubirfile:boolean=false;
   mostrarabrir:boolean=false;

   permiso:boolean=false;
   permiso2:boolean=false;

   fechaComentarioPlantel:string;

   Folio_comentatrio:number;
   cts:number;

   BotonComentarioPlantel:boolean=false;
   BotonComentarioDg:boolean=false;

   mostrarBotonsegunFecha:boolean=false;

  ngOnInit(): void {

    var centroTrabajo=localStorage.getItem('centro_trabajo');

    if(centroTrabajo=='47'){
      this.BotonComentarioDg=true;
      this.BotonComentarioPlantel=false;

    }else{

      this.BotonComentarioPlantel=true;
      this.BotonComentarioDg=false;

    }

    this.traerRequisicionesPendientes();


  }


     traerRequisicionesPendientes(){
        
    $('#requisiciones').DataTable().clear();
    $('#requisiciones').DataTable().draw();
     $('#requisiciones').DataTable().destroy();
  
    try{

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

       var id_plantel=localStorage.getItem('centro_trabajo');

          this.traer.http.get(this.API_URL+`/traerRequisicionesPendientes/${id_plantel}`)
          .subscribe((res)=>{
        
            this.req_pendientes=res; 
            console.log(this.req_pendientes);
                   this.dtTrigger.next();

            var permisoShowBoton=localStorage.getItem('centro_trabajo');

            if(permisoShowBoton=='47'){
                    this.permiso=true;
                    this.permiso2=false;
            }else{
                     this.permiso=false;
                     this.permiso2=true;
            }

          for(var i=0;i<=this.req_pendientes.length;i++){

            if(this.req_pendientes[i]?.en_tiempo == true){
              this.mostrarBotonsegunFecha=true;
            }else{

            }

            // this.mostrarBotonsegunFecha=this.req_pendientes[i].en_tiempo;
            // console.log(this.mostrarBotonsegunFecha);


          if(this.req_pendientes[i]?.status == null){
            this.req_pendientes[i].status="Pendiente";
          }else{

          }

          if(this.req_pendientes[i]?.ruta != null){

            this.req_pendientes[i].con_url=false;
            this.req_pendientes[i].sin_url=true;

          }else if(this.req_pendientes[i]?.ruta == null){
            this.req_pendientes[i].con_url=true;
            this.req_pendientes[i].sin_url=false;
          }

          if(this.req_pendientes[i]?.ruta_dg != null){
            this.req_pendientes[i].con_url_dg=false;
            this.req_pendientes[i].sin_url_dg=true;

          }else if(this.req_pendientes[i]?.ruta_dg == null){
            this.req_pendientes[i].con_url_dg=true;
            this.req_pendientes[i].sin_url_dg=false;
          }

        }    

            this.dtTrigger.next();
            
          });    
    
    }catch(error){
      console.log(error)
    
    }

      }

          upload(event:any) {

          const file: File = event.target.files[0];
      
          if(event.target.files.length > 0){

            if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {

            this.myFiles=event.target.files; 
            console.log(this.myFiles);
      
        }else{

          Swal.fire({
                    icon:'warning',
                    title:'Error en documento',
                    text:'Solo se permiten archivos .pdf'
                });

        } 

          }else{
            console.log("NO");     
          }
          }


      subirPDF(id:number,folio_solicitud:number){
     
        this.id=id;
        this.folio_solicitud=folio_solicitud;

        if(this.myFiles==undefined){
          Swal.fire({
            title:'No ha seleccionado un documento',
            icon:'warning'
          })
        }

           this.numidentificador=Date.now();
           const formdata = new FormData();
        
          for (var i = 0; i < this.myFiles.length; i++) { 
            formdata.append('files', this.myFiles[i]);
          }
      
          var areaAlmacenaDoc=parseInt(localStorage.getItem('centro_trabajo'));
          
        if(areaAlmacenaDoc==1){
            var areaDocumento="tres_valles";
        }else if(areaAlmacenaDoc==2){
            var areaDocumento="papantla";
        }else if(areaAlmacenaDoc==3){
            var areaDocumento="benito_juarez";
        }else if(areaAlmacenaDoc==4){
            var areaDocumento="naolinco";
        }else if(areaAlmacenaDoc==5){
            var areaDocumento="vega_de_alatorre";
        }else if(areaAlmacenaDoc==6){
            var areaDocumento="huitzila";
        }else if(areaAlmacenaDoc==7){
            var areaDocumento="coxquihui";
        }else if(areaAlmacenaDoc==8){
            var areaDocumento="uxpanapa";
        }else if(areaAlmacenaDoc==9){
            var areaDocumento="huayacocotla";
        }else if(areaAlmacenaDoc==10){
            var areaDocumento="agua_dulce";          
        }else if(areaAlmacenaDoc==11){
            var areaDocumento="pajapan";
        }else if(areaAlmacenaDoc==12){
            var areaDocumento="filomeno_mata";
        }else if(areaAlmacenaDoc==13){
            var areaDocumento="planton_sanchez";
        }else if(areaAlmacenaDoc==14){
            var areaDocumento="atzalan";
        }else if(areaAlmacenaDoc==15){
            var areaDocumento="san_rafael";
        }else if(areaAlmacenaDoc==16){
            var areaDocumento="omealca";
        }else if(areaAlmacenaDoc==17){
            var areaDocumento="huatusco";
        }else if(areaAlmacenaDoc==18){
            var areaDocumento="la_camelia";
        }else if(areaAlmacenaDoc==19){
            var areaDocumento="ciudad_olmeca";
        }else if(areaAlmacenaDoc==20){
            var areaDocumento="las_lomas";
        }else if(areaAlmacenaDoc==21){
            var areaDocumento="guayalejo";
        }else if(areaAlmacenaDoc==22){
            var areaDocumento="medellin";
        }else if(areaAlmacenaDoc==23){
            var areaDocumento="la_cuesta";
        }else if(areaAlmacenaDoc==24){
            var areaDocumento="huazuntlan";
        }else if(areaAlmacenaDoc==25){
            var areaDocumento="otatitlan";
        }else if(areaAlmacenaDoc==26){
            var areaDocumento="catemaco";
        }else if(areaAlmacenaDoc==27){
            var areaDocumento="palma_sola";
        }else if(areaAlmacenaDoc==28){
            var areaDocumento="veracruz";
        }else if(areaAlmacenaDoc==29){
            var areaDocumento="general_alatriste";
        }else if(areaAlmacenaDoc==30){
            var areaDocumento="palo_blanco";
        } else if(areaAlmacenaDoc==31){
            var areaDocumento="coetzala";
        }else if(areaAlmacenaDoc==32){
            var areaDocumento="direccion_general";
        }


         else if(areaAlmacenaDoc==33){
            var areaDocumento="administrativo";
        }else if(areaAlmacenaDoc==34){
            var areaDocumento="academico";
        }else if(areaAlmacenaDoc==35){
            var areaDocumento="planeacion";
        } else if(areaAlmacenaDoc==36){
            var areaDocumento="vinculacion";
        }else if(areaAlmacenaDoc==37){
            var areaDocumento="tecnologia";
        } 
        
             
        else if(areaAlmacenaDoc==39){
            var areaDocumento="recursos_humanos";
        }else if(areaAlmacenaDoc==40){
            var areaDocumento="recursos_financieros";
        }else if(areaAlmacenaDoc==41){
            var areaDocumento="recursos_materiales";
        } else if(areaAlmacenaDoc==42){
            var areaDocumento="contabilidad";
        }

        else if(areaAlmacenaDoc==43){
            var areaDocumento="juridico";
        }
        else if(areaAlmacenaDoc==44){
            var areaDocumento="genero";
        }
        else if(areaAlmacenaDoc==45){
            var areaDocumento="transparencia";
        }
        else if(areaAlmacenaDoc==46){
            var areaDocumento="sindicato";
        }
    
        console.log(formdata);
        
        this.traer.http.post(this.API_URL+`/SubirArchivoRequisicion/${this.numidentificador}/${areaDocumento}`,formdata).subscribe((res) => {
            
              console.log(res);

              this.actualizarCampoRuta();
        
           },(err : HttpErrorResponse)=>{
             console.log(err);
          });
      
      
        }   

        actualizarCampoRuta(){

          var idPlantel=localStorage.getItem('centro_trabajo');

            this.traer.http.put( this.API_URL+`/actualizaRuta/${this.numidentificador}/${this.folio_solicitud}/${idPlantel}`,null)
                  .subscribe((res:any)=>{

                    if(res=="rutaActualizada"){
                              this.traerRequisicionesPendientes();
                    }else{

                    }             

                  });

        }


    abrirPDF(ruta:number){

            var a=ruta.toString();
    var url=(a.replaceAll('/', '-'));

    const httpOptions = {
  
      headers: new HttpHeaders({
        'Content-Type':  'application/json',        
      } ),responseType: 'blob' as 'arraybuffer'
  
    };

 
   this.traer.http.get(this.API_URL+`/abrirPDFRequisicion/${url}`,httpOptions).subscribe((res:any)=>{ 

    console.log(res);
  
    var file=new Blob([res],{type:'application/pdf'});
    var fileURL=URL.createObjectURL(file); 
    console.log(fileURL);
    window.open(fileURL); 
    

})


        }


         uploadDG(event:any) {

          const file: File = event.target.files[0];
      
          if(event.target.files.length > 0){

            if(file.type==='application/pdf' || file.name.endsWith('.pdf')){
             
                        this.myFilesDG=event.target.files; 
                        console.log(this.myFilesDG);

            }else{
                
                           Swal.fire({
                    icon:'warning',
                    title:'Error en documento',
                    text:'Solo se permiten archivos .pdf'
                });
            }
          }else{
            console.log("NO");     
          }
          }


    subirPDFDG(id:number,folio_solicitud:number,id_cetrotrabajo_solicitante:number){
     
        this.id=id;
        this.folio_solicitud=folio_solicitud;

        if(this.myFilesDG==undefined){
          Swal.fire({
            title:'No ha seleccionado un documento',
            icon:'warning'
          })
        }

           this.numidentificador=Date.now();
           const formdata = new FormData();
        
          for (var i = 0; i < this.myFilesDG.length; i++) { 
            formdata.append('files', this.myFilesDG[i]);
          }
      
          var areaAlmacenaDoc=parseInt(localStorage.getItem('centro_trabajo'));
          
        if(areaAlmacenaDoc==1){
            var areaDocumento="tres_valles";
        }else if(areaAlmacenaDoc==2){
            var areaDocumento="papantla";
        }else if(areaAlmacenaDoc==3){
            var areaDocumento="benito_juarez";
        }else if(areaAlmacenaDoc==4){
            var areaDocumento="naolinco";
        }else if(areaAlmacenaDoc==5){
            var areaDocumento="vega_de_alatorre";
        }else if(areaAlmacenaDoc==6){
            var areaDocumento="huitzila";
        }else if(areaAlmacenaDoc==7){
            var areaDocumento="coxquihui";
        }else if(areaAlmacenaDoc==8){
            var areaDocumento="uxpanapa";
        }else if(areaAlmacenaDoc==9){
            var areaDocumento="huayacocotla";
        }else if(areaAlmacenaDoc==10){
            var areaDocumento="agua_dulce";
        }else if(areaAlmacenaDoc==11){
            var areaDocumento="pajapan";
        }else if(areaAlmacenaDoc==12){
            var areaDocumento="filomeno_mata";
        }else if(areaAlmacenaDoc==13){
            var areaDocumento="planton_sanchez";
        }else if(areaAlmacenaDoc==14){
            var areaDocumento="atzalan";
        }else if(areaAlmacenaDoc==15){
            var areaDocumento="san_rafael";
        }else if(areaAlmacenaDoc==16){
            var areaDocumento="omealca";
        }else if(areaAlmacenaDoc==17){
            var areaDocumento="huatusco";
        }else if(areaAlmacenaDoc==18){
            var areaDocumento="la_camelia";
        }else if(areaAlmacenaDoc==19){
            var areaDocumento="ciudad_olmeca";
        }else if(areaAlmacenaDoc==20){
            var areaDocumento="las_lomas";
        }else if(areaAlmacenaDoc==21){
            var areaDocumento="guayalejo";
        }else if(areaAlmacenaDoc==22){
            var areaDocumento="medellin";
        }else if(areaAlmacenaDoc==23){
            var areaDocumento="la_cuesta";
        }else if(areaAlmacenaDoc==24){
            var areaDocumento="huazuntlan";
        }else if(areaAlmacenaDoc==25){
            var areaDocumento="otatitlan";
        }else if(areaAlmacenaDoc==26){
            var areaDocumento="catemaco";
        }else if(areaAlmacenaDoc==27){
            var areaDocumento="palma_sola";
        }else if(areaAlmacenaDoc==28){
            var areaDocumento="veracruz";
        }else if(areaAlmacenaDoc==29){
            var areaDocumento="general_alatriste";
        }else if(areaAlmacenaDoc==30){
            var areaDocumento="palo_blanco";
        } else if(areaAlmacenaDoc==31){
            var areaDocumento="coetzala";
        }

            else if(areaAlmacenaDoc==33){
            var areaDocumento="administrativo";
        }else if(areaAlmacenaDoc==34){
            var areaDocumento="academico";
        }else if(areaAlmacenaDoc==35){
            var areaDocumento="planeacion";
        } else if(areaAlmacenaDoc==36){
            var areaDocumento="vinculacion";
        }else if(areaAlmacenaDoc==37){
            var areaDocumento="tecnologia";
        } 
        
             
        else if(areaAlmacenaDoc==39){
            var areaDocumento="recursos_humanos";
        }else if(areaAlmacenaDoc==40){
            var areaDocumento="recursos_financieros";
        }else if(areaAlmacenaDoc==41){
            var areaDocumento="recursos_materiales";
        } else if(areaAlmacenaDoc==42){
            var areaDocumento="contabilidad";
        }

          else if(areaAlmacenaDoc==43){
            var areaDocumento="juridico";
        }
        else if(areaAlmacenaDoc==44){
            var areaDocumento="genero";
        }
        else if(areaAlmacenaDoc==45){
            var areaDocumento="transparencia";
        }
        else if(areaAlmacenaDoc==46){
            var areaDocumento="sindicato";
        }


        else if(areaAlmacenaDoc==47){
            var areaDocumento="almacen_general";
        }
            
        console.log(formdata);
        
        this.traer.http.post(this.API_URL+`/SubirArchivoRequisicionDG/${this.numidentificador}/${areaDocumento}`,formdata).subscribe((res) => {
            
              console.log(res);

              this.actualizarCampoRutaDG(id_cetrotrabajo_solicitante);
        
           },(err : HttpErrorResponse)=>{
             console.log(err);
          });
      
      
        }   


      abrirPDFDG(ruta:number){

            var a=ruta.toString();
    var url=(a.replaceAll('/', '-'));

    const httpOptions = {
  
      headers: new HttpHeaders({
        'Content-Type':  'application/json',        
      } ),responseType: 'blob' as 'arraybuffer'
  
    };

 
   this.traer.http.get(this.API_URL+`/abrirPDFRequisicionDG/${url}`,httpOptions).subscribe((res:any)=>{ 

    console.log(res);
  
    var file=new Blob([res],{type:'application/pdf'});
    var fileURL=URL.createObjectURL(file); 
    console.log(fileURL);
    window.open(fileURL); 
    

})

        }


        
         actualizarCampoRutaDG(plantelActualizar:number){

          var idPlantel=localStorage.getItem('centro_trabajo');

            var fechaResgistro = formatDate(new Date(), 'dd-MM-yyyy', 'en-US'); // inserta la fecha para habilitar el boton de comentario del plantel cuando es estatus es Proceso TErminado

            this.traer.http.put( this.API_URL+`/actualizaRutaDG/${this.numidentificador}/${this.folio_solicitud}/${idPlantel}/${plantelActualizar}/${fechaResgistro}`,null)
                  .subscribe((res:any)=>{

                    if(res=="rutaActualizada"){
                              this.traerRequisicionesPendientes();
                    }else{

                    }             

                  });

        }

        AgregarComentario(form:NgForm){

          var centro_trabajo=localStorage.getItem('centro_trabajo');

          if(form.valid==true && centro_trabajo=='47'){

              this.traer.http.post(this.API_URL+`/subirComentario/${this.Folio_comentatrio}/${this.cts}`,this.comentario).subscribe((res) => {
            
              console.log(res);

              // Swal.fire({
              //     title:'Se envío su comentario al plantel',
              //     icon:'success'
              // });

              window.location.reload();
        
           },(err : HttpErrorResponse)=>{
             console.log(err);
          });

          }else if(form.valid==true && centro_trabajo != '47'){

             this.fechaComentarioPlantel = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
             this.comentario.fechaComentarioPlantel=this.fechaComentarioPlantel;

               this.traer.http.post(this.API_URL+`/subirComentario/${this.Folio_comentatrio}/${this.cts}`,this.comentario).subscribe((res) => {
            
              console.log(res);

              //  Swal.fire({
              //     title:'Se envío su comentario a DG',
              //     icon:'success'
              // });

                window.location.reload();
        
           },(err : HttpErrorResponse)=>{
             console.log(err);
          });

          }

        }

        obtenerIdParaComentario(folio_solicitud:number,centro_trabajo_solicitante:number){

          this.Folio_comentatrio=folio_solicitud
          this.cts=centro_trabajo_solicitante;

        }
}
