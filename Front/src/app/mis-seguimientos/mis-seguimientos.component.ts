import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TraerDatosService } from '../services/traer-datos.service';
import { NgForm } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { recargaAlmacen } from '../models/nuevoDocumento';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-seguimientos',
  templateUrl: './mis-seguimientos.component.html',
  styleUrls: ['./mis-seguimientos.component.css']
})
export class MisSeguimientosComponent implements OnInit {




  API_URL = environment.uri_api;
  
    myFiles!:Array<any>
    numidentificador:any;
  
    stocks:any=[];
    partidas:any=[];
    productos:any=[];
    proveedores:any=[];
    datosproveedor:any=[];
    
    tipo:string;
    opcionSeleccionada:string='';
    
    verSeleccion:string;
    mostrarBoton:boolean=false;
    fecha_registrox:any='';
  
    deptosmultipleEnvio:any=[];
    direccmultipleEnvio:any=[]
    multipleEnvio:any=[];
    multipleEnviodirecciones:any=[];

    costo_unitario:number;

    articuloValido: boolean = false;

    terminoBusqueda: string = '';
    productosFiltrados: any[] = [];
  
  
    Recargastock: recargaAlmacen={
      
      partida: null,
      producto: null,
      proveedor:'',
      folio:'',
      cantidad: null,  
      fechaAd:null,
      importe:null,
      totalCompra:null

    };
  
  day:string;
  month:string;
  year:string;
  result:any=[];
  
    direccionSeleccionada: number;


  monedaFormateada:any='$ 0.00';
   monedaFormateada2:any='$ 0.00';


  constructor(private traer:TraerDatosService, private currencyPipe:CurrencyPipe) { }




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

   this.traerPartidas();
   this.traerProveedores();


  }

    RecargarStock(form:NgForm){
      // linea nacho

      this.Recargastock.proveedor = this.direccionSeleccionada.toString();

      if (!this.Recargastock.partida || !this.Recargastock.producto || 
      !this.Recargastock.proveedor || !this.Recargastock.cantidad || 
      !this.Recargastock.fechaAd || !this.Recargastock.folio) {
    
    Swal.fire(
      'Error',
      '¡Todos los campos son obligatorios antes de enviar!',
      'warning'
    );
    return; 
  }
  
      console.log(this.Recargastock);
  
  
        this.traer.http.post( this.API_URL+`/recargarStock/${this.Recargastock.producto}/${this.Recargastock.proveedor}`,this.Recargastock)
          .subscribe((res:any)=>{
            
            console.log(res);
      
            if(res=="reload"){
               
                          Swal.fire(
                            'Ok',
                            '¡Los datos fueron agregados al stock!',
                            'success'
                          );  
                          this.articuloValido = false;
                          this.terminoBusqueda = '';
                          this.monedaFormateada = '$ 0.00';
                          this.monedaFormateada2 = '$ 0.00';
                          this.costo_unitario = 0;
                          this.direccionSeleccionada = null;

                          this.Recargastock = {
                            partida: null,
                            producto: null,
                            proveedor: '',
                            folio: '',
                            cantidad: null,
                            fechaAd: null,
                            importe: null,
                            totalCompra: null
                          }
                          form.resetForm();
            } 
            else{

                 Swal.fire(

                'Error',
                'Contacte a soporte',
                'error'
          
            );

            
            }
            
          });
  
    }
  
  

    opcionSeleccionadaX() { 
  this.articuloValido = false;
  this.terminoBusqueda = ''; 
  this.Recargastock.producto = null; 
  this.productosFiltrados = [];

  this.traer.http.get(this.API_URL + `/traerProductos/${this.Recargastock.partida}`)
    .subscribe((res: any) => {
      console.log(res);
      this.productos = res;
      this.productosFiltrados = res;
    });
}

    buscarProducto() {
  if (!this.terminoBusqueda) {
    this.productosFiltrados = this.productos;
    return;
  }

  const busqueda = this.terminoBusqueda.toLowerCase();

  
  this.productosFiltrados = this.productos.filter(p => 
    p.descripcion?.toLowerCase().includes(busqueda) || 
    p.idproducto?.toString().toLowerCase().includes(busqueda)
  );
}

buscarYSeleccionar() {
  
  const match = this.productos.find(p => p.descripcion === this.terminoBusqueda);

  if (match) {
  
    this.Recargastock.producto = match.id; 
    
    console.log("Match encontrado:", this.Recargastock.producto);

    if (this.direccionSeleccionada) {
      this.CapturarValor();
    }
  } else {
    this.Recargastock.producto = null;
  }
}
  
   traerProveedores(){
  
   
  
        this.traer.http.get( this.API_URL+`/traerProveedores`)
      .subscribe((res:any)=>{
        this.proveedores=res;
        console.log(this.proveedores);
        
      });
  
    }
    
   CapturarValor(){
  
      const idproveedor=this.direccionSeleccionada;
      console.log(idproveedor);
      const idArticulo = this.Recargastock.producto;
      console.log(idArticulo);

      if(!idproveedor || !idArticulo) {
        console.warn("Faltan Ids para validar");
        return;
      }

      if(!this.productos) {
        return;
      }
  
      //     this.traer.http.get( this.API_URL+/traerDatosProveedores/${idproveedor})
      // .subscribe((res:any)=>{
     
      //   this.datosproveedor=res;
        
      // }); 

    

        this.traer.http.get( this.API_URL+`/traerCostoArticulo/${idproveedor}/${this.Recargastock.producto}`)
        .subscribe((res:any)=>{

          // console.log(Respuesta del servidor: ${res});

          if(res=='ArticuloNoEncontrado'){

            Swal.fire({
              title:'No encontrado',
              text:'El artículo con el proveedor seleccionado no se encuantra en el almacén',
              icon:'warning'
            })

            this.costo_unitario=0.00;
            this.articuloValido = false;

            this.Recargastock.importe = 0;
            this.Recargastock.totalCompra = 0;
            this.monedaFormateada = '$ 0.00';
            this.monedaFormateada2 = '$ 0.00';
            this.Recargastock.folio = '';
            this.Recargastock.cantidad = 0;

          }else{
                console.log(res);        
                this.costo_unitario=+res;
                this.articuloValido = true;
                if(this.Recargastock.cantidad) {
                  this.CalcularImporteyTotal();
                }

          }
  
       }); 
   
    }


    CalcularImporteyTotal(){  

      if(this.Recargastock.cantidad <= 0) {
        this.Recargastock.cantidad = 1
      } 

      this.Recargastock.importe=(this.costo_unitario * this.Recargastock.cantidad);
      this.monedaFormateada=this.currencyPipe.transform(this.Recargastock.importe,'USD','$');

     
      this.Recargastock.totalCompra=(this.Recargastock.importe + (this.Recargastock.importe * 0.16));
      this.monedaFormateada2=this.currencyPipe.transform(this.Recargastock.totalCompra,'USD','$');

    }
  
  
    traerPartidas(){
    
      this.traer.http.get( this.API_URL+`/traerPartidas`)
      .subscribe((res:any)=>{
        this.partidas=res;
        console.log(this.partidas);
        
      });
      
        }
  }
