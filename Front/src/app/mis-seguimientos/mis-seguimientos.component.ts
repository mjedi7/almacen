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
  styleUrls: ['./mis-seguimientos.component.css'],
  providers: [CurrencyPipe]
})
export class MisSeguimientosComponent implements OnInit {

  API_URL = environment.uri_api;

  myFiles!: Array<any>;
  numidentificador: any;

  stocks: any[] = [];
  partidas: any[] = [];
  productos: any[] = [];
  proveedores: proveedores[] = [];
  catalogoProveedores: any[] = [];
  datosproveedor: any[] = [];

  mostrarBoton: boolean = false;
  fecha_registrox: string = '';

  costo_unitario: number = 0;
  articuloValido: boolean = false;

  terminoBusqueda: string = '';
  productosFiltrados: any[] = [];
  mostrarDropdown: boolean = false;

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

  day: string = '';
  month: string = '';
  year: string = '';
  direccionSeleccionada: number | null = null;

  monedaFormateada: string | null = '$ 0.00';
  monedaFormateada2: string | null = '$ 0.00';

  constructor(
    public traer: TraerDatosService,
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
    this.year = anio.toString();

    this.fecha_registrox = `${this.day}-${this.month}-${this.year}`;

    this.traerPartidas();
    this.traerProveedoresCatalogo();
  }

  traerProveedoresCatalogo(): void {
    this.traer.http.get<any[]>(`${this.API_URL}/traerProveedores`).subscribe({
      next: (res: any[]) => {
        this.catalogoProveedores = res || [];
      },
      error: (err: any) => console.error('Error al traer proveedores:', err)
    });
  }

  opcionSeleccionadaX(): void {
    this.articuloValido = false;
    this.terminoBusqueda = '';
    this.Recargastock.producto = null;
    this.productos = [];
    this.productosFiltrados = [];
    this.direccionSeleccionada = null;
    this.proveedores = [];
    this.mostrarDropdown = false;

    if (!this.Recargastock.partida) return;

    this.traer.http.get<any[]>(`${this.API_URL}/articulos/traerProductos/${this.Recargastock.partida}`)
      .subscribe({
        next: (res: any[]) => {
          this.productos = res || [];
          this.productosFiltrados = [...this.productos];
        },
        error: (err: any) => console.error('Error al traer productos por partida:', err)
      });
  }

  abrirDropdown(): void {
    if (this.Recargastock.partida) {
      this.mostrarDropdown = true;
      if (!this.terminoBusqueda) {
        this.productosFiltrados = [...this.productos];
      }
    }
  }

  alternarDropdown(): void {
    if (!this.Recargastock.partida) return;
    this.mostrarDropdown = !this.mostrarDropdown;
    if (this.mostrarDropdown && !this.terminoBusqueda) {
      this.productosFiltrados = [...this.productos];
    }
  }

  filtrarProductos(): void {
    this.mostrarDropdown = true;
    this.Recargastock.producto = null;
    this.articuloValido = false;
    this.proveedores = [];
    this.direccionSeleccionada = null;

    const busqueda = (this.terminoBusqueda || '').toLowerCase().trim();
    if (!busqueda) {
      this.productosFiltrados = [...this.productos];
      return;
    }

    this.productosFiltrados = this.productos.filter(p =>
      (p.descripcion && p.descripcion.toLowerCase().includes(busqueda)) ||
      (p.clave && p.clave.toLowerCase().includes(busqueda)) ||
      (p.idproducto && p.idproducto.toString().includes(busqueda)) ||
      (p.id && p.id.toString().includes(busqueda))
    );
  }

  seleccionarProducto(prod: any): void {
    const idReal = prod.id || prod.idproducto;
    this.Recargastock.producto = idReal;
    this.terminoBusqueda = prod.clave ? `${prod.clave} - ${prod.descripcion}` : prod.descripcion;
    this.mostrarDropdown = false;

    this.direccionSeleccionada = null;
    this.articuloValido = false;
    this.cargarProveedoresPorProducto(Number(idReal));
  }

  buscarYSeleccionar(): void {
    const match = this.productos.find(p => p.descripcion === this.terminoBusqueda);

    if (match) {
      const idReal = match.id || match.idproducto;
      this.Recargastock.producto = idReal;
      this.direccionSeleccionada = null;
      this.articuloValido = false;
      this.cargarProveedoresPorProducto(Number(idReal));
    } else {
      this.Recargastock.producto = null;
      this.proveedores = [];
      this.direccionSeleccionada = null;
    }
  }

