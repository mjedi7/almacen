import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})
export class ListaMovimientosComponent implements OnInit {


     planteles:any=[];
     salidas:any=[];
     opcionSeleccionado: number  = 0;
     verSeleccion: number;
     API_URL = environment.uri_api;

       dtOptions: any={};
      dtTrigger= new Subject;

  constructor(private traer:TraerDatosService) { }

     myFiles!:Array<any>

     id:number;
  //  folio_solicitud:number;
    numidentificador:any;

  ngOnInit(): void {
    this.traerPlanteles();
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

      this.getListaSalidas(this.verSeleccion);


  }

    getListaSalidas(idplantel:number){

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

          this.traer.http.get(this.API_URL+`/getSalidas/${idplantel}`)
          .subscribe((res)=>{
        
            this.salidas=res;
            console.log(this.salidas);
    
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


                subirPDF(id:number){
               
                  this.id=id;
      
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
                  
                  this.traer.http.post(this.API_URL+`/SubirArchivoRequisicionPlantel/${this.numidentificador}/${areaDocumento}`,formdata).subscribe((res) => {
                      
                        console.log(res);
          
                        this.actualizarCampoRuta();
                  
                     },(err : HttpErrorResponse)=>{
                       console.log(err);
                    });
                
                
                  } 
                  
                  
                  
        actualizarCampoRuta(){

          var idPlantel=localStorage.getItem('centro_trabajo');

            this.traer.http.put( this.API_URL+`/actualizaRutaPlanteles/${this.numidentificador}/${this.id}/${idPlantel}`,null)
                  .subscribe((res:any)=>{

                    if(res=="rutaActualizada"){
                              // this.traerRequisicionesPendientes();
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
        
         
           this.traer.http.get(this.API_URL+`/abrirPDFRequisicionPlantel/${url}`,httpOptions).subscribe((res:any)=>{ 
        
            console.log(res);
          
            var file=new Blob([res],{type:'application/pdf'});
            var fileURL=URL.createObjectURL(file); 
            console.log(fileURL);
            window.open(fileURL); 
            
        
        })
        
        
                }

}
