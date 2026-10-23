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
  cargandoProveedores: boolean = false;

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
    this.costo_unitario = 0;
    this.monedaFormateada = '$ 0.00';
    this.monedaFormateada2 = '$ 0.00';

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
    this.costo_unitario = 0;
    this.monedaFormateada = '$ 0.00';
    this.monedaFormateada2 = '$ 0.00';

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
    const idRealNum = Number(prod.id || prod.idproducto);
    (this.Recargastock as any).producto = idRealNum.toString();

    this.terminoBusqueda = prod.clave ? `${prod.clave} - ${prod.descripcion}` : prod.descripcion;
    this.mostrarDropdown = false;
    this.direccionSeleccionada = null;
    this.articuloValido = false;
    this.proveedores = [];
    this.costo_unitario = 0;
    this.monedaFormateada = '$ 0.00';
    this.monedaFormateada2 = '$ 0.00';

    if (idRealNum) {
      this.cargarProveedoresPorProducto(idRealNum);
    }
  }

  buscarYSeleccionar(): void {
    if (this.Recargastock.producto && !this.mostrarDropdown) {
      return;
    }

    const texto = (this.terminoBusqueda || '').toLowerCase().trim();
    if (!texto) return;

    const match = this.productos.find(p =>
      (p.descripcion && p.descripcion.toLowerCase() === texto) ||
      (p.clave && p.clave.toLowerCase() === texto) ||
      (`${p.clave} - ${p.descripcion}`.toLowerCase() === texto)
    );

    if (match) {
      const idRealNum = Number(match.id || match.idproducto);
      (this.Recargastock as any).producto = idRealNum.toString();
      this.mostrarDropdown = false;
      this.direccionSeleccionada = null;
      this.articuloValido = false;
      this.proveedores = [];
      this.cargarProveedoresPorProducto(idRealNum);
    }
  }

  cargarProveedoresPorProducto(idArticulo: number): void {
    if (this.cargandoProveedores) return;
    this.cargandoProveedores = true;

    this.proveedores = [];
    this.direccionSeleccionada = null;
    this.articuloValido = false;
    this.costo_unitario = 0;
    this.monedaFormateada = '$ 0.00';
    this.monedaFormateada2 = '$ 0.00';

    this.proveedoresService.traerProveedoresPorArticulo(idArticulo)
      .subscribe({
        next: (res: any) => {
          this.cargandoProveedores = false;

          let lista: proveedores[] = [];
          if (Array.isArray(res)) {
            lista = res;
          } else if (res && Array.isArray(res.rows)) {
            lista = res.rows;
          } else if (res && Array.isArray(res.data)) {
            lista = res.data;
          }

          if (lista.length === 1) {
            this.proveedores = lista;
            this.direccionSeleccionada = Number(this.proveedores[0].id);
            this.CapturarValor();
          } else if (lista.length > 1) {
            this.proveedores = lista;
            Swal.fire({
              title: 'Múltiples proveedores',
              text: 'Seleccione el proveedor correspondiente para este producto.',
              icon: 'info',
              timer: 1800,
              showConfirmButton: false
            });
          } else {
            this.proveedores = [];
            this.direccionSeleccionada = null;
            this.articuloValido = false;
            this.ofrecerVincularProveedor(idArticulo);
          }
        },
        error: (err: any) => {
          this.cargandoProveedores = false;
          this.proveedores = [];
          this.direccionSeleccionada = null;
          console.error('Error al cargar proveedores del producto:', err);
        }
      });
  }

  // 1. Caso cuando el artículo NO tiene proveedor vinculado
ofrecerVincularProveedor(idArticulo: number): void {
  let opcionesHtml = '<option value="" disabled selected>-- Selecciona un proveedor --</option>';
  this.catalogoProveedores.forEach((prov: any) => {
    opcionesHtml += `<option value="${prov.id}">${prov.nombre || prov.razon_social || 'Proveedor #' + prov.id}</option>`;
  });

  Swal.fire({
    title: 'Asignar Proveedor y Costo',
    html: `
      <p class="text-muted" style="font-size: 14px; margin-bottom: 12px;">
        Este artículo no cuenta con un proveedor ni costo asignado. Ingrésalos a continuación:
      </p>
      <div style="text-align: left;">
        <label style="font-weight: 600; font-size: 13px;">Proveedor:</label>
        <select id="swal-proveedor" class="swal2-select" style="width: 100%; margin: 5px 0 15px 0; display: flex;">
          ${opcionesHtml}
        </select>

        <label style="font-weight: 600; font-size: 13px;">Costo Unitario ($):</label>
        <input id="swal-costo" type="number" step="0.01" min="0.01" class="swal2-input" placeholder="Ej. 125.50" style="width: 100%; margin: 5px 0 0 0;">
      </div>
    `,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Guardar y Asignar',
    cancelButtonText: 'Cancelar',
    focusConfirm: false,
    preConfirm: () => {
      const provSelect = document.getElementById('swal-proveedor') as HTMLSelectElement;
      const costoInput = document.getElementById('swal-costo') as HTMLInputElement;

      const provId = provSelect ? provSelect.value : '';
      const costo = costoInput ? parseFloat(costoInput.value) : 0;

      if (!provId) {
        Swal.showValidationMessage('Debes seleccionar un proveedor');
        return false;
      }
      if (!costo || costo <= 0) {
        Swal.showValidationMessage('Ingresa un costo unitario válido mayor a $0.00');
        return false;
      }

      return { idProveedor: Number(provId), costo: costo };
    }
  }).then((result) => {
    if (result.isConfirmed && result.value) {
      this.guardarVinculacionConCosto(idArticulo, result.value.idProveedor, result.value.costo);
    } else {
      this.limpiarSeleccion();
    }
  });
}

