import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TraerDatosService } from '../services/traer-datos.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DocumentoRespuesta, DocumentoRespuestaSinPDF } from '../models/documentoRespuesta';
import Swal from 'sweetalert2';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


declare var $:any;

@Component({
  selector: 'app-por-contestar',
  templateUrl: './por-contestar.component.html',
  styleUrls: ['./por-contestar.component.css']
})
export class PorContestarComponent implements OnInit {

    dtOptions: any={};
    dtTrigger= new Subject;
  
    API_URL = environment.uri_api;
  
    porContestar:any=[];
    guiones:boolean=false;
    otro:boolean=false;


    myFiles!:Array<any>
    numidentificador:any;

    fechaRespuesta:string;

    mostrarBoton:boolean=false;
    botonReenviar:boolean=false;

    areas:any=[];
  areasLocales:any=[];
  tipo:string;
  opcionSeleccionada:string='';
  verSeleccion:string;

  areaTurnada:string;
  idDocumento:number

  folioUnico:number;

     documento: DocumentoRespuesta={
        
        tipo: '',
        tipoAtencion: 'Respuesta',
        personaQueEmite: localStorage.getItem('nombre'),
        tipoDocumento: '',
        referenciaDocumento:'',
        fechaRespuesta:null,
        resumen:'',
        nombreAreaEmite:localStorage.getItem('nombreArea'),
        nombreAreaTurnada:'',
        atendidoPor:'',
        id_departamentox:parseInt(localStorage.getItem('id_departamento'))
    
      };

      documentosinPDF: DocumentoRespuestaSinPDF={
        
        tipoAtencion: 'Respuesta',
        personaQueEmite: localStorage.getItem('nombre'),
        tipoDocumento: '',
        fechaRespuesta:null,
        resumen:'',
        nombreAreaEmite:localStorage.getItem('nombreArea'),
        nombreAreaTurnada:'',
        url_respuesta:'Sin PDF',
        atendidoPor:'',
        id_departamentox:parseInt(localStorage.getItem('id_departamento'))
    
      };


      areas2:any=[];
  areasLocales2:any=[];
  deptosPorDireccion:any=[];
  deptosPorDireccion2:any=[];
  dg: boolean = false;

  day:string;
month:string;
year:string;

result:any=[];
multipleEnvio:any=[];

fecha_registrox:any='';

NumeroPermiso:number;

auxiliarPorAtender:boolean=false;
auxiliarDeConocimiento:boolean=false;
sinAtender:boolean=false;
    
  constructor(private traer:TraerDatosService,private modal:NgbModal) { }

  ngOnInit(): void {


   var fecha=new Date();

   var dia=fecha.getDate();
   var mes=fecha.getMonth()+1;
   var anio=fecha.getFullYear();

   if (dia < 10){
       this.day="0"+dia;
   }else{
    this.day=dia.toString();
   }
   if(mes<10){
    this.month="0"+mes;
   }else{
    this.month=mes.toString();
   }

   this.fecha_registrox=this.day+"-"+this.month+"-"+anio;
   console.log(this.fecha_registrox);



    if(Number(localStorage.getItem('area')) == 99 && (Number(localStorage.getItem('permiso')) == 1 || Number(localStorage.getItem('permiso')) == 4)){
      this.dg = true;
    }
     this.traerDatosPorContestar();
    this.traerAreasLocales();

    // this.traerdeptosPorDireccion();
    this.traerdeptosPorDireccion2();

    this.NumeroPermiso=parseInt(localStorage.getItem('permiso'));


  }

  traerDatosPorContestar(){  

    var clave_area=localStorage.getItem('area');
    var clave_departamento=localStorage.getItem('id_departamento');
    var permiso=localStorage.getItem('permiso');
    

     $('#empleados').DataTable().clear();
    $('#empleados').DataTable().draw();
     $('#empleados').DataTable().destroy();
  

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      searching:true,
      processing:true,
      destroy:true,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
      },

    };
    
