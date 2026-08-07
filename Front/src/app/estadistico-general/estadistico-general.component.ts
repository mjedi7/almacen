import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartType } from 'chart.js';
import { Subject } from 'rxjs';
import { TraerDatosService } from '../services/traer-datos.service';
import { environment } from 'src/environments/environment';
import { Transferencias } from '../models/nuevoDocumento';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { param } from 'jquery';
import { FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-estadistico-general',
  templateUrl: './estadistico-general.component.html',
  styleUrls: ['./estadistico-general.component.css']
})
export class EstadisticoGeneralComponent implements OnInit {

   transferencia: Transferencias={
      
      plantel:null,
      partida: null,
      idcosto: null,
      fecha:null,
      cantidadEnStock: null,
      cantidadTransferir:null,
      consecutivo:null,
      autorizo:localStorage.getItem('nombre'),
      recibio:'',
      nombreProducto:''
    
    };

    productosFiltrados: any [] = [];
    productoBuscado: string = '';
     dtOptions: any={};
     dtTrigger= new Subject;

    API_URL = environment.uri_api;

    articulosTransferir:any=[];
    totales:any;
    planteles:any=[];
    partidas:any=[];
    productos:any=[];
    datosAdmin:any=[];
 

    direccionSeleccionada:string='';

    asig:any[]=[];
    numlista:number=0;

     sumagenerados:number=0;

     mostrarBotonTransferir:boolean=false;

  constructor(private traer:TraerDatosService) { }

  public chart:Chart;

  ngOnInit(): void {

this.traerPartidas();
this.traerPlanteles();
this.TraerConsecutivo();
this.productosFiltrados;

  }

filtrarProductos() {
  const texto = this.productoBuscado.toLowerCase();
  this.productosFiltrados = this.productos.filter(p =>
    p.nombre_producto.toLowerCase().includes(texto)
  );

}

seleccionarProducto(producto: any) {
  this.transferencia.idcosto = producto.id_costos;
  this.productoBuscado = producto.nombre_producto;
  this.productosFiltrados = [];

    this.TraerTotalDisponible();
}

