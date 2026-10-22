import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartType } from 'chart.js';
import { Subject } from 'rxjs';
import { TraerDatosService } from '../services/traer-datos.service';
import { environment } from 'src/environments/environment';
import { Transferencias } from '../models/nuevoDocumento';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-estadistico-general',
  templateUrl: './estadistico-general.component.html',
  styleUrls: ['./estadistico-general.component.css']
})
export class EstadisticoGeneralComponent implements OnInit {

  transferencia: Transferencias = {
    plantel: null,
    partida: null,
    idcosto: null,
    fecha: null,
    cantidadEnStock: null,
    cantidadTransferir: null,
    consecutivo: null,
    autorizo: localStorage.getItem('nombre'),
    recibio: '',
    nombreProducto: ''
  };

  productosFiltrados: any[] = [];
  productoBuscado: string = '';
  dtOptions: any = {};
  dtTrigger = new Subject<any>();

  API_URL = environment.uri_api;

  articulosTransferir: any = [];
  totales: any;
  planteles: any = [];
  partidas: any = [];
  productos: any = [];
  datosAdmin: any = [];

  direccionSeleccionada: string = '';
  asig: any[] = [];
  numlista: number = 0;
  sumagenerados: number = 0;
  mostrarBotonTransferir: boolean = false;

  constructor(private traer: TraerDatosService) { }

  public chart: Chart;