try{


      this.traer.http.get( this.API_URL+`/getDocPorContestar/${clave_area}/${clave_departamento}/${permiso}`)
      .subscribe((res)=>{
    
        this.porContestar=res;
        console.log(res);

        this.dtTrigger.next();


        for(var i=0;i<this.porContestar.length;i++){

          if(this.porContestar[i].url_respuesta == null && this.porContestar[i].tipo_atencion=="Para su atención" && this.porContestar[i].estatus!="Sin atender" ){

            this.porContestar[i].guia_atendido=false;
            this.porContestar[i].guia_conocimiento=false;
            this.porContestar[i].guia_no_atendido=false;
            this.auxiliarDeConocimiento=false;
            this.auxiliarPorAtender=false;  
            this.porContestar[i].guia_proceso=true;


          }else if(this.porContestar[i].url_respuesta == null && this.porContestar[i].tipo_atencion=="Para su conocimiento" && this.porContestar[i].estatus!="Sin atender"){

            this.porContestar[i].guia_atendido=false;
            this.porContestar[i].guia_proceso=false;
             this.auxiliarDeConocimiento=false;
            this.auxiliarPorAtender=false;  
              this.porContestar[i].guia_no_atendido=false;
            this.porContestar[i].guia_conocimiento=true;
       

          }else if(this.porContestar[i].url_respuesta != null && this.porContestar[i].estatus=="Atendido"){

            this.porContestar[i].guia_proceso=false;
            this.porContestar[i].guia_conocimiento=false;
            this.porContestar[i].guia_no_atendido=false;
            this.auxiliarDeConocimiento=false;
            this.auxiliarPorAtender=false;  
            this.porContestar[i].guia_atendido=true;
       
          }
          
          else if(this.porContestar[i].estatus=="Sin atender" && this.porContestar[i].tipo_atencion=="Para su atención"){

            this.porContestar[i].guia_atendido=false;
            this.porContestar[i].guia_proceso=false;
            this.porContestar[i].guia_conocimiento=false;
            this.porContestar[i].auxiliarConocimiento=false;    
            this.porContestar[i].guia_no_atendido=true;
            this.porContestar[i].auxiliarAtencion=true;  
 

          }
          
          else if(this.porContestar[i].estatus=="Sin atender" && this.porContestar[i].tipo_atencion=="Para su conocimiento"){


            this.porContestar[i].guia_atendido=false;
            this.porContestar[i].guia_proceso=false;
            this.porContestar[i].guia_conocimiento=false;
             this.porContestar[i].auxiliarConocimiento=true;  
            this.porContestar[i].guia_no_atendido=true;     
            this.porContestar[i].auxiliarConocimiento=true;     
             
          } 

        }

        
      });    

}catch(error){
  console.log(error)
}

  }


  Capturar(){
    this.tipo=this.opcionSeleccionada;

    this.traer.http.get( this.API_URL+`/traerAreas/${this.tipo}`)
    .subscribe((res:any)=>{

      this.areas=res;
      console.log(this.areas);
      
    });
    
  }


   VerDocPeticion(id:number,url:string){
  
      var a=url.toString();
      var ruta=(a.replaceAll('/', '-'));
  
      const httpOptions = {
    
        headers: new HttpHeaders({
          'Content-Type':  'application/json',        
        } ),responseType: 'blob' as 'arraybuffer'
    
    
      };
  
   
     this.traer.http.get(this.API_URL+`/traerNombreArchivo/${ruta}`,httpOptions).subscribe((res:any)=>{ 
  
      console.log(res);
    
      var file=new Blob([res],{type:'application/pdf'});
      var fileURL=URL.createObjectURL(file); 
      console.log(fileURL);
      window.open(fileURL); 
      
  
  })
  
  
    }

    VerDocumentoRespuesta(url:string){

      var a=url.toString();
      var ruta=(a.replaceAll('/', '-'));
  
      const httpOptions = {
    
        headers: new HttpHeaders({
          'Content-Type':  'application/json',        
        } ),responseType: 'blob' as 'arraybuffer'
    
    
      };
  
   
     this.traer.http.get(this.API_URL+`/traerNombreArchivoRespuesta/${ruta}`,httpOptions).subscribe((res:any)=>{ 

      console.log(res.type)

      if(res.type=="application/json"){

               Swal.fire({

                icon:'info',
                title:'Respuesta sin PDF',
                html:'<p>este documento fue turnado como <strong>De Conocimiento</strong> por lo que no fue necesario un documento de respuesta</p>'
               });
      }else{


      var file=new Blob([res],{type:'application/pdf'});
      var fileURL=URL.createObjectURL(file);
      console.log(fileURL);
      window.open(fileURL);      


      }
    
    
  
  });

    }



    ObtenerIdyAreaEmite(id:number, areaEmite:number,folio_unico:number){

 console.log("ID: "+id);
this.folioUnico=folio_unico;

console.log("F_U:"+this.folioUnico);

 this.idDocumento=id;

 this.traer.http.get(this.API_URL+`/traerNombreAreaEmite/${areaEmite}`).subscribe((res:any)=>{ 

 this.areaTurnada=res[0].nombre_completo;

 this.documento.nombreAreaTurnada=this.areaTurnada;
 this.documentosinPDF.nombreAreaTurnada=this.areaTurnada;

})

    }


  GenerarDocumentoRespuesta(form:NgForm){

        if(form.invalid){
      
            console.log('Formulario Invalido');
            Swal.fire(
              'Operación no realizada',
              '¡Complete todos los campos!',
              'error'
            );

            Object.values(form.controls).forEach(control=>{
              control.markAllAsTouched();
            })

            return;
      
          }else{

        this.numidentificador=Date.now();
        var Idarea=localStorage.getItem('area')    

        console.log(Idarea);
        this.traer.http.post(this.API_URL+`/generarDocumentoRespuesta/${this.numidentificador}/${Idarea}/${this.idDocumento}/${this.folioUnico}/${this.fecha_registrox}`,this.documento).subscribe((res)=>{
    
        let datos1=JSON.stringify(res); 
        let datos2=JSON.parse(datos1);

            if(res=="Repetido"){
        
              Swal.fire({
                icon: 'warning',
                title: '¡Documento duplicado!',
                text: 'Esta petición ya fue contestada'
              }); 
        
            }else{
      
          if(datos2.mensaje=="Registrado"){

            if(datos2.incremento<10){
              var incremento="0000"+datos2.incremento;
            }else if(datos2.incremento<100){
              var incremento="000"+datos2.incremento;
            }else if(datos2.incremento<1000){
              var incremento="00"+datos2.incremento;
            }else if(datos2.incremento<10000){
              var incremento="0"+datos2.incremento;
            }

            var fecha=new Date();
            var anio=fecha.getFullYear();   

          Swal.fire({
            icon: 'success',
            title: '¡Respuesta Realizada!',
            confirmButtonColor: '#59d65a',
            html: 'Número de Folio único: <h2>'+anio+'/'+incremento+'</h2>'
          }) ;

          setTimeout(function(){
            location.reload();

          },2000); 
    
          }  
    
          this.subirPDF();

        }

          if(this.subirPDF){

          // $('#exampleModal').modal('hide');
          // (document.getElementById('exampleModal') as HTMLInputElement).hidden=true;            
          this.traerDatosPorContestar();

          }       
    
            },(err : HttpErrorResponse)=>{
              console.log(err);
            
              });

            }
    
      }