  cargarProveedoresPorProducto(idArticulo: number): void {
    this.proveedoresService.traerProveedoresPorArticulo(idArticulo)
      .subscribe({
        next: (res: proveedores[]) => {
          this.proveedores = res || [];

          if (this.proveedores.length === 1) {
            this.direccionSeleccionada = Number(this.proveedores[0].id);
            this.CapturarValor();
          } else if (this.proveedores.length > 1) {
            Swal.fire({
              title: 'Múltiples proveedores',
              text: 'Seleccione el proveedor correspondiente para este producto.',
              icon: 'info',
              timer: 1800,
              showConfirmButton: false
            });
          } else {
            this.ofrecerVincularProveedor(idArticulo);
          }
        },
        error: (err: any) => console.error('Error al cargar proveedores del producto:', err)
      });
  }

  ofrecerVincularProveedor(idArticulo: number): void {
    const opciones: Record<string, string> = {};
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
        const idProveedorSeleccionado = Number(result.value);
        this.relacionarArticuloProveedor(idArticulo, idProveedorSeleccionado);
      } else {
        this.direccionSeleccionada = null;
        this.articuloValido = false;
      }
    });
  }

  relacionarArticuloProveedor(idArticulo: number, idProveedor: number): void {
    const payload = {
      articulo_id: idArticulo,
      proveedor_id: idProveedor
    };

    this.traer.http.post(`${this.API_URL}/articulos/relacionarProveedor`, payload)
      .subscribe({
        next: () => {
          Swal.fire('¡Relacionado!', 'El artículo fue vinculado al proveedor con éxito', 'success');
          this.direccionSeleccionada = idProveedor;
          this.cargarProveedoresPorProducto(idArticulo);
        },
        error: (err: any) => {
          console.error('Error al vincular proveedor:', err);
          Swal.fire('Error', 'No se pudo relacionar el artículo con el proveedor', 'error');
        }
      });
  }

  CapturarValor(): void {
    const idproveedor = this.direccionSeleccionada;
    const idArticulo = this.Recargastock.producto;

    if (!idproveedor || !idArticulo) return;

    this.traer.http.get(`${this.API_URL}/traerCostoArticulo/${idproveedor}/${idArticulo}`, { responseType: 'text' })
      .subscribe({
        next: (res: string) => {
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
            this.costo_unitario = Number(res) || 0;
            this.articuloValido = true;
            if (this.Recargastock.cantidad) {
              this.CalcularImporteyTotal();
            }
          }
        },
        error: (err: any) => console.error('Error al traer costo unitario:', err)
      });
  }

  CalcularImporteyTotal(): void {
    const cant = Number(this.Recargastock.cantidad) || 0;
    const cantidadSegura = cant <= 0 ? 1 : cant;
    this.Recargastock.cantidad = cantidadSegura;

    const importeCalculado = this.costo_unitario * cantidadSegura;
    this.Recargastock.importe = importeCalculado;
    this.monedaFormateada = this.currencyPipe.transform(importeCalculado, 'USD', '$');

    const totalCalculado = importeCalculado + (importeCalculado * 0.16);
    this.Recargastock.totalCompra = totalCalculado;
    this.monedaFormateada2 = this.currencyPipe.transform(totalCalculado, 'USD', '$');
  }

  RecargarStock(form: NgForm): void {
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
          this.Recargastock,
          { responseType: 'text' }
        ).subscribe({
          next: (res: string) => {
            if (res === 'Save' || res === 'reload') {
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
            } else if (res === 'SinRegistro') {
              Swal.fire('Atención', 'El artículo no cuenta con un costo o registro asignado con este proveedor en el almacén.', 'warning');
            } else {
              Swal.fire('Error', 'Contacte a soporte', 'error');
            }
          },
          error: (err: any) => {
            console.error('Error al recargar stock:', err);
            Swal.fire('Error', 'Ocurrió un problema en el servidor al procesar la compra', 'error');
          }
        });
      }
    });
  }

  traerPartidas(): void {
    this.traer.http.get<any[]>(`${this.API_URL}/traerPartidas`)
      .subscribe({
        next: (res: any[]) => this.partidas = res || [],
        error: (err: any) => console.error('Error al traer partidas:', err)
      });
  }
}