  ngOnInit(): void {
    this.traerPartidas();
    this.traerPlanteles();
    this.TraerConsecutivo();
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

  getListaArticulosTransferir() {
    if ($.fn.DataTable.isDataTable('#articulos')) {
      $('#articulos').DataTable().clear();
      $('#articulos').DataTable().destroy();
    }

    try {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        searching: false,
        processing: true,
        destroy: true,
        language: {
          url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
        },
      };

      const folio = this.transferencia.consecutivo;

      this.traer.http.get(`${this.API_URL}/getListaArticulosTransferir/${folio}`)
        .subscribe({
          next: (res: any) => {
            this.articulosTransferir = res || [];
            this.dtTrigger.next(null);
            this.mostrarBotonTransferir = this.articulosTransferir.length > 0;
          },
          error: (err) => {
            console.error('Error al cargar artículos a transferir:', err);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  eliminarArticulo(idarticulo: number) {
    this.traer.http.delete(`${this.API_URL}/eliminarArticulo/${idarticulo}`)
      .subscribe(() => {
        this.getListaArticulosTransferir();
      });
  }

  confirmarTranferencia() {
    Swal.fire({
      title: '¿Estás seguro de terminar la lista?',
      text: 'Una vez terminada no podrá agregar nuevos artículos',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, terminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.traer.http.get(`${this.API_URL}/confirmarTransferencia/${this.transferencia.consecutivo}`)
          .subscribe((res: any) => {
            if (res === 'ListaOk') {
              Swal.fire({
                title: 'Generando formatos...',
                text: 'Los artículos se asignaron. Se están preparando los documentos.',
                icon: 'info',
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading(null);
                }
              });

              this.generarFormatoListaSurtido();
            }
          });
      }
    });
  }

  generarFormatoListaSurtido() {
    // Genera el primer PDF en el servidor
    const url = `${this.API_URL}/reporte/surtido/${this.transferencia.consecutivo}/${this.transferencia.plantel}`;

    this.traer.http.get(url, { responseType: 'text' }).subscribe({
      next: (res) => {
        console.log('PDF con montos generado:', res);
        this.generarFormatoListaSurtidoSinMontos();
      },
      error: (err) => {
        console.error('Error al generar el PDF con montos', err);
        Swal.fire('Error', 'Hubo un error al generar el PDF con montos', 'error');
      }
    });
  }

  generarFormatoListaSurtidoSinMontos() {
    // Genera el segundo PDF en el servidor
    const url = `${this.API_URL}/reporte/surtido-sin-montos/${this.transferencia.consecutivo}/${this.transferencia.plantel}`;

    this.traer.http.get(url, { responseType: 'text' }).subscribe({
      next: (res) => {
        console.log('PDF sin montos generado:', res);
        this.descargarZip();
      },
      error: (err) => {
        console.error('Error al generar el PDF sin montos', err);
        Swal.fire('Error', 'Hubo un error al generar el PDF sin montos', 'error');
      }
    });
  }

  traerPartidas() {
    this.traer.http.get(`${this.API_URL}/traerPartidas`)
      .subscribe((res: any) => {
        this.partidas = res;
      });
  }

  descargarZip() {
    this.traer.http.post(`${this.API_URL}/descargarzip`, null, { responseType: 'blob' })
      .subscribe({
        next: (res: Blob) => {
          const fileURL = window.URL.createObjectURL(res);
          const link = document.createElement('a');
          link.href = fileURL;
          link.download = `Transferencia_${this.transferencia.consecutivo}.zip`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(fileURL);

          Swal.fire({
            title: 'Lista asignada y descargada',
            text: 'Los archivos PDF se han descargado correctamente en tu equipo.',
            icon: 'success'
          }).then(() => {
            location.reload();
          });
        },
        error: (error) => {
          console.error('Error descargando ZIP', error);
          Swal.fire('Error', 'No se pudo generar o descargar el archivo ZIP con los formatos.', 'error');
        }
      });
  }

  opcionSeleccionadaX() {
    this.traer.http.get(`${this.API_URL}/traerProductosDesdeTransferir/${this.transferencia.partida}`)
      .subscribe((res: any) => {
        this.productos = res;
        this.productosFiltrados = res;
        this.transferencia.cantidadEnStock = 0;
        this.transferencia.idcosto = null;
        this.transferencia.nombreProducto = '';
      });
  }

  plantelSeleccionado() {
    this.traer.http.get(`${this.API_URL}/traerDatosAdministrativo/${this.transferencia.plantel}`)
      .subscribe((res: any) => {
        this.datosAdmin = res;
        if (res && res.length > 0) {
          this.transferencia.recibio = res[0].administrativo;
        }
      });
  }

  traerPlanteles() {
    this.traer.http.get(`${this.API_URL}/traerPlanteles`)
      .subscribe((res: any) => {
        this.planteles = res;
      });
  }

  TraerTotalDisponible() {
    this.traer.http.get(`${this.API_URL}/traerTotalDisponible/${this.transferencia.idcosto}`)
      .subscribe((res: any) => {
        if (res === 'SinDatos') {
          this.transferencia.cantidadEnStock = 0;
        } else {
          this.transferencia.cantidadEnStock = (res.length > 0 && res[0].existencias) ? res[0].existencias : 0;
        }
      });
  }

  TraerConsecutivo() {
    this.traer.http.get(`${this.API_URL}/traerConsecutivo`)
      .subscribe((res: any) => {
        this.transferencia.consecutivo = res;
      });
  }

  agregarArticulo(form: NgForm) {
    if (this.transferencia.idcosto == null) {
      Swal.fire({
        title: 'Producto no válido',
        text: 'Debe elegir un producto de la lista',
        icon: 'warning'
      });
    } else if (!Number.isInteger(Number(this.transferencia.cantidadTransferir))) {
      Swal.fire({
        title: 'Cantidad no válida',
        text: 'La cantidad a transferir debe ser número entero',
        icon: 'warning'
      });
    } else {
      if (form.valid) {
        if (this.transferencia.cantidadEnStock < this.transferencia.cantidadTransferir) {
          Swal.fire({
            title: 'Operación no realizada',
            text: 'No hay suficiente stock de este producto',
            icon: 'warning'
          });
        } else if (this.transferencia.cantidadTransferir <= 0) {
          Swal.fire({
            title: 'Operación no realizada',
            text: 'Debe transferir mínimo 1 artículo',
            icon: 'warning'
          });
        } else {
          this.traer.http.post(`${this.API_URL}/TransferirArticulosPlantel`, this.transferencia)
            .subscribe((res: any) => {
              if (res === 'Add') {
                Swal.fire('Ok', 'Artículo agregado a la lista', 'success');
                this.transferencia.idcosto = null;
                this.getListaArticulosTransferir();
                this.productoBuscado = '';
                this.transferencia.cantidadEnStock = null;
                this.transferencia.cantidadTransferir = null;
              } else if (res === 'Duplicado') {
                Swal.fire('Artículo Duplicado', 'Este artículo ya fue agregado a la lista', 'warning');
              } else {
                Swal.fire('Error', '¡No se guardaron los cambios!', 'error');
              }
            });
        }
      } else {
        Swal.fire({
          title: 'Operación no realizada',
          text: 'Complete todos los campos',
          icon: 'warning'
        });
      }
    }
  }

  validarProducto() {
    this.transferencia.idcosto = null;
  }
}