// *************

GenerarDocumentoRespuestaSinPDF(form:NgForm){

  console.log(form.invalid);
  console.log(form);


  if(form.invalid){

      console.log('Formulario Invalido');
      Swal.fire(
        'Operación no realizadaxx',
        '¡Complete todos los campos!',
        'error'
      );

      Object.values(form.controls).forEach(control=>{
        control.markAllAsTouched();
      })

      return;

    }else{

  var Idarea=localStorage.getItem('area'); 

  console.log(Idarea);
  this.traer.http.post(this.API_URL+`/generarDocumentoRespuestaSinPDF/${Idarea}/${this.idDocumento}/${this.folioUnico}/${this.fecha_registrox}`,this.documentosinPDF).subscribe((res)=>{

  let datos1=JSON.stringify(res); 
  let datos2=JSON.parse(datos1);


    if(datos2.mensaje=="Registrado"){

      if(datos2.incremento<10){
        var incremento="0000"+datos2.incremento;
      }else if(datos2.incremento<100){
        var incremento="000"+datos2.incremento;
      }else if(datos2.incremento<1000){
        var incremento="00"+datos2.incremento;
      }else if(datos2.incremento<10000){
        var incremento="0"+datos2.incremento;
      }

      var fecha=new Date();
      var anio=fecha.getFullYear();   

    Swal.fire({
      icon: 'success',
      title: '¡Respuesta Realizada!',
      confirmButtonColor: '#59d65a',
      html: 'Número de Folio único: <h2>'+anio+'/'+incremento+'</h2>'
    }) ;

    setTimeout(function(){
      location.reload();

    },2000); 

    }else{
      console.log("Error al guardar la respuesta")
    }  
      
    this.traerDatosPorContestar();
         
      },(err : HttpErrorResponse)=>{
        console.log(err);
      
        });

      }

}