  getListaArticulosTransferir(){

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

         var folio=this.transferencia.consecutivo;

          this.traer.http.get(this.API_URL+`/getListaArticulosTransferir/${folio}`)
          .subscribe((res)=>{
        
            this.articulosTransferir=res;
            console.log(this.articulosTransferir);
    
            this.dtTrigger.next();

            if(this.articulosTransferir.length>0){
              this.mostrarBotonTransferir=true;
            }else{
              this.mostrarBotonTransferir=false;
            }
            
          });    
    
    }catch(error){
      console.log(error)
    
    }

  }

  eliminarArticulo(idarticulo:number){

    console.log(idarticulo);


        this.traer.http.delete(this.API_URL+`/eliminarArticulo/${idarticulo}`)
          .subscribe((res)=>{

            this.getListaArticulosTransferir();
            
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

        console.log("ID transferencia=" +this.transferencia.consecutivo);

     this.traer.http.get(this.API_URL+`/confirmarTransferencia/${this.transferencia.consecutivo}`)
          .subscribe((res)=>{

            if(res=="ListaOk"){

               Swal.fire({

                  title:"Lista asignada",
                  text:"Los artículos se asignaron correctamente",
                  icon: "success"

                  });

                  this.generarFormatoListaSurtido();
                 
                 
                  

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


  generarFormatoListaSurtido(){

                  this.traer.http.get(
                  this.API_URL + `/formatoListaArticulosSurtidos/${this.transferencia.consecutivo}/${this.transferencia.plantel}`,
                  {
                    responseType: 'text'
                  }
                ).subscribe((res: any) => {   
                  console.log(res);
                  
                        this.generarFormatoListaSurtidoSinMontos();
             
                });
  }

  generarFormatoListaSurtidoSinMontos(){

  console.log("Entro a sin montos");

  this.traer.http.get(
    this.API_URL + `/formatoListaArticulosSurtidosSinMontos/${this.transferencia.consecutivo}/${this.transferencia.plantel}`,
    { responseType: 'text' }
  ).subscribe({

    next: (res: any) => {
      console.log(res);
      this.descargarZip();
    },

    error: (err) => {
      console.error("Error al generar el PDF", err);
    }

  });

}


  traerPartidas(){
  
    this.traer.http.get( this.API_URL+`/traerPartidas`)
    .subscribe((res:any)=>{
      this.partidas=res;
      console.log(this.partidas);
      
    });
    
  }

  descargarZip(){


    const httpOptions = {
  responseType: 'blob' as 'blob'
};

this.traer.http.post(
  this.API_URL + `/descargarzip`,
  null,             
  httpOptions         
).subscribe((res: Blob) => {

  const fileURL = window.URL.createObjectURL(res);

  const link = document.createElement('a');
  link.href = fileURL;
  link.download = 'Formato_Transferencia_Sin_Montos.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  window.URL.revokeObjectURL(fileURL);

}, error => {
  console.error('Error descargando ZIP', error);
});

 
  }

   opcionSeleccionadaX(){

    console.log(this.transferencia.partida);

      this.traer.http.get( this.API_URL+`/traerProductosDesdeTransferir/${this.transferencia.partida}`)
    .subscribe((res:any)=>{
      this.productos=res;
      this.productosFiltrados = res; 
      console.log(this.productos);


      this.transferencia.cantidadEnStock=0;
      this.transferencia.idcosto=null;
      this.transferencia.nombreProducto = ''; 
      
    });

  }


  plantelSeleccionado(){

    console.log(this.transferencia.plantel)
   
      this.traer.http.get( this.API_URL+`/traerDatosAdministrativo/${this.transferencia.plantel}`)
    .subscribe((res:any)=>{
      this.datosAdmin=res;
      console.log(this.datosAdmin);
      this.transferencia.recibio=res[0].administrativo;
      
    });

  }


   traerPlanteles(){

      this.traer.http.get( this.API_URL+`/traerPlanteles`)
      .subscribe((res:any)=>{
      this.planteles=res;
      console.log(this.planteles);
      
    });

  }

  TraerTotalDisponible(){

    console.log(this.transferencia.partida);
    console.log(this.transferencia.idcosto);

    this.traer.http.get( this.API_URL+`/traerTotalDisponible/${this.transferencia.idcosto}`)
    .subscribe((res:any)=>{

      if(res=="SinDatos"){
        this.transferencia.cantidadEnStock=0;
      }else{
        this.transferencia.cantidadEnStock=res[0].existencias;
        console.log(res);
      }

    });

  }


   TraerConsecutivo(){

    this.traer.http.get( this.API_URL+`/traerConsecutivo`)
    .subscribe((res:any)=>{

      var consecutivo=res;
      this.transferencia.consecutivo=consecutivo;  
      
    });

  }


    agregarArticulo(form:NgForm){

      console.log(this.transferencia);
    

      if(this.transferencia.idcosto==null){

             Swal.fire({
            title:'Producto no válido',
            text:'Debe elegir un producto de la lista',
            icon:'warning'
          })

      }else if(Number.isInteger(this.transferencia.cantidadTransferir)==false){

         Swal.fire({
            title:'Cantidad no valida',
            text:'La cantidad a transferir debe ser número entero',
            icon:'warning'
          })

      }else{


      if(form.valid==true){

          console.log(this.transferencia);

      if(this.transferencia.cantidadEnStock < this.transferencia.cantidadTransferir){

        Swal.fire({

          title:"Operación no realizada",
          text:"No hay suficiente stock de este producto",
          icon: "warning"

        });


      }else if (this.transferencia.cantidadTransferir <= 0){
   
         Swal.fire({

          title:"Operación no realizada",
          text:"Debe transferir mínimo 1 artículo",
          icon: "warning"

        });

      
      }else{
        
                this.traer.http.post( this.API_URL+`/TransferirArticulosPlantel`,this.transferencia)
                  .subscribe((res:any)=>{
                    
                    console.log(res);
              
                    if(res=="Add"){
                       
                                  Swal.fire(
                                    'Ok',
                                    'Articulo agregado a la lista',
                                    'success'
                                  );  
                                  
                                  this.transferencia.idcosto=null;
                                  this.getListaArticulosTransferir();

                                   this.productoBuscado='';
                                   this.transferencia.cantidadEnStock=null;
                                   this.transferencia.cantidadTransferir=null;


                    }else if(res=="Duplicado"){

                                  Swal.fire(
                                    'Artículo Duplicado',
                                    'Este artículo ya fue agregado a la lista',
                                    'warning'
                                  );  

                    }else{
              
                      Swal.fire(
                        'Error',
                        '¡No se guardaron los cambios!',
                        'error'
                      );
              
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
  
    }

    validarProducto(){
      console.log("Entro a validar Producto");
      this.transferencia.idcosto=null;
    }

}
