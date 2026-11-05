import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { reporte_de_compras, reporte_de_compras_x_proveedor } from 'src/app/models/reporte_movimientos_x_partida';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { GenerarPDFService } from '../../services/generar-pdf.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-compras',
  templateUrl: './reporte-compras.component.html',
  styleUrls: ['./reporte-compras.component.css']
})
export class ReporteComprasComponent implements OnInit {

  modo = 'entradas';

  reporte: reporte_de_compras = {
    fechaIni: null,
    fechaFin: null,
    partida: '',
    fechaReporte: null
  };

  reporte2: reporte_de_compras_x_proveedor = {
    fechaIni: null,
    fechaFin: null,
    idproveedor: null,
    fechaReporte: null
  };

  reporteKardex = {
    clavePartida: '',
    idCostos: ''
  };

  datosproveedor: any = [];
  proveedores: any = [];
  partidas: any = [];
  articulosKardex: any = [];
  API_URL = environment.uri_api;
  direccionSeleccionada: number;

  constructor(
    private traer: TraerDatosService,
    private reportesService: GenerarPDFService
  ) { }

  ngOnInit(): void {
    this.traerPartidas();
    this.traerProveedores();
  }

  // Carga artículos dinámicos para el Kárdex al seleccionar una partida
  onPartidaKardexChange() {
    this.articulosKardex = [];
    this.reporteKardex.idCostos = '';

    const partidaSeleccionada = this.partidas.find((p: any) => p.clave === this.reporteKardex.clavePartida);

    if (partidaSeleccionada && partidaSeleccionada.id !== '0') {
      this.traer.http.get(`${this.API_URL}/traerProductos/${partidaSeleccionada.id}`)
        .subscribe({
          next: (res: any) => {
            this.articulosKardex = res;
          },
          error: (err: any) => {
            console.error('Error al cargar artículos de la partida:', err);
          }
        });
    }
  }

  GeneraReporte(form: NgForm) {
    if (!form.valid) {
      Swal.fire({
        title: 'Complete todos los campos',
        icon: 'warning'
      });
      return;
    }

    const usuarioSesion =
      localStorage.getItem('nombre') ||
      localStorage.getItem('usuario') ||
      'USUARIO NO IDENTIFICADO';

    const payload = {
      ...this.reporte,
      modo: this.modo,
      usuario: usuarioSesion
    };

    // Endpoints actualizados bajo el prefijo /reporte/
    const endpoint = (this.reporte.partida === '0')
      ? `${this.API_URL}/reporte/compras-todas`
      : `${this.API_URL}/reporte/compras-partida`;

    const nombreArchivo = (this.reporte.partida === '0')
      ? 'Reporte_de_todas_las_compras.pdf'
      : 'Reporte_compras_por_partida.pdf';

    Swal.fire({
      title: 'Generando Reporte...',
      text: 'Por favor espere un momento',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(null)
    });

    this.traer.http.post(endpoint, payload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'blob'
    }).subscribe({
      next: (res: Blob) => {
        Swal.close();
        this.descargarArchivo(res, nombreArchivo.replace('compras', this.modo));
      },
      error: (err) => {
        Swal.close();
        console.error('Error al generar compras:', err);
        Swal.fire('Error', 'No se pudo generar el reporte de compras.', 'error');
      }
    });
  }

  GeneraReportePorProveedor(form: NgForm) {
    if (!form.valid) {
      Swal.fire({
        title: 'Complete todos los campos',
        icon: 'warning'
      });
      return;
    }

    const usuarioSesion =
      localStorage.getItem('nombre') ||
      localStorage.getItem('usuario') ||
      'USUARIO NO IDENTIFICADO';

    const payload = {
      ...this.reporte2,
      modo: this.modo,
      usuario: usuarioSesion
    };

    Swal.fire({
      title: 'Generando Reporte...',
      text: 'Por favor espere un momento',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(null)
    });

    // Endpoint actualizado a /reporte/compras-proveedor
    this.traer.http.post(`${this.API_URL}/reporte/compras-proveedor`, payload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'blob'
    }).subscribe({
      next: (res: Blob) => {
        Swal.close();
        this.descargarArchivo(res, `Reporte_${this.modo}_x_proveedor.pdf`);
      },
      error: (err) => {
        Swal.close();
        console.error('Error al generar compras por proveedor:', err);
        Swal.fire('Error', 'No se pudo generar el reporte por proveedor.', 'error');
      }
    });
  }

  GeneraReporteKardex(form: NgForm) {
    if (!form.valid) {
      Swal.fire({
        title: 'Complete todos los campos',
        icon: 'warning'
      });
      return;
    }

    Swal.fire({
      title: 'Generando Kárdex...',
      text: 'Por favor espere un momento',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(null)
    });

    this.reportesService.descargarKardex(this.reporteKardex.clavePartida, this.reporteKardex.idCostos)
      .subscribe({
        next: (pdfBlob: Blob) => {
          Swal.close();
          const fileURL = URL.createObjectURL(pdfBlob);
          window.open(fileURL, '_blank');
        },
        error: (err: any) => {
          Swal.close();
          console.error('Error al generar Kárdex:', err);
          Swal.fire({
            title: 'Error',
            text: 'No se pudo generar el reporte de Kárdex. Verifique los datos.',
            icon: 'error'
          });
        }
      });
  }

  private descargarArchivo(res: Blob, nombreArchivo: string): void {
    const file = new Blob([res], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement('a');

    link.href = fileURL;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(fileURL);
  }

	traerPartidas() {
	  this.traer.http.get(`${this.API_URL}/traerPartidas`)
		.subscribe((res: any) => {
		  this.partidas = res || [];
		  this.partidas.unshift({ id: '0', clave: '0', descripcion: 'TODAS' });
		});
	}

  traerProveedores() {
    this.traer.http.get(`${this.API_URL}/traerProveedores`)
      .subscribe((res: any) => {
        this.proveedores = res || [];
      });
  }

  CapturarValor() {
    const idproveedor = this.direccionSeleccionada;
    this.traer.http.get(`${this.API_URL}/traerDatosProveedores/${idproveedor}`)
      .subscribe((res: any) => {
        this.datosproveedor = res;
      });
  }
}