import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TraerDatosService } from '../services/traer-datos.service';
import { NgForm } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { recargaAlmacen } from '../models/nuevoDocumento';
import Swal from 'sweetalert2';
import { ProveedoresService } from '../services/proveedores.service';
import { proveedores } from '../models/proveedores';

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


  constructor(private traer:TraerDatosService, private currencyPipe:CurrencyPipe, private proveedoresService: ProveedoresService) { }




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

    RecargarStock(form: NgForm) {
  // 1. Manejo seguro si no se ha seleccionado proveedor
  this.Recargastock.proveedor = this.direccionSeleccionada ? this.direccionSeleccionada.toString() : '';

  // 2. Validación de campos obligatorios
  if (
    !this.Recargastock.partida || 
    !this.Recargastock.producto || 
    !this.Recargastock.proveedor || 
    !this.Recargastock.cantidad || 
    !this.Recargastock.fechaAd || 
    !this.Recargastock.folio
  ) {
    Swal.fire('Error', '¡Todos los campos son obligatorios antes de enviar!', 'warning');
    return;
  }

  // 3. Alerta de confirmación antes de guardar
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Se agregarán los datos al stock del almacén',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, guardar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {

    // 4. Si el usuario presiona "Sí, guardar"
    if (result.isConfirmed) {

      this.traer.http.post(
        `${this.API_URL}/recargarStock/${this.Recargastock.producto}/${this.Recargastock.proveedor}`,
        this.Recargastock
      ).subscribe({
        next: (res: any) => {
          if (res === 'reload') {
            Swal.fire('¡Guardado!', '¡Los datos fueron agregados al stock!', 'success');

            // Reset de variables
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
            };

            form.resetForm();
          } else {
            Swal.fire('Error', 'Contacte a soporte', 'error');
          }
        },
        error: (err) => {
          console.error('Error al recargar stock:', err);
          Swal.fire('Error', 'Ocurrió un problema en el servidor', 'error');
        }
      });

    }
  });
}
  
  

   /* opcionSeleccionadaX() { 
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
}*/

opcionSeleccionadaX() { 
  this.articuloValido = false;
  this.terminoBusqueda = ''; 
  this.Recargastock.producto = null; 
  this.productos = [];
  this.productosFiltrados = [];  
  this.direccionSeleccionada = null;
  this.proveedores = []; 

  if (!this.Recargastock.partida) return;

  // 🔥 Le agregamos /articulos antes de /traerProductos
  this.traer.http.get(this.API_URL + `/articulos/traerProductos/${this.Recargastock.partida}`)
    .subscribe({
      next: (res: any) => {
        this.productos = res;
        this.productosFiltrados = res;
      },
      error: (err) => console.error('Error al traer productos por partida:', err)
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

/*buscarYSeleccionar() {
  
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
}*/

buscarYSeleccionar() {
  const match = this.productos.find(p => p.descripcion === this.terminoBusqueda);

  if (match) {
    this.Recargastock.producto = match.id;
    console.log("Producto seleccionado:", this.Recargastock.producto);

    // Resetear proveedor anterior
    this.direccionSeleccionada = null;
    this.articuloValido = false;

    // Cargar ÚNICAMENTE los proveedores asociados a este producto
    this.cargarProveedoresPorProducto(+this.Recargastock.producto);

  } else {
    this.Recargastock.producto = null;
    this.proveedores = [];
    this.direccionSeleccionada = null;
  }
}

cargarProveedoresPorProducto(idArticulo: number) {
  // Usamos el servicio de proveedores con su respuesta tipada
  this.proveedoresService.traerProveedoresPorArticulo(idArticulo)
    .subscribe({
      next: (res: proveedores[]) => {
        this.proveedores = res;

        if (this.proveedores && this.proveedores.length === 1) {
          // 💡 SI SOLO HAY 1 PROVEEDOR, SE AUTOCOMPLETA
          this.direccionSeleccionada = this.proveedores[0].id;
          this.CapturarValor(); // Obtiene el costo unitario automáticamente
        } else if (this.proveedores && this.proveedores.length > 1) {
          // 💡 SI HAY MÁS DE 1, EL USUARIO ELIGE DE LA LISTA YA FILTRADA
          Swal.fire({
            title: 'Múltiples proveedores',
            text: 'Por favor seleccione el proveedor correspondiente para este producto.',
            icon: 'info',
            timer: 2000,
            showConfirmButton: false
          });
        } else {
          // ⚠️ SIN PROVEEDORES ASIGNADOS
          Swal.fire({
            title: 'Sin proveedor',
            text: 'Este producto no tiene ningún proveedor asignado en el almacén.',
            icon: 'warning'
          });
          this.direccionSeleccionada = null;
        }
      },
      error: (err) => {
        console.error('Error al cargar proveedores del producto:', err);
      }
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
