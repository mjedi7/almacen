import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { reporte_existencia_x_partida } from 'src/app/models/reporte_movimientos_x_partida';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-existencia-x-partida',
  templateUrl: './reporte-existencia-x-partida.component.html',
  styleUrls: ['./reporte-existencia-x-partida.component.css']
})
export class ReporteExistenciaXPartidaComponent implements OnInit {

   reporte:reporte_existencia_x_partida={
  
      centro_trabajo:parseInt(localStorage.getItem('centro_trabajo')),
      partida:'',
      fecha:null
  
    }

   partidas:any=[];
    API_URL = environment.uri_api;

  constructor(private traer:TraerDatosService) { }

  ngOnInit(): void {
    this.traerPartidas();
  }


    GeneraReporte(form:NgForm){
  
      if(form.valid==true){


        if(this.reporte.partida=="0"){

                const httpOptions = {
                          
                              headers: new HttpHeaders({
                                'Content-Type':  'application/json',        
                              } ),responseType: 'blob' as 'arraybuffer'
                          
                            };      
                    
                           this.traer.http.post( this.API_URL+`/reporte_existencias_x_partida_todas`,this.reporte,httpOptions)
                          .subscribe((res:any)=>{
                         
                            var file=new Blob([res],{type:'application/pdf'});
                            var fileURL=URL.createObjectURL(file); 

                            const link = document.createElement('a');
                            link.href = fileURL;
                            link.download = 'Reporte_existencias_todas_las_partidas';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                     
                                         
                        });

        }else if(this.reporte.partida != "0"){

           const httpOptions = {
                          
                              headers: new HttpHeaders({
                                'Content-Type':  'application/json',        
                              } ),responseType: 'blob' as 'arraybuffer'
                          
                            };      
                    
                           this.traer.http.post( this.API_URL+`/reporte_existencias_x_partida`,this.reporte,httpOptions)
                          .subscribe((res:any)=>{
                         
                            var file=new Blob([res],{type:'application/pdf'});
                            var fileURL=URL.createObjectURL(file); 


                             const link = document.createElement('a');
                            link.href = fileURL;
                            link.download = 'Reporte_existencia_por_partida';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);

                            // window.open(fileURL); 
                                         
                        });
       }

      }else{
  
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

        this.partidas.push({id:'',clave:'0',descripcion:'Todos'})
        console.log(this.partidas);
  
      });
      
    }

}
