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

  plantelesTransferencia: number[] = [];

  productosFiltrados: any[] = [];
  productoBuscado: string = '';
  dtOptions: any = {};
  dtTrigger = new Subject();
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

  getListaArticulosTransferir() {
    $('#articulos').DataTable().clear();
    $('#articulos').DataTable().draw();
    $('#articulos').DataTable().destroy();

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

      var folio = this.transferencia.consecutivo;

      this.traer.http.get(this.API_URL + `/getListaArticulosTransferir/${folio}`)
        .subscribe((res) => {
          this.articulosTransferir = res;
          console.log(this.articulosTransferir);
          this.dtTrigger.next();

          if (this.articulosTransferir.length > 0) {
            this.mostrarBotonTransferir = true;
          } else {
            this.mostrarBotonTransferir = false;
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  eliminarArticulo(idarticulo: number) {
    console.log(idarticulo);
    this.traer.http.delete(this.API_URL + `/eliminarArticulo/${idarticulo}`)
      .subscribe((res) => {
        this.getListaArticulosTransferir();
      });
  }

  confirmarTranferencia() {
    Swal.fire({
      title: "¿Estas seguro de terminar la lista?",
      text: "Una vez terminada no podrá agregar nuevos artículos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: 'Cancelar',
      confirmButtonText: "Si, terminar"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("ID transferencia=" + this.transferencia.consecutivo);

        this.traer.http.get(this.API_URL + `/confirmarTransferencia/${this.transferencia.consecutivo}`)
          .subscribe((res) => {
            if (res == "ListaOk") {
              Swal.fire({
                title: "Generando formatos...",
                text: "Los artículos se asignaron. Se están preparando los documentos para la descarga.",
                icon: "info",
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading(null);
                }
              });

              this.obtenerPlantelesTransferencia();
            }
          });
      } else {
        console.log("Cancelado...");
      }
    });
  }

obtenerPlantelesTransferencia() {
  this.traer.http.get(
    this.API_URL + `/getListaArticulosTransferir/${this.transferencia.consecutivo}`
  ).subscribe({
    next: (res: any) => {

      console.log("Movimientos de la transferencia:", res);

      this.plantelesTransferencia = Array.from(
  new Set<number>(
    res.map((movimiento: any) =>
      Number(movimiento.id_centrotrabajo_transfiere)
    )
  )
);

      console.log(
        "Planteles de la transferencia:",
        this.plantelesTransferencia
      );

      if (this.plantelesTransferencia.length === 0) {
        Swal.fire(
          'Error',
          'No se encontraron planteles para esta transferencia',
          'error'
        );
        return;
      }

      this.generarFormatoListaSurtido(0);
    },

    error: (err) => {
      console.error(
        "Error al obtener los planteles de la transferencia",
        err
      );

      Swal.fire(
        'Error',
        'No se pudieron obtener los planteles de la transferencia',
        'error'
      );
    }
  });
}

  generarFormatoListaSurtido(indice: number) {

  const plantel = this.plantelesTransferencia[indice];

  console.log("Generando PDF con montos para plantel:", plantel);

  this.traer.http.get(
    this.API_URL + `/formatoListaArticulosSurtidos/${this.transferencia.consecutivo}/${plantel}`,
    { responseType: 'text' }
  ).subscribe({
    next: (res: any) => {

      console.log(res);

      this.generarFormatoListaSurtidoSinMontos(indice);

    },
    error: (err) => {

      console.error(
        "Error al generar el PDF con montos",
        err
      );

      Swal.fire(
        'Error',
        'Hubo un error al generar el PDF con montos',
        'error'
      );
    }
  });
}

generarFormatoListaSurtidoSinMontos(indice: number) {

  const plantel = this.plantelesTransferencia[indice];

  console.log("Generando PDF sin montos para plantel:", plantel);

  this.traer.http.get(
    this.API_URL + `/formatoListaArticulosSurtidosSinMontos/${this.transferencia.consecutivo}/${plantel}`,
    { responseType: 'text' }
  ).subscribe({
    next: (res: any) => {

      console.log(res);

      const siguienteIndice = indice + 1;

      if (siguienteIndice < this.plantelesTransferencia.length) {

        // Todavía faltan planteles
        this.generarFormatoListaSurtido(siguienteIndice);

      } else {

        // Ya se generaron los 2 PDFs de todos los planteles
        this.descargarZip();

      }
    },

    error: (err) => {

      console.error(
        "Error al generar el PDF sin montos",
        err
      );

      Swal.fire(
        'Error',
        'Hubo un error al generar el PDF sin montos',
        'error'
      );
    }
  });
}

  traerPartidas() {
    this.traer.http.get(this.API_URL + `/traerPartidas`)
      .subscribe((res: any) => {
        this.partidas = res;
        console.log(this.partidas);
      });
  }

  descargarZip() {
    const httpOptions = {
      responseType: 'blob' as 'blob'
    };

    this.traer.http.post(
      this.API_URL + `/descargarzip`,
      null,
      httpOptions
    ).subscribe({
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
          title: "Lista asignada y descargada",
          text: "Los archivos PDF se han descargado correctamente en tu equipo.",
          icon: "success"
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
    console.log(this.transferencia.partida);

    this.traer.http.get(this.API_URL + `/traerProductosDesdeTransferir/${this.transferencia.partida}`)
      .subscribe((res: any) => {
        this.productos = res;
        this.productosFiltrados = res;
        console.log(this.productos);

        this.transferencia.cantidadEnStock = 0;
        this.transferencia.idcosto = null;
        this.transferencia.nombreProducto = '';
      });
  }

  plantelSeleccionado() {
    console.log(this.transferencia.plantel);

    this.traer.http.get(this.API_URL + `/traerDatosAdministrativo/${this.transferencia.plantel}`)
      .subscribe((res: any) => {
        this.datosAdmin = res;
        console.log(this.datosAdmin);
        this.transferencia.recibio = res[0].administrativo;
      });
  }

  traerPlanteles() {
    this.traer.http.get(this.API_URL + `/traerPlanteles`)
      .subscribe((res: any) => {
        this.planteles = res;
        console.log(this.planteles);
      });
  }

  TraerTotalDisponible() {
    console.log(this.transferencia.partida);
    console.log(this.transferencia.idcosto);

    this.traer.http.get(this.API_URL + `/traerTotalDisponible/${this.transferencia.idcosto}`)
      .subscribe((res: any) => {
        if (res == "SinDatos") {
          this.transferencia.cantidadEnStock = 0;
        } else {
          this.transferencia.cantidadEnStock = 0;
          if (res.length > 0 && res[0].existencias) {
            this.transferencia.cantidadEnStock = res[0].existencias;
          }
          console.log(res);
        }
      });
  }

  TraerConsecutivo() {
    this.traer.http.get(this.API_URL + `/traerConsecutivo`)
      .subscribe((res: any) => {
        var consecutivo = res;
        this.transferencia.consecutivo = consecutivo;
      });
  }

  agregarArticulo(form: NgForm) {
    console.log(this.transferencia);

    if (this.transferencia.idcosto == null) {
      Swal.fire({
        title: 'Producto no válido',
        text: 'Debe elegir un producto de la lista',
        icon: 'warning'
      });
    } else if (Number.isInteger(this.transferencia.cantidadTransferir) == false) {
      Swal.fire({
        title: 'Cantidad no valida',
        text: 'La cantidad a transferir debe ser número entero',
        icon: 'warning'
      });
    } else {
      if (form.valid == true) {
        console.log(this.transferencia);

        if (this.transferencia.cantidadEnStock < this.transferencia.cantidadTransferir) {
          Swal.fire({
            title: "Operación no realizada",
            text: "No hay suficiente stock de este producto",
            icon: "warning"
          });
        } else if (this.transferencia.cantidadTransferir <= 0) {
          Swal.fire({
            title: "Operación no realizada",
            text: "Debe transferir mínimo 1 artículo",
            icon: "warning"
          });
        } else {
          this.traer.http.post(this.API_URL + `/TransferirArticulosPlantel`, this.transferencia)
            .subscribe((res: any) => {
              console.log(res);

              if (res == "Add") {
                Swal.fire(
                  'Ok',
                  'Articulo agregado a la lista',
                  'success'
                );

                this.transferencia.idcosto = null;
                this.getListaArticulosTransferir();
                this.productoBuscado = '';
                this.transferencia.cantidadEnStock = null;
                this.transferencia.cantidadTransferir = null;
              } else if (res == "Duplicado") {
                Swal.fire(
                  'Artículo Duplicado',
                  'Este artículo ya fue agregado a la lista',
                  'warning'
                );
              } else {
                Swal.fire(
                  'Error',
                  '¡No se guardaron los cambios!',
                  'error'
                );
              }
            });
        }
      } else {
        Swal.fire({
          title: "Operación no realizada",
          text: "Complete todos los campos",
          icon: "warning"
        });
      }
    }
  }

  validarProducto() {
    console.log("Entro a validar Producto");
    this.transferencia.idcosto = null;
  }
}