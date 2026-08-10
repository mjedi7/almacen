import { Component, OnInit } from '@angular/core';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import { UsarArticuloPlantel } from 'src/app/models/nuevoDocumento';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { formatDate } from '@angular/common';
import { isPromise } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-usar-articulo',
  templateUrl: './usar-articulo.component.html',
  styleUrls: ['./usar-articulo.component.css']
})
export class UsarArticuloComponent implements OnInit {


  usarArticulo: UsarArticuloPlantel={
          
          plantel:null,
          producto:'',
          stockDisponible:null,
          cantidadSolicitar:null,
          fecha:null,
          nombreSolicitante:'', 
          consecutivo:null,
          idcosto:'',
          existenciaFinal:null,
          descripcion:'',
          nomAutoriza:localStorage.getItem('nombre')

        };


    API_URL = environment.uri_api;
     partidas:any=[];
     disponible:any=[];
     consecutivo:any=[];

     
      productosfiltrados: any [] = [];
      productoBuscado: string = '';
       productos:any=[];

        articulosRequisicion:any=[];    
        mostrarBotonTransferir:boolean=false;

        dtOptions: any={};
        dtTrigger= new Subject;

        fechaResgistro:string;

        stockPlantel:any;
        secuenciaConsecutivo:any;
    

  constructor(private traer:TraerDatosService) { }

  ngOnInit(): void {
    // this.traerPartidas();
    this.opcionSeleccionadaX();
    this.traerConsecutivo();

       this.fechaResgistro = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
        this.usarArticulo.fecha=this.fechaResgistro;
  }

  cantidadDisponiblePlantel(idProducto:number){

      this.traer.http.get( this.API_URL+`/traerDisponiblePlantel/${idProducto}`)
    .subscribe((res:any)=>{
      this.disponible=res;
      this.stockPlantel=this.disponible[0].existencias;
      console.log(`Stock del plantel: ${this.stockPlantel}`);
      
    });


  }

    traerConsecutivo(){

      var plantel=localStorage.getItem('centro_trabajo')
  
    this.traer.http.get( this.API_URL+`/traerConsecutivoPlantelesUsarArticulo/${plantel}`)
    .subscribe((res:any)=>{
      this.consecutivo=res;

      console.log(this.consecutivo)

      this.secuenciaConsecutivo=this.consecutivo;

      
    });
    
  }

  
  //  traerPartidas(){
  
  //   this.traer.http.get( this.API_URL+`/traerPartidas`)
  //   .subscribe((res:any)=>{
  //     this.partidas=res;
  //     console.log(this.partidas);
      
  //   });
    
  // }

   filtrarProductos(){
    const texto = this.productoBuscado.toLowerCase();
    this.productosfiltrados = this.productos.filter(p => 
      p.nombre_producto.toLowerCase().includes(texto)
    );
  }

   seleccionarProducto(producto: any,idProducto:number){

    console.log(`Id del producto: ${idProducto}`);

    this.usarArticulo.idcosto = producto.id_costos;
    this.productoBuscado = producto.nombre_producto;
    this.productosfiltrados = [];

    this.cantidadDisponiblePlantel(idProducto);
  }



  agregarArticulo(form:NgForm){

          this.usarArticulo.consecutivo=this.secuenciaConsecutivo;
          this.usarArticulo.stockDisponible=this.stockPlantel;
          this.usarArticulo.plantel=parseInt(localStorage.getItem('centro_trabajo'));
          this.usarArticulo.producto=this.productoBuscado;
          this.usarArticulo.existenciaFinal=this.stockPlantel - this.usarArticulo.cantidadSolicitar;

          console.log(this.usarArticulo);
  
          if(form.valid==true){
  
                    if(this.usarArticulo.cantidadSolicitar <= 0 || Number.isInteger(this.usarArticulo.cantidadSolicitar)==false || this.usarArticulo.cantidadSolicitar>this.usarArticulo.stockDisponible){
    
               Swal.fire({
    
              title:"Operación no realizada",
              text:"La cantidad a solicitar debe ser mayor a 0, número entero y la cantidad a solicitar no puede ser mayor al stock disponible",
              icon: "warning"
    
            });
    
    
            }else{
              
                    this.traer.http.post( this.API_URL+`/enviarArticulosEnMovimientosPlantel`,this.usarArticulo)
                      .subscribe((res:any)=>{
                        
                        console.log(res);
                  
                        if(res=="Add"){
                           
                                      Swal.fire(
                                        'Ok',
                                        'Articulo agregado a la lista',
                                        'success'
                                      );  

                                      this.getListaArticulosRequisicionPlantel();
  
                        }else if(res=="Duplicado"){
                  
                          Swal.fire({
                          title:"Artículo duplicado",
                          icon:'warning',
                          text:"Este artículo ya fue agregado a la lista"
                        });
                  
                        }else if(res=="ErrorProducto"){
  
                          Swal.fire({
                          title:"Artículo no válido",
                          icon:'warning',
                          text:"Debe elegir un artículo de la lista"
                        });
  
                        }
                        
                      });        
          }
  
                  }else{
          
                        Swal.fire({
                    
                              title:"Operación no realizada",
                              text:"Complete todos los campos",
                              icon: "warning"
                    
                            });
                  }
       
        }

