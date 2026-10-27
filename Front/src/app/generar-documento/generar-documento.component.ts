import { Component, OnInit } from '@angular/core';
import { claveOperacion } from '../services/clave-operacion';
import { CurrencyPipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { TraerDatosService } from '../services/traer-datos.service';
import { UnidadMedidaServices } from '../services/unidad_medida.service';

// 1. La interfaz DEBE ir afuera de la clase:
export interface almacen {
  partida?: any;
  producto?: any;
  fechaAd?: any;
  cantidad?: any;
  cantidad_recibida?: any;
  fecha_recepcion?: string;
  folio_factura?: string;
  referencia?: string;
  observaciones?: string;
  id_unidad_medida?: any;
  unidad?: string;
  descripcion?: string;
  proveedor?: string;
  telefono?: string;
  direccion?: string;
  costo?: any;
  iva?: string;
  total?: any;
  subTotal?: any;
  folio?: string;
  centro_trabajo?: string | null;
}

@Component({
  selector: 'app-generar-documento',
  templateUrl: './generar-documento.component.html',
  styleUrls: ['./generar-documento.component.css']
})
export class GenerarDocumentoComponent implements OnInit {

  API_URL = environment.uri_api;
  error: string = ''
  guardando = false;
  private clave = claveOperacion();
  envioPendiente: any = null;

  myFiles!: Array<any>;
  numidentificador: any;

  stocks: any = [];
  partidas: any = [];
  productos: any = [];
  proveedores: any = [];
  datosproveedor: any = [];
  unidadesMedida: any = [];

  tipo: string = '';
  opcionSeleccionada: string = '';

  verSeleccion: string = '';
  mostrarBoton: boolean = false;
  fecha_registrox: any = '';

  deptosmultipleEnvio: any = [];
  direccmultipleEnvio: any = [];
  multipleEnvio: any = [];
  multipleEnviodirecciones: any = [];

  // Objeto stock tipado correctamente
  stock: almacen = {
    partida: null,
    producto: null,
    fechaAd: null,
    cantidad: null,
    cantidad_recibida: 0,
    fecha_recepcion: '',
    folio_factura: '',
    referencia: '',
    observaciones: '',
    id_unidad_medida: null,
    unidad: '',
    descripcion: '',
    proveedor: '',
    telefono: '',
    direccion: '',
    costo: null,
    iva: '16%',
    total: null,
    folio: '',
    centro_trabajo: localStorage.getItem('centro_trabajo')
  };

  productosFiltrados: any[] = [];
  productoBuscado: string = '';

  day: string = '';
  month: string = '';
  year: string = '';
  result: any = [];

  direccionSeleccionada: number = 0;
  monedaFormateada: any = '$ 0.00';
  monedaFormateada2: any = '$ 0.00';

  constructor(
    public traer: TraerDatosService,
    private unidadMedidaService: UnidadMedidaServices,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();

    if (dia < 10) {
      this.day = "0" + dia;
    } else {
      this.day = dia.toString();
    }
    if (mes < 10) {
      this.month = "0" + mes;
    } else {
      this.month = mes.toString();
    }

    this.fecha_registrox = this.day + "-" + this.month + "-" + anio;
    console.log(this.fecha_registrox);

    this.traerPartidas();
    this.traerProveedores();
    this.traerUnidadesMedida();
  }

  traerUnidadesMedida() {
    this.unidadMedidaService.listarUnidadesMedida().subscribe({
      next: (res: any) => {
        console.log('>>> RESPUESTA CRUDA:', res);

        if (Array.isArray(res)) {
          this.unidadesMedida = res;
        } else if (res && typeof res === 'object') {
          // Busca automáticamente la primera propiedad interna que sea un arreglo
          const keyArray = Object.keys(res).find(k => Array.isArray(res[k]));
          this.unidadesMedida = keyArray ? res[keyArray] : [];
        } else {
          this.unidadesMedida = [];
        }

        console.log('>>> UNIDADES CARGADAS CON ÉXITO:', this.unidadesMedida);
      },
      error: (err) => {
        console.error('Error al obtener unidades de medida:', err);
      }
    });
  }

  // ... Mantén el resto de tus métodos (AgregarStock, calculoCompra, etc.) dentro de la clase sin modificarlos ...

  AgregarStock(form: NgForm) {
    if (this.guardando) return;
    if (!this.envioPendiente) {
      if (!form.valid || !(Number(this.stock.cantidad) > 0) || this.stock.cantidad_recibida == null ||
        !Number.isFinite(Number(this.stock.cantidad_recibida)) || Number(this.stock.cantidad_recibida) < 0 ||
        Number(this.stock.cantidad_recibida) > Number(this.stock.cantidad) ||
        (Number(this.stock.cantidad_recibida) > 0 && !this.stock.fecha_recepcion)) {
        Swal.fire('Revise los datos', 'Indique lo comprado y lo recibido; la recepción no puede superar la compra.', 'error');
        return;
      }
      this.envioPendiente = { ...this.stock, clave_operacion: this.clave };
    }
    this.guardando = true;
    this.traer.http.post<any>(this.API_URL + '/registrarStock', this.envioPendiente,
      { headers: { Authorization: localStorage.getItem('token') || '' } }).subscribe({
        next: res => {
          this.guardando = false;
          this.envioPendiente = null;
          this.clave = claveOperacion();
          this.stock.cantidad = null;
          this.stock.cantidad_recibida = 0;
          this.stock.producto = null;
          this.productoBuscado = '';
          this.stock.total = null;
          this.stock.subTotal = null;
          this.monedaFormateada = '$ 0.00'; this.monedaFormateada2 = '$ 0.00';
          Swal.fire('Compra registrada', `Compra #${res.id_compra}. Solo lo recibido se sumó a existencias. Puede agregar otro artículo con el mismo folio o consultar sus entregas en Recargar Stock.`, 'success');
        },
        error: err => {
          this.guardando = false;
          if (err.status >= 400 && err.status < 500) this.envioPendiente = null;

          // Aquí guardas el mensaje que mandó el backend
          this.error = err.error?.error || 'No se pudo registrar la compra.';

          Swal.fire('No se confirmó el guardado', this.error, 'error');
        }
      });
  }

  opcionSeleccionadaX() {

    console.log(this.stock.partida);

    this.traer.http.get(this.API_URL + `/traerProductos/${this.stock.partida}`)
      .subscribe((res: any) => {
        this.productos = res;
        this.productosFiltrados = res;    //Se agrego
        console.log(this.productos);

      });

  }


  traerProveedores() {

    this.traer.http.get(this.API_URL + `/traerProveedores`)
      .subscribe((res: any) => {
        this.proveedores = res;
        console.log(this.proveedores);

      });

  }

  CapturarValor() {

    var idproveedor = this.direccionSeleccionada;
    console.log(idproveedor);
    this.stock.proveedor = idproveedor.toString();

    this.traer.http.get(this.API_URL + `/traerDatosProveedores/${idproveedor}`)
      .subscribe((res: any) => {

        this.datosproveedor = res;

        this.stock.telefono = res[0].telefono;
        this.stock.direccion = res[0].direccion;

      });

  }

  calculoCompra() {

    this.stock.total = (this.stock.cantidad * this.stock.costo);
    var iva = (this.stock.total * 0.16);

    this.stock.total = this.stock.total + iva;

    this.monedaFormateada = this.currencyPipe.transform(this.stock.total, 'USD', '$');


    this.stock.subTotal = (this.stock.cantidad * this.stock.costo);
    this.monedaFormateada2 = this.currencyPipe.transform(this.stock.subTotal, 'USD', '$');

  }

  traerPartidas() {

    this.traer.http.get(this.API_URL + `/traerPartidas`)
      .subscribe((res: any) => {
        this.partidas = res;
        console.log(this.partidas);

      });

  }

  filtrarProductos() {
    const texto = this.productoBuscado.toLowerCase();
    this.productosFiltrados = this.productos.filter(p =>
      p.descripcion.toLowerCase().includes(texto)
    );

  }

  seleccionarProducto(producto: any) {
    this.stock.producto = producto.id.toString();
    this.productoBuscado = producto.descripcion;
    this.productosFiltrados = [];

    console.log(this.stock.producto);
  }


  //   GenerarDocumento(form:NgForm){

  //     if(form.invalid){

  //       console.log('Formulario Invalido');
  //       Swal.fire(
  //         'Operación no realizada',
  //         '¡Complete todos los campos!',
  //         'error'
  //       )
  //       return;

  //     }else{


  //       if(this.multipleEnvio.length==0 && this.multipleEnviodirecciones.length==0){    //SE EJECUTA EL GUARDADO NORMAL


  //         this.numidentificador=Date.now();
  //         var Emite=localStorage.getItem('area');

  //         this.traer.http.post(this.API_URL+`/generarDocumento/${this.numidentificador}/${this.fecha_registrox}/${Emite}`,this.documento).subscribe((res)=>{

  //         let datos1=JSON.stringify(res); 
  //         let datos2=JSON.parse(datos1);


  //         if(res=="Repetido"){

  //           Swal.fire({
  //             icon: 'warning',
  //             title: '¡Documento duplicado!',
  //             text: 'El documento que intenta registrar ya existe'
  //           }); 

  //           }
  //           else{


  //           if(datos2.mensaje=="Registrado"){

  //             if(datos2.incremento<10){
  //               var incremento="0000"+datos2.incremento;
  //             }else if(datos2.incremento<100){
  //               var incremento="000"+datos2.incremento;
  //             }else if(datos2.incremento<1000){
  //               var incremento="00"+datos2.incremento;
  //             }else if(datos2.incremento<10000){
  //               var incremento="0"+datos2.incremento;
  //             }

  //             var fecha=new Date();
  //             var anio=fecha.getFullYear();   


  //           Swal.fire({
  //             icon: 'success',
  //             title: '¡Documento Registrado!',
  //             confirmButtonColor: '#59d65a',
  //             html: 'Número de Folio único: <h2>'+anio+'/'+incremento+'</h2>'
  //           }) 

  //           }else{

  //             console.log(res);
  //             Swal.fire(
  //               'Error Inesperado',
  //               '¡Reportelo al área de DTE!',
  //               'error'
  //             )

  //           }  

  //           this.subirPDF();

  //           }

  //             },(err : HttpErrorResponse)=>{
  //               console.log(err);

  //               });


  //         } else if(this.multipleEnvio.length>=2){  // SE EJECUTA EL GUARDADO A MULTIPLES DEPARTAMENTOS

  //           console.log(this.documento);
  //           this.numidentificador=Date.now();

  //           this.documento.multipleenviox=this.multipleEnvio;


  //           var areaAlmacenaDoc=this.documento.areaQueEmite;
  //           var id_externo=this.documento.areaQueEmite;  //NEW

  //           console.log(areaAlmacenaDoc);

  //           if(areaAlmacenaDoc>=100){
  //             this.documento.areaQueEmite=parseInt(localStorage.getItem('area'));
  //           }else{
  //             this.documento.areaQueEmite=this.documento.areaQueEmite;
  //           }


  //           this.traer.http.post(this.API_URL+`/generarDocumentoMultipleEmision/${this.numidentificador}/${this.fecha_registrox}/${id_externo}`,this.documento).subscribe((res)=>{

  //           let datos1=JSON.stringify(res); 
  //           let datos2=JSON.parse(datos1);

  //           console.log(res);


  //             if(datos2.mensaje=="Registrado"){

  //               if(datos2.incremento<10){
  //                 var incremento="0000"+datos2.incremento;
  //               }else if(datos2.incremento<100){
  //                 var incremento="000"+datos2.incremento;
  //               }else if(datos2.incremento<1000){
  //                 var incremento="00"+datos2.incremento;
  //               }else if(datos2.incremento<10000){
  //                 var incremento="0"+datos2.incremento;
  //               }

  //               var fecha=new Date();
  //               var anio=fecha.getFullYear();   


  //             Swal.fire({
  //               icon: 'success',
  //               title: '¡Documento Registrado!',
  //               confirmButtonColor: '#59d65a',
  //               html: 'Número de Folio único: <h2>'+anio+'/'+incremento+'</h2>'
  //             }) 

  //             }else{

  //               console.log(res);
  //               Swal.fire(
  //                 'Error Inesperado',
  //                 '¡Reportelo al área de DTE!',
  //                 'error'
  //               )

  //             }  

  //             this.subirPDF();

  //               },(err : HttpErrorResponse)=>{
  //                 console.log(err);

  //                 });


  //     }else if(this.multipleEnviodirecciones.length>=2){       //GUARDA A MULTIPLE DIRECCIONES

  //       console.log(this.documento);
  //       this.numidentificador=Date.now();

  //       this.documento.multipleenviodireccionesx=this.multipleEnviodirecciones;

  //       var areaAlmacenaDoc=this.documento.areaQueEmite;
  //       var id_externo=this.documento.areaQueEmite;  //NEW

  //       if(areaAlmacenaDoc>=100){
  //         this.documento.areaQueEmite=parseInt(localStorage.getItem('area'));
  //       }else{
  //         this.documento.areaQueEmite=this.documento.areaQueEmite;
  //       }


  //       this.traer.http.post(this.API_URL+`/generarDocumentoMultiplesDirecciones/${this.numidentificador}/${this.fecha_registrox}/${id_externo}`,this.documento).subscribe((res)=>{

  //       let datos1=JSON.stringify(res); 
  //       let datos2=JSON.parse(datos1);

  //       console.log(res);


  //         if(datos2.mensaje=="Registrado"){

  //           if(datos2.incremento<10){
  //             var incremento="0000"+datos2.incremento;
  //           }else if(datos2.incremento<100){
  //             var incremento="000"+datos2.incremento;
  //           }else if(datos2.incremento<1000){
  //             var incremento="00"+datos2.incremento;
  //           }else if(datos2.incremento<10000){
  //             var incremento="0"+datos2.incremento;
  //           }

  //           var fecha=new Date();
  //           var anio=fecha.getFullYear();   


  //         Swal.fire({
  //           icon: 'success',
  //           title: '¡Documento Registrado!',
  //           confirmButtonColor: '#59d65a',
  //           html: 'Número de Folio único: <h2>'+anio+'/'+incremento+'</h2>'
  //         }) 

  //         }else{

  //           console.log(res);
  //           Swal.fire(
  //             'Error Inesperado',
  //             '¡Reportelo al área de DTE!',
  //             'error'
  //           )

  //         }  

  //         this.subirPDF();

  //           },(err : HttpErrorResponse)=>{
  //             console.log(err);

  //             });




  //     }else if(this.multipleEnviodirecciones.length==1){   // ELIMINA  EL REGISTRO CHEKEADO Y OBLIGA A SOLO ELEGIR UNO EN EL COMBO
  //       console.log("Elija 2 direcciones como minimo o el el campo Area turnada elija unicamente uno");
  //        this.multipleEnviodirecciones=[];
  // }

  //     else if(this.multipleEnvio.length==1){   // ELIMINA  EL REGISTRO CHEKEADO Y OBLIGA A SOLO ELEGIR UNO EN EL COMBO
  //           console.log("Elija 2 departamentos como minimo o el el campo Departamento al que se turna elija unicamente uno");
  //            this.multipleEnvio=[];
  //     }


  //       }


  //   }

  //   subirPDF(){

  //      const formdata = new FormData();

  //     for (var i = 0; i < this.myFiles.length; i++) { 
  //       formdata.append('files', this.myFiles[i]);
  //     }

  //     var areaAlmacenaDoc=this.documento.areaQueEmite;
  //     console.log(areaAlmacenaDoc);

  //     if(areaAlmacenaDoc>=100){
  //       areaAlmacenaDoc=parseInt(localStorage.getItem('area'));
  //     }else{
  //       areaAlmacenaDoc=areaAlmacenaDoc;
  //     }


  //     if(areaAlmacenaDoc==99){
  //       var areaDocumento="Direccion";
  //   }else if(areaAlmacenaDoc==98){
  //       var areaDocumento="Academica";
  //   }else if(areaAlmacenaDoc==97){
  //       var areaDocumento="Administrativa";
  //   }else if(areaAlmacenaDoc==96){
  //       var areaDocumento="Vinculacion";
  //   }else if(areaAlmacenaDoc==95){
  //       var areaDocumento="Planeacion";
  //   }else if(areaAlmacenaDoc==94){
  //       var areaDocumento="Tecnologia";
  //   }else if(areaAlmacenaDoc==93){
  //     var areaDocumento="Juridico";
  //   }else if(areaAlmacenaDoc==92){
  //     var areaDocumento="Transparencia";
  //   }else if(areaAlmacenaDoc==91){
  //     var areaDocumento="UnidadGenero";
  //   }else if(areaAlmacenaDoc==90){
  //     var areaDocumento="Oficialia";
  //   }


  //   console.log(formdata);

  //   this.traer.http.post(this.API_URL+`/agregarArchivo/${this.numidentificador}/${areaDocumento}`,formdata).subscribe((res) => {

  //         console.log(res);

  //      },(err : HttpErrorResponse)=>{
  //        console.log(err);
  //     });


  //   }

  //   upload(event:any) {

  //     if(event.target.files.length > 0){

  //       this.myFiles=event.target.files; 
  //       console.log(this.myFiles);
  //       var extension=this.myFiles[0].name;
  //       var extensionFinal=extension.substr(-4);

  //       if(extensionFinal != ".pdf"){

  //         Swal.fire(
  //           'Error en el documento',
  //           'El archivo seleccionado debe ser PDF',
  //           'error'
  //         )

  //         this.mostrarBoton=false;

  //       }else{

  //         this.mostrarBoton=true;

  //       }    

  //     }else{
  //       console.log("NO");

  //       this.mostrarBoton=false;
  //     }

  //     }

  //     fechaLimite(){

  //       // (document.getElementById('fechalimiteR') as HTMLInputElement).value=fecha.toJSON().slice(0,10);

  //       var fechaActual = new Date().toISOString().split('T')[0];
  //      (document.getElementById('fechalimiteR') as HTMLInputElement).value= fechaActual

  //     }

  //     CapturaCheck(dato:any){

  //         if(this.result.includes(dato)){

  //           this.result=this.multipleEnvio.filter(i => i != dato);
  //           this.multipleEnvio=this.result;

  //           console.log(this.multipleEnvio);

  //         }else{

  //           this.multipleEnvio.push(dato);
  //           this.result=this.multipleEnvio;
  //           console.log(this.multipleEnvio);       }
  //     }


  //     CapturaCheckdireccionesmultiple(dato:any){

  //       if(this.result.includes(dato)){

  //         this.result=this.multipleEnviodirecciones.filter(i => i != dato);
  //         this.multipleEnviodirecciones=this.result;

  //         console.log(this.multipleEnviodirecciones);

  //       }else{

  //         this.multipleEnviodirecciones.push(dato);
  //         this.result=this.multipleEnviodirecciones;
  //         console.log(this.multipleEnviodirecciones);       }
  //   }



  //     getDeptosMultipleEnvio(){

  //       this.traer.http.get(this.API_URL+`/getDepartamentosParaMultipleEnvio/${this.direccionSeleccionada}`).subscribe((res) => {

  //         this.deptosmultipleEnvio=res;

  //         console.log(this.deptosmultipleEnvio);

  //      },(err : HttpErrorResponse)=>{
  //        console.log(err);
  //     });
  //     }

  //     getDireccionesMultipleEnvio(){
  //       this.traer.http.get(this.API_URL+`/getDireccionesParaMultipleEnvio`).subscribe((res) => {

  //         this.direccmultipleEnvio=res;
  //         console.log(this.direccmultipleEnvio);

  //      },(err : HttpErrorResponse)=>{
  //        console.log(err);
  //     });
  //     }





}