// ****


       subirPDF(){
      
           const formdata = new FormData();
        
          for (var i = 0; i < this.myFiles.length; i++) { 
            formdata.append('files', this.myFiles[i]);
          }
      
          var areaAlmacenaDoc=parseInt(localStorage.getItem('area'));
          
        if(areaAlmacenaDoc==99){
            var areaDocumento="Direccion";
        }else if(areaAlmacenaDoc==98){
            var areaDocumento="Academica";
        }else if(areaAlmacenaDoc==97){
            var areaDocumento="Administrativa";
        }else if(areaAlmacenaDoc==96){
            var areaDocumento="Vinculacion";
        }else if(areaAlmacenaDoc==95){
            var areaDocumento="Planeacion";
        }else if(areaAlmacenaDoc==94){
            var areaDocumento="Tecnologia";
        }else if(areaAlmacenaDoc==93){
            var areaDocumento="Juridico";
        }else if(areaAlmacenaDoc==92){
            var areaDocumento="Transparencia";
        }else if(areaAlmacenaDoc==91){
            var areaDocumento="UnidadGenero";
        }else if(areaAlmacenaDoc==90){
            var areaDocumento="Oficialia";
        }
            
        console.log(formdata);
        
        this.traer.http.post(this.API_URL+`/agregarArchivoRespuesta/${this.numidentificador}/${areaDocumento}`,formdata).subscribe((res) => {
            
              console.log(res);
        
           },(err : HttpErrorResponse)=>{
             console.log(err);
          });
      
      
        }
      
        upload(event:any) {
      
          if(event.target.files.length > 0){
        
            this.myFiles=event.target.files; 
            console.log(this.myFiles);

            this.mostrarBoton=true;
          
          }else{
            console.log("NO");
            this.mostrarBoton=false;
          }
          }



          // add

          traerDatosPorContestarCombo(){  
            console.log("valor del combo "+this.areas);
            var clave_area=this.areas2;
            var clave_departamento=localStorage.getItem('id_departamento');
            var permiso=localStorage.getItem('permiso');
            
            console.log("Valor de clave_area "+clave_area);
        
             $('#empleados').DataTable().clear();
            $('#empleados').DataTable().draw();
             $('#empleados').DataTable().destroy();
          
        
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10,
              searching:true,
              processing:true,
              destroy:true,
              language:{
                url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
              },
        
            };
            try{


              this.traer.http.get( this.API_URL+`/getDocPorContestar/${clave_area}/${clave_departamento}/${permiso}`)
              .subscribe((res)=>{
            
                this.porContestar=res;
                console.log(res);
        
                this.dtTrigger.next();
        
                for(var i=0;i<this.porContestar.length;i++){

                  if(this.porContestar[i].url_respuesta == null && this.porContestar[i].tipo_atencion=="Para su atención"){
        
                    this.porContestar[i].guia_atendido=false;
                    this.porContestar[i].guia_proceso=true;
                    this.porContestar[i].guia_conocimiento=false;
                    
                  }else if(this.porContestar[i].url_respuesta == null && this.porContestar[i].tipo_atencion=="Para su conocimiento"){
        
                    this.porContestar[i].guia_atendido=false;
                    this.porContestar[i].guia_proceso=false;
                    this.porContestar[i].guia_conocimiento=true;
        
        
                  }else if(this.porContestar[i].url_respuesta != null){
        
                    this.porContestar[i].guia_atendido=true;
                    this.porContestar[i].guia_proceso=false;
                    this.porContestar[i].guia_conocimiento=false;
                  }
        
                }
        
                
              });    
        
        }catch(error){
          console.log(error)
        }

      }

      traerAreasLocales(){
        console.log("ENtro")
          this.traer.http.get( this.API_URL+`/traerAreasLocales`)
          .subscribe((res:any)=>{
      
            this.areasLocales2=res;
            console.log(this.areasLocales);
          });
          
        }

        // traerdeptosPorDireccion(){   // Trae opcion de Mas de uno

        //   var idDireccion=localStorage.getItem('area');

        //       this.traer.http.get( this.API_URL+`/traerDeptosPorDireccion/${idDireccion}`)
        //       .subscribe((res:any)=>{
          
        //         this. deptosPorDireccion=res;
        //         console.log(this. deptosPorDireccion);
        //       });
              

        // }


        traerdeptosPorDireccion2(){   // Trae solo departamentos de la direccion

          var idDireccion=localStorage.getItem('area');

              this.traer.http.get( this.API_URL+`/traerDeptosPorDireccion2/${idDireccion}`)
              .subscribe((res:any)=>{
          
                this. deptosPorDireccion2=res;
                console.log(this. deptosPorDireccion2);
              });
              

        }


        CapturaCheck(dato:any){

          if(this.result.includes(dato)){
  
            this.result=this.multipleEnvio.filter(i => i != dato);
            this.multipleEnvio=this.result;
    
            console.log(this.multipleEnvio);
  
          }else{
            
            this.multipleEnvio.push(dato);
            this.result=this.multipleEnvio;
            console.log(this.multipleEnvio);       
          }

          if(this.multipleEnvio.length==0){
                  this.botonReenviar=false;
          }else if(this.multipleEnvio.length>0){
                  this.botonReenviar=true;
          }
      }



      ObtenerFolioyId(id:any,folio_unico:any){

        this.folioUnico=folio_unico;
        this.idDocumento=id;

        console.log(this.folioUnico);
        console.log(this.idDocumento);


      }


        reenviar(){

         if(this.multipleEnvio.length==1){

          this.traer.http.post( this.API_URL+`/reenviarUnDepto/${this.idDocumento}`,this.multipleEnvio)
          .subscribe((res:any)=>{
      
            console.log(res);

            if(res=="Editado"){
              Swal.fire({
                title:'Acción exitosa',
                icon:'success',
                text:'La reasignación del documento fue realizada ',
                showConfirmButton:false
              })
            }

            setTimeout(function(){
              location.reload();
  
            },1500); 

          });

         }else if(this.multipleEnvio.length>=2){

          var areaTurnada=localStorage.getItem('area');

          this.traer.http.post( this.API_URL+`/reenviarVariosDeptos/${this.idDocumento}/${areaTurnada}`,this.multipleEnvio)
          .subscribe((res:any)=>{
      
            console.log(res);

            if(res=="Masivo"){
              Swal.fire({
                title:'Acción exitosa',
                icon:'success',
                text:'La reasignación del documento fue realizada ',
                showConfirmButton:false
              })
            }

            setTimeout(function(){
              location.reload();
  
            },1500); 



          });

         }


        }


}
