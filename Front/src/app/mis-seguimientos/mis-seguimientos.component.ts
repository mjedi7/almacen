import { Component, OnInit } from '@angular/core';
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

  myFiles!: Array<any>;
  numidentificador: any;

  stocks: any = [];
  partidas: any = [];
  productos: any = [];
  proveedores: any = [];
  catalogoProveedores: any = []; // Lista completa para cuando toque dar de alta relación
  datosproveedor: any = [];

  tipo: string;
  opcionSeleccionada: string = '';
  verSeleccion: string;
  mostrarBoton: boolean = false;
  fecha_registrox: any = '';

  costo_unitario: number = 0;
  articuloValido: boolean = false;

  terminoBusqueda: string = '';
  productosFiltrados: any[] = [];

  Recargastock: recargaAlmacen = {
    partida: null,
    producto: null,
    proveedor: '',
    folio: '',
    cantidad: null,
    fechaAd: null,
    importe: null,
    totalCompra: null
  };

  day: string;
  month: string;
  year: string;
  direccionSeleccionada: number;

  monedaFormateada: any = '$ 0.00';
  monedaFormateada2: any = '$ 0.00';

  constructor(
    private traer: TraerDatosService,
    private currencyPipe: CurrencyPipe,
    private proveedoresService: ProveedoresService
  ) { }

  ngOnInit(): void {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    this.day = dia < 10 ? '0' + dia : dia.toString();
    this.month = mes < 10 ? '0' + mes : mes.toString();

    this.fecha_registrox = `${this.day}-${this.month}-${anio}`;

    this.traerPartidas();
    this.traerProveedoresCatalogo(); // Cargamos todos los proveedores para tenerlos listos
  }

  // Traer catálogo general de proveedores
  traerProveedoresCatalogo() {
    this.traer.http.get(`${this.API_URL}/traerProveedores`).subscribe({
      next: (res: any) => {
        this.catalogoProveedores = res || [];
      },
      error: (err) => console.error('Error al traer proveedores:', err)
    });
  }

  opcionSeleccionadaX() {
    this.articuloValido = false;
    this.terminoBusqueda = '';
    this.Recargastock.producto = null;
    this.productos = [];
    this.productosFiltrados = [];
    this.direccionSeleccionada = null;
    this.proveedores = [];

    if (!this.Recargastock.partida) return;

    this.traer.http.get(`${this.API_URL}/articulos/traerProductos/${this.Recargastock.partida}`)
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

  buscarYSeleccionar() {
    const match = this.productos.find(p => p.descripcion === this.terminoBusqueda);

    if (match) {
      this.Recargastock.producto = match.id;
      this.direccionSeleccionada = null;
      this.articuloValido = false;

      this.cargarProveedoresPorProducto(+this.Recargastock.producto);
    } else {
      this.Recargastock.producto = null;
      this.proveedores = [];
      this.direccionSeleccionada = null;
    }
  }

  cargarProveedoresPorProducto(idArticulo: number) {
    this.proveedoresService.traerProveedoresPorArticulo(idArticulo)
      .subscribe({
        next: (res: proveedores[]) => {
          this.proveedores = res || [];

          if (this.proveedores.length === 1) {
            // 💡 1 PROVEEDOR: Se autoselecciona y valida
            this.direccionSeleccionada = this.proveedores[0].id;
            this.CapturarValor();
          } else if (this.proveedores.length > 1) {
            // 💡 MÁS DE 1 PROVEEDOR: El usuario escoge
            Swal.fire({
              title: 'Múltiples proveedores',
              text: 'Seleccione el proveedor correspondiente para este producto.',
              icon: 'info',
              timer: 1800,
              showConfirmButton: false
            });
          } else {
            // SIN PROVEEDOR ASIGNADO: Ofrecer vincularlo en caliente
            this.ofrecerVincularProveedor(idArticulo);
          }
        },
        error: (err) => console.error('Error al cargar proveedores del producto:', err)
      });
  }

  // ==========================================================
  // VINCULACIÓN EN CALIENTE CON SWEETALERT2
  // ==========================================================
  ofrecerVincularProveedor(idArticulo: number) {
    // Armamos las opciones del select dinámicamente con el catálogo
    const opciones: any = {};
    this.catalogoProveedores.forEach((prov: any) => {
      opciones[prov.id] = prov.nombre || prov.razon_social || `Proveedor #${prov.id}`;
    });

    Swal.fire({
      title: 'Artículo sin proveedor en almacén',
      text: 'Este producto no está relacionado con ningún proveedor. ¿Deseas relacionarlo ahora?',
      icon: 'warning',
      input: 'select',
      inputOptions: opciones,
      inputPlaceholder: '-- Selecciona un proveedor --',
      showCancelButton: true,
      confirmButtonText: 'Relacionar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Debes seleccionar un proveedor para continuar';
        }
        return null;
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const idProveedorSeleccionado = +result.value;
        this.relacionarArticuloProveedor(idArticulo, idProveedorSeleccionado);
      } else {
        this.direccionSeleccionada = null;
        this.articuloValido = false;
      }
    });
  }

  relacionarArticuloProveedor(idArticulo: number, idProveedor: number) {
    // Payload según lo que reciba tu endpoint de vinculación
    const payload = {
      articulo_id: idArticulo,
      proveedor_id: idProveedor
    };

    // Usas tu endpoint de vinculación (ej. /relacionarArticuloProveedor o en proveedoresService)
    this.traer.http.post(`${this.API_URL}/articulos/relacionarProveedor`, payload)
      .subscribe({
        next: (resp: any) => {
          Swal.fire('¡Relacionado!', 'El artículo fue vinculado al proveedor con éxito', 'success');

          // Volvemos a recargar los proveedores del producto para que se autoseleccione
          this.cargarProveedoresPorProducto(idArticulo);
        },
        error: (err) => {
          console.error('Error al vincular proveedor:', err);
          Swal.fire('Error', 'No se pudo relacionar el artículo con el proveedor', 'error');
        }
      });

      this.direccionSeleccionada = idProveedor;
      this.proveedoresService.traerProveedoresPorArticulo(idArticulo).subscribe({

        next: (res: any) =>{
          this.proveedores = res || [];

          this.CapturarValor();
        },

        error: (err) => {
          console.error('Error al vincular proveedor:', err);
          Swal.fire('Error', 'No se pudo relacionar el artículo con el proveedor', 'error');
        }
        
      });
  }

  CapturarValor() {
    const idproveedor = this.direccionSeleccionada;
    const idArticulo = this.Recargastock.producto;

    if (!idproveedor || !idArticulo) return;

    this.traer.http.get(`${this.API_URL}/traerCostoArticulo/${idproveedor}/${this.Recargastock.producto}`)
      .subscribe({
        next: (res: any) => {
          if (res === 'ArticuloNoEncontrado') {
            Swal.fire({
              title: 'No encontrado',
              text: 'El artículo con el proveedor seleccionado no se encuentra en el almacén',
              icon: 'warning'
            });

            this.costo_unitario = 0.00;
            this.articuloValido = false;
            this.Recargastock.importe = 0;
            this.Recargastock.totalCompra = 0;
            this.monedaFormateada = '$ 0.00';
            this.monedaFormateada2 = '$ 0.00';
            this.Recargastock.folio = '';
            this.Recargastock.cantidad = 0;
          } else {
            this.costo_unitario = +res;
            this.articuloValido = true;
            if (this.Recargastock.cantidad) {
              this.CalcularImporteyTotal();
            }
          }
        },
        error: (err) => console.error('Error al traer costo unitario:', err)
      });
  }

  CalcularImporteyTotal() {
    if (this.Recargastock.cantidad <= 0) {
      this.Recargastock.cantidad = 1;
    }

    this.Recargastock.importe = (this.costo_unitario * this.Recargastock.cantidad);
    this.monedaFormateada = this.currencyPipe.transform(this.Recargastock.importe, 'USD', '$');

    this.Recargastock.totalCompra = (this.Recargastock.importe + (this.Recargastock.importe * 0.16));
    this.monedaFormateada2 = this.currencyPipe.transform(this.Recargastock.totalCompra, 'USD', '$');
  }

  RecargarStock(form: NgForm) {
    this.Recargastock.proveedor = this.direccionSeleccionada ? this.direccionSeleccionada.toString() : '';

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
      if (result.isConfirmed) {
        this.traer.http.post(
          `${this.API_URL}/recargarStock/${this.Recargastock.producto}/${this.Recargastock.proveedor}`,
          this.Recargastock
        ).subscribe({
          next: (res: any) => {
            if (res === 'reload') {
              Swal.fire('¡Guardado!', '¡Los datos fueron agregados al stock!', 'success');

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

  traerPartidas() {
    this.traer.http.get(`${this.API_URL}/traerPartidas`)
      .subscribe({
        next: (res: any) => this.partidas = res,
        error: (err) => console.error('Error al traer partidas:', err)
      });
  }
}