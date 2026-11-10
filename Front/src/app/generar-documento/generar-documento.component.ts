import { Component, OnInit } from '@angular/core';
import { claveOperacion } from '../services/clave-operacion';
import { CurrencyPipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { TraerDatosService } from '../services/traer-datos.service';
import { UnidadMedidaServices } from '../services/unidad_medida.service';

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
  error: string = '';
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
        if (Array.isArray(res)) {
          this.unidadesMedida = res;
        } else if (res && typeof res === 'object') {
          const keyArray = Object.keys(res).find(k => Array.isArray(res[k]));
          this.unidadesMedida = keyArray ? res[keyArray] : [];
        } else {
          this.unidadesMedida = [];
        }
      },
      error: (err) => {
        console.error('Error al obtener unidades de medida:', err);
      }
    });
  }

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

      // 1. Obtener nombre del usuario activo desde localStorage
      const nombreUsuario = localStorage.getItem('nombre') || localStorage.getItem('usuario') || 'Sistema';
      const usuarioCorreo = localStorage.getItem('usuario') || '';

      // 2. Mapear el ID de PostgreSQL según el usuario autenticado (evita conflicto con numemp 2571)
      let idUsuario = 67; // ID por defecto en PostgreSQL (ej. Marisela)
      
      if (nombreUsuario.includes('Ángel David') || usuarioCorreo === 'angel@cecytev') {
        idUsuario = 114; // ID real de Ángel en la tabla usuarios de PostgreSQL
      }

      this.envioPendiente = { 
        ...this.stock, 
        clave_operacion: this.clave,
        usuario_nombre: nombreUsuario,
        id_usuario: idUsuario
      };
    }
    
    this.guardando = true;
    this.traer.http.post<any>(this.API_URL + '/registrarStock', this.envioPendiente,
      { headers: { Authorization: localStorage.getItem('token') || '' } }).subscribe({
        next: res => {
          this.guardando = false;
          const numCompra = res?.id_compra ?? res?.id ?? res?.folio_compra ?? this.stock.folio ?? '';
          this.envioPendiente = null;
          this.clave = claveOperacion();
          this.stock.cantidad = null;
          this.stock.cantidad_recibida = 0;
          this.stock.producto = null;
          this.productoBuscado = '';
          this.stock.total = null;
          this.stock.subTotal = null;
          this.monedaFormateada = '$ 0.00'; this.monedaFormateada2 = '$ 0.00';
          Swal.fire('Compra registrada', `Compra #${numCompra}. Solo lo recibido se sumó a existencias. Puede agregar otro artículo con el mismo folio o consultar sus entregas en Recargar Stock.`, 'success');
        },
        error: err => {
          this.guardando = false;
          if (err.status >= 400 && err.status < 500) this.envioPendiente = null;
          this.error = err.error?.error || 'No se pudo registrar la compra.';
          Swal.fire('No se confirmó el guardado', this.error, 'error');
        }
      });
  }

  opcionSeleccionadaX() {
    this.traer.http.get(this.API_URL + `/traerProductos/${this.stock.partida}`)
      .subscribe((res: any) => {
        this.productos = res;
        this.productosFiltrados = res;
      });
  }

  traerProveedores() {
    this.traer.http.get(this.API_URL + `/traerProveedores`)
      .subscribe((res: any) => {
        this.proveedores = res;
      });
  }

  CapturarValor() {
    var idproveedor = this.direccionSeleccionada;
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
  }
}
