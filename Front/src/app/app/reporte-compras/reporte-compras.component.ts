import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { reporte_de_compras,reporte_de_compras_x_proveedor,reporte_existencia_x_partida } from 'src/app/models/reporte_movimientos_x_partida';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reporte-compras',
  templateUrl: './reporte-compras.component.html',
  styleUrls: ['./reporte-compras.component.css']
})
export class ReporteComprasComponent implements OnInit {

   reporte:reporte_de_compras={
  
      fechaIni:null,
      fechaFin:null,
      partida:'',
      fechaReporte:null
  
    }

    
   reporte2:reporte_de_compras_x_proveedor={
  
      fechaIni:null,
      fechaFin:null,
      idproveedor:null,
      fechaReporte:null
  
    }

     datosproveedor:any=[];
     proveedores:any=[];

     partidas:any=[];
    API_URL = environment.uri_api;

      direccionSeleccionada:number;

  constructor(private traer:TraerDatosService) { }

  ngOnInit(): void {

    this.traerPartidas();
    this.traerProveedores();
  }

   GeneraReporte(form:NgForm){
  
      if(form.valid==true){
  
               if(this.reporte.partida=="0"){
      
           const httpOptions = {
                          
                              headers: new HttpHeaders({
                                'Content-Type':  'application/json',        
                              } ),responseType: 'blob' as 'arraybuffer'
                          
                            };      
                    
                           this.traer.http.post( this.API_URL+`/reporte_de_compras_todas`,this.reporte,httpOptions)
                          .subscribe((res:any)=>{
                         
                            var file=new Blob([res],{type:'application/pdf'});
                            var fileURL=URL.createObjectURL(file); 
                          
  
                              const link = document.createElement('a');
                              link.href = fileURL;
                              link.download = 'Reporte_de_todas_las_compras';
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                                         
                        });
  
      }
  
       else if(this.reporte.partida != "0"){
  
  
             const httpOptions = {
                            
                                headers: new HttpHeaders({
                                  'Content-Type':  'application/json',        
                                } ),responseType: 'blob' as 'arraybuffer'
                            
                              };      
                      
                             this.traer.http.post( this.API_URL+`/reporte_de_compras_x_partida`,this.reporte,httpOptions)
                            .subscribe((res:any)=>{
                           
                              var file=new Blob([res],{type:'application/pdf'});
                              var fileURL=URL.createObjectURL(file); 
  
  
                               const link = document.createElement('a');
                              link.href = fileURL;
                              link.download = 'Reporte_compras_por_partida';
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
  
                                           
                          });
  
       }
  
      }
      
      
      else{
  
         Swal.fire({
          title:"Complete todos los campos",
          icon:"warning"
         })
  
      }
  
   
  
    }
  
     traerPartidas(){
    
      this.traer.http.get( this.API_URL+`/traerPartidas`)
      .subscribe((res:any)=>{
        this.partidas=res;
  
         this.partidas.push({id:'0',clave:'0',descripcion:'Todos'})
          console.log(this.partidas);
  
  
        console.log(this.partidas);
        
      });
      
    }

     traerProveedores(){


      this.traer.http.get( this.API_URL+`/traerProveedores`)
    .subscribe((res:any)=>{
      this.proveedores=res;
      console.log(this.proveedores);
      
    });

  }


    CapturarValor(){

    var idproveedor=this.direccionSeleccionada;
    console.log(idproveedor);

        this.traer.http.get( this.API_URL+`/traerDatosProveedores/${idproveedor}`)
    .subscribe((res:any)=>{

      this.datosproveedor=res;
     
    }); 
 
  }


   GeneraReportePorProveedor(form:NgForm){
  
      if(form.valid==true){
      
           const httpOptions = {
                          
                              headers: new HttpHeaders({
                                'Content-Type':  'application/json',        
                              } ),responseType: 'blob' as 'arraybuffer'
                          
                            };      
                    
                           this.traer.http.post( this.API_URL+`/reporte_de_compras_x_proveedor`,this.reporte2,httpOptions)
                          .subscribe((res:any)=>{
                         
                            var file=new Blob([res],{type:'application/pdf'});
                            var fileURL=URL.createObjectURL(file); 
                          
  
                              const link = document.createElement('a');
                              link.href = fileURL;
                              link.download = 'Reporte_compras_x_proveedor';
                              document.body.appendChild(link);
                              link.click();
                              document.body.removeChild(link);
                                         
                        }); 
            }
           
      else{
  
         Swal.fire({
          title:"Complete todos los campos",
          icon:"warning"
         })
  
      }
  
   
  
    } 

}
