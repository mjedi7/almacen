import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import { UsarArticulo } from 'src/app/models/nuevoDocumento';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-existencias',
  templateUrl: './existencias.component.html',
  styleUrls: ['./existencias.component.css']
})
export class ExistenciasComponent implements OnInit {

  planteles: any = [];
  existencias: any = [];
  opcionSeleccionado: number = 0;
  verSeleccion: number;
  API_URL = environment.uri_api;

  dtOptions: any = {};
  dtTrigger = new Subject<any>();

  UsarArticulo: UsarArticulo = {
    nombreAutoriza: localStorage.getItem('nombre'),
    nombreSolicita: '',
    cantidadDisponible: null,
    cantidadAUtilizar: null,
    observacion: '',
    fecha: '',
    idPlantel: null,
    idCostos: null
  };

  botonUtilizaArticulo: boolean = false;

  constructor(private traer: TraerDatosService) {}

  ngOnInit(): void {
    this.traerPlanteles();

    let fecha = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
    this.UsarArticulo.fecha = fecha;

    const centroT = localStorage.getItem('centro_trabajo') || '0';
    const centroTrabajoInt = parseInt(centroT, 10);

    if (centroTrabajoInt >= 1 && centroTrabajoInt <= 31) {
      this.botonUtilizaArticulo = true;
    } else if (centroTrabajoInt > 32) {
      this.botonUtilizaArticulo = false;
    }
  }

  getListaExistencias(idplantel: number): void {
    if ($.fn.DataTable.isDataTable('#articulos')) {
      $('#articulos').DataTable().clear();
      $('#articulos').DataTable().destroy();
    }

    try {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        searching: true,
        processing: true,
        destroy: true,
        language: {
          url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
        }
      };

      this.traer.http.get(`${this.API_URL}/getExistencias/${idplantel}`)
        .subscribe({
          next: (res: any) => {
            this.existencias = res;
            this.dtTrigger.next(null);
          },
          error: (err) => {
            console.error('Error al obtener existencias:', err);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  traerPlanteles(): void {
    const plantel = localStorage.getItem('centro_trabajo');

    this.traer.http.get(`${this.API_URL}/traerPlanteles/${plantel}`)
      .subscribe({
        next: (res: any) => {
          this.planteles = res;
        },
        error: (err) => {
          console.error('Error al cargar planteles:', err);
        }
      });
  }

  plantelSeleccionado(): void {
    this.verSeleccion = this.opcionSeleccionado;
    this.getListaExistencias(this.verSeleccion);
  }

  PasarCantidadDisponible(cantidadDisponible: number, id_costos: number): void {
    this.UsarArticulo.cantidadDisponible = cantidadDisponible;
    this.UsarArticulo.idCostos = id_costos;
  }

  AsignarArticulo(form: NgForm): void {
    this.UsarArticulo.idPlantel = this.verSeleccion;

    if (
      this.UsarArticulo.cantidadAUtilizar > this.UsarArticulo.cantidadDisponible ||
      this.UsarArticulo.cantidadAUtilizar <= 0
    ) {
      Swal.fire({
        title: 'Operación no realizada',
        text: 'La cantidad a utilizar no es válida',
        icon: 'warning'
      });
    } else {
      this.traer.http.post(`${this.API_URL}/UsarArticuloPlantel`, this.UsarArticulo)
        .subscribe({
          next: (res: any) => {
            if (res === 'Add') {
              Swal.fire(
                'Operación realizada',
                'El artículo se disminuyó del stock',
                'success'
              );
              this.getListaExistencias(this.verSeleccion);
            } else {
              Swal.fire('Error', '¡No se guardaron los cambios!', 'error');
            }
          },
          error: (err) => {
            console.error('Error al asignar artículo:', err);
            Swal.fire('Error', 'No se pudo registrar la salida del stock', 'error');
          }
        });
    }
  }

  // REPORTE GENERAL
  reporteGneral(): void {
    if (!this.verSeleccion || this.verSeleccion === 0) {
      Swal.fire('Seleccione un plantel', 'Debe seleccionar un plantel para generar el reporte general', 'warning');
      return;
    }

    Swal.fire({
      title: 'Generando Reporte...',
      text: 'Por favor espere un momento',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(null)
    });

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'blob' as 'json'
    };

    // Endpoint actualizado a la ruta unificada de Puppeteer
    this.traer.http.get(`${this.API_URL}/reporte/general-plantel/${this.verSeleccion}`, httpOptions)
      .subscribe({
        next: (res: any) => {
          Swal.close();
          const file = new Blob([res], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL, '_blank');
        },
        error: (err) => {
          Swal.close();
          console.error('Error al generar reporte general:', err);
          Swal.fire('Error', 'No se pudo generar el reporte general del plantel.', 'error');
        }
      });
  }

  descargarFormato(): void {
    const link = document.createElement('a');
    link.href = 'assets/Formato_plantel.pdf';
    link.download = 'Formato_plantel.pdf';
    link.click();
  }
}