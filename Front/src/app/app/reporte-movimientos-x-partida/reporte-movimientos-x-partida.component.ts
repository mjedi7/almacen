import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { reporte_x_partida } from 'src/app/models/reporte_movimientos_x_partida';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-movimientos-x-partida',
  templateUrl: './reporte-movimientos-x-partida.component.html',
  styleUrls: ['./reporte-movimientos-x-partida.component.css']
})
export class ReporteMovimientosXPartidaComponent implements OnInit {

  reporte:reporte_x_partida={

    fechaIni:null,
    fechaFin:null,
    partida:''

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
                  
                         this.traer.http.post( this.API_URL+`/reporte_movimiento_x_partida_todos`,this.reporte,httpOptions)
                        .subscribe((res:any)=>{
                       
                          var file=new Blob([res],{type:'application/pdf'});
                          var fileURL=URL.createObjectURL(file); 
                        

                            const link = document.createElement('a');
                            link.href = fileURL;
                            link.download = 'Reporte_movimientos_por_partida_todos';
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
                    
                           this.traer.http.post( this.API_URL+`/reporte_movimiento_x_partida`,this.reporte,httpOptions)
                          .subscribe((res:any)=>{
                         
                            var file=new Blob([res],{type:'application/pdf'});
                            var fileURL=URL.createObjectURL(file); 


                             const link = document.createElement('a');
                            link.href = fileURL;
                            link.download = 'Reporte_movimientos_por_partida';
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

       this.partidas.push({id:'',clave:'0',descripcion:'Todos'})
        console.log(this.partidas);


      console.log(this.partidas);
      
    });
    
  }

}