// Guarda la vinculación inicial de proveedor + costo
guardarVinculacionConCosto(idArticulo: number, idProveedor: number, costo: number): void {
  const payload = {
    articulo_id: idArticulo,
    proveedor_id: idProveedor,
    costo: costo
  };

  this.traer.http.post<any>(`${this.API_URL}/articulos/relacionarProveedor`, payload)
    .subscribe({
      next: () => {
        Swal.fire('¡Asignado!', 'Proveedor y costo vinculados correctamente', 'success');
        
        // Asignamos directamente en el formulario
        this.direccionSeleccionada = idProveedor;
        this.costo_unitario = costo;
        (this.Recargastock as any).costo = costo;
        this.monedaFormateada = this.currencyPipe.transform(this.costo_unitario, 'USD', '$');
        this.articuloValido = true;

        if (this.Recargastock.cantidad) {
          this.CalcularImporteyTotal();
        }

        // Recargamos el select de proveedores para este producto
        this.cargarProveedoresPorProducto(idArticulo);
      },
      error: (err: any) => {
        console.error('Error al vincular:', err);
        Swal.fire('Error', 'No se pudo guardar la vinculación', 'error');
      }
    });
}

// 2. Caso cuando el artículo YA tiene proveedor pero su costo está en 0
CapturarValor(): void {
  const idproveedor = this.direccionSeleccionada;
  const idArticulo = this.Recargastock.producto;

  if (!idproveedor || !idArticulo) return;

  this.traer.http.get<any>(`${this.API_URL}/traerCostoArticulo/${idArticulo}/${idproveedor}`)
    .subscribe({
      next: (res: any) => {
        let precioFinal = 0;
        if (typeof res === 'object' && res !== null) {
          precioFinal = parseFloat(res.precio_unitario ?? res.costo ?? res.precio ?? 0);
        } else {
          precioFinal = parseFloat(res) || 0;
        }

        // Si el costo viene en 0 o no tiene costo registrado:
        if (precioFinal <= 0) {
          Swal.fire({
            title: 'Asignar Costo Unitario',
            text: 'Este artículo tiene proveedor asignado, pero su costo actual es $0.00. Ingresa el costo unitario para continuar:',
            input: 'number',
            inputAttributes: {
              step: '0.01',
              min: '0.01',
              placeholder: 'Ej. 50.00'
            },
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Establecer Costo',
            cancelButtonText: 'Cancelar',
            inputValidator: (value) => {
              const num = parseFloat(value);
              if (!value || isNaN(num) || num <= 0) {
                return 'Debes ingresar un valor mayor a 0';
              }
              return null;
            }
          }).then((costoResult) => {
            if (costoResult.isConfirmed && costoResult.value) {
              const costoCapturado = parseFloat(costoResult.value);

              // 1. Reflejamos en el formulario para que calcule subtotal y total de inmediato
              this.costo_unitario = costoCapturado;
              (this.Recargastock as any).costo = costoCapturado;
              this.monedaFormateada = this.currencyPipe.transform(this.costo_unitario, 'USD', '$');
              this.articuloValido = true;

              if (this.Recargastock.cantidad) {
                this.CalcularImporteyTotal();
              }

              // 2. Guardamos en el backend para que el costo quede persistido en la BD
              this.guardarVinculacionConCosto(Number(idArticulo), Number(idproveedor), costoCapturado);
            } else {
              this.limpiarSeleccion();
            }
          });
          return;
        }

        // Si ya tenía un costo válido mayor a 0
        this.costo_unitario = precioFinal;
        (this.Recargastock as any).costo = precioFinal;
        this.articuloValido = true;
        this.monedaFormateada = this.currencyPipe.transform(this.costo_unitario, 'USD', '$');

        if (this.Recargastock.cantidad) {
          this.CalcularImporteyTotal();
        }
      },
      error: (err: any) => console.error('Error al traer costo unitario:', err)
    });
}

limpiarSeleccion(): void {
  this.direccionSeleccionada = null;
  this.articuloValido = false;
  this.costo_unitario = 0;
  this.monedaFormateada = '$ 0.00';
  this.monedaFormateada2 = '$ 0.00';
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
            // Limpia comillas dobles y espacios si el backend respondió con res.json()
            const respuestaLimpia = (res || '').replace(/['"]/g, '').trim();

            if (respuestaLimpia === 'Save' || respuestaLimpia === 'reload') {
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
            } else if (respuestaLimpia === 'SinRegistro') {
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