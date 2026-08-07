import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import { UsarArticulo } from 'src/app/models/nuevoDocumento';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-existencias',
  templateUrl: './existencias.component.html',
  styleUrls: ['./existencias.component.css']
})
export class ExistenciasComponent implements OnInit {

    planteles:any=[];
    existencias:any=[];
    opcionSeleccionado: number  = 0;
    verSeleccion: number;
    API_URL = environment.uri_api;

    dtOptions: any={};
    dtTrigger= new Subject;

    UsarArticulo: UsarArticulo={
          
            nombreAutoriza:localStorage.getItem('nombre'),
            nombreSolicita:'',
            cantidadDisponible:null,
            cantidadAUtilizar:null,
            observacion:'',
            fecha:'',
            idPlantel:null,
            idCostos:null
        
        };

        botonUtilizaArticulo:boolean=false;

  constructor(private traer:TraerDatosService) { }

  ngOnInit(): void {

    this.traerPlanteles();

    let fecha = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
    this.UsarArticulo.fecha=fecha;

    var centroT=localStorage.getItem('centro_trabajo');

    var centroTrabajoInt=parseInt(centroT);

    if(centroTrabajoInt>=1 && centroTrabajoInt<=31){
        this.botonUtilizaArticulo=true;
    }else if(centroTrabajoInt>32){
      this.botonUtilizaArticulo=false;
    }

  }



    getListaExistencias(idplantel:number){

    $('#articulos').DataTable().clear();
    $('#articulos').DataTable().draw();
     $('#articulos').DataTable().destroy();
  
    try{

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

          this.traer.http.get(this.API_URL+`/getExistencias/${idplantel}`)
          .subscribe((res)=>{
        
            this.existencias=res;
            console.log(this.existencias);
    
            this.dtTrigger.next();
            
          });    
    
    }catch(error){
      console.log(error)
    
    }

  }

    traerPlanteles(){

      var plantel=localStorage.getItem('centro_trabajo');

      this.traer.http.get( this.API_URL+`/traerPlanteles/${plantel}`)
      .subscribe((res:any)=>{
      this.planteles=res;
      console.log(this.planteles);
      
    });

  }

    plantelSeleccionado(){

      this.verSeleccion = this.opcionSeleccionado;
      console.log(this.verSeleccion);


      this.getListaExistencias(this.verSeleccion);

  }


  PasarCantidadDisponible(cantidadDisponible:number,id_costos:number){

    this.UsarArticulo.cantidadDisponible=cantidadDisponible;
    this.UsarArticulo.idCostos=id_costos;

  }


  AsignarArticulo(form:NgForm){


    this.UsarArticulo.idPlantel=this.verSeleccion;

    if(this.UsarArticulo.cantidadAUtilizar > this.UsarArticulo.cantidadDisponible || this.UsarArticulo.cantidadAUtilizar <= 0){

      console.log("No hay stock");

      Swal.fire({

        title:"Operación no realizada",
        text:"La cantidad a utilizar no es valida",
        icon: 'warning'

      } )

    }else{

     this.traer.http.post( this.API_URL+`/UsarArticuloPlantel`,this.UsarArticulo)
                      .subscribe((res:any)=>{
                        
                        console.log(res);
                  
                        if(res=="Add"){
                           
                                      Swal.fire(
                                        'Operación realizada',
                                        'El articulo se disminuyo del stock',
                                        'success'
                                      );  

                                      this.getListaExistencias(this.verSeleccion);
    
                        }else{
                  
                          Swal.fire(
                            'Error',
                            '¡No se guardaron los cambios!',
                            'error'
                          );
                  
                        }
                        
                      });

    }


  }



  //REPORTE


  reporteGneral(){


      const httpOptions = {
      
          headers: new HttpHeaders({
            'Content-Type':  'application/json',        
          } ),responseType: 'blob' as 'arraybuffer'
      
        };
        

       this.traer.http.get( this.API_URL+`/reporteGeneral/${this.verSeleccion}`,httpOptions)
      .subscribe((res:any)=>{
     
         var file=new Blob([res],{type:'application/pdf'});
        var fileURL=URL.createObjectURL(file); 
        console.log(fileURL);
        window.open(fileURL); 
      
    });




  }

 
  descargarFormato() {

    const link = document.createElement('a');
    link.href = 'assets/Formato_plantel.pdf';
    link.download = 'Formato_plantel.pdf';
    link.click();

  }


}