    opcionSeleccionadaX(){

    var plantel=localStorage.getItem('centro_trabajo')

      this.traer.http.get( this.API_URL+`/traerProductosDesdeUsarArticuloPlantel/${plantel}`)                                   
    .subscribe((res:any)=>{
      this.productos=res;
      this.productosfiltrados = res; 
      console.log(this.productos);


      
      this.usarArticulo.idcosto=null;
      // this.usarArticulo.nombreProducto = ''; 
      
    });

  }

// Lista de articulos a usar


    getListaArticulosRequisicionPlantel(){

    $('#articulos').DataTable().clear();
    $('#articulos').DataTable().draw();
     $('#articulos').DataTable().destroy();
  
    try{

      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        searching:false,
        processing:true,
        destroy:true,
        language:{
          url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
        },
  
      };

         var folio=this.usarArticulo.consecutivo;
         var id=this.usarArticulo.plantel;

          this.traer.http.get(this.API_URL+`/getListaArticulosRequisicionPlantel/${folio}/${id}`)
          .subscribe((res)=>{
        
            this.articulosRequisicion=res;
            console.log(this.articulosRequisicion);
    
            this.dtTrigger.next();

             if(this.articulosRequisicion.length>0){
              this.mostrarBotonTransferir=true;
            }else{
              this.mostrarBotonTransferir=false;
            }
            
          });    
    
    }catch(error){
      console.log(error)
    
    }

  }






// // Formato de articulos a usar en Plantel

   formatoRequisicionPlantel(){

              const httpOptions = {    
              headers: new HttpHeaders({
              'Content-Type':  'application/json',        
            } ),responseType: 'blob' as 'arraybuffer'
        
          };        
  
         this.traer.http.get( this.API_URL+`/formatoRequisicionPlantel/${this.usarArticulo.plantel}/${this.usarArticulo.consecutivo}`,httpOptions)
        .subscribe((res:any)=>{
       
          var file=new Blob([res],{type:'application/pdf'});
          var fileURL=URL.createObjectURL(file); 


            const link = document.createElement('a');
            link.href = fileURL;
            link.download = 'Formato_Requisicion';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

          setTimeout(function(){ location.reload(); }, 3000);
        
      });

  
    }

          eliminarArticulo(idarticulo:number){

    console.log(idarticulo);


        this.traer.http.delete(this.API_URL+`/eliminarArticuloRequisicionPlantel/${idarticulo}`)
          .subscribe((res)=>{

            this.getListaArticulosRequisicionPlantel();
            
          });   

  }



    confirmarTranferencia(){
  
      Swal.fire({
    title: "¿Estas seguro de terminar la lista?",
    text: "Una vez terminada no podrá agregar nuevos artículos ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText:'Cancelar',
    confirmButtonText: "Si, terminar"
  }).then((result) => {
  
    if (result.isConfirmed) {
  
          console.log("ID transferencia=" +this.usarArticulo.consecutivo);
  
       this.traer.http.get(this.API_URL+`/confirmarTransferenciaEnPlantel/${this.usarArticulo.consecutivo}`)
            .subscribe((res)=>{
  
              if(res=="ListaOk"){
  
                 Swal.fire({
  
                    title:"Lista asignada",
                    text:"Los artículos se asignaron correctamente",
                    icon: "success"
  
                    });
  
                    this.formatoRequisicionPlantel();

                                       
                  setTimeout(function()
                  { 
                    location.reload(); 
                  }, 7000);
  
              }
                          
            });  
    }else{
          console.log("Cancelado...")
    }
  
  });
  
  
    }

}
