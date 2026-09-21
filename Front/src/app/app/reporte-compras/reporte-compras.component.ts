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
  articulosKardex: any = []; // Lista dinámica de artículos para el Kárdex
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

  // Se ejecuta cada vez que el usuario cambia la partida en el formulario de Kárdex
  onPartidaKardexChange() {
    this.articulosKardex = [];
    this.reporteKardex.idCostos = '';

    const partidaSeleccionada = this.partidas.find((p: any) => p.clave === this.reporteKardex.clavePartida);

    if (partidaSeleccionada && partidaSeleccionada.id !== '0') {
      this.traer.http.get(this.API_URL + `/traerProductos/${partidaSeleccionada.id}`)
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
  if (form.valid) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'blob' as 'arraybuffer'
    };

    const usuarioSesion =
      localStorage.getItem('nombre') ||
      localStorage.getItem('usuario') ||
      'USUARIO NO IDENTIFICADO';

    const payload = {
      ...this.reporte,
      usuario: usuarioSesion
    };

    if (this.reporte.partida === '0') {
      this.traer.http.post(
        this.API_URL + `/reporte_de_compras_todas`,
        payload,
        httpOptions
      )
        .subscribe((res: any) => {
          const file = new Blob(
            [res],
            { type: 'application/pdf' }
          );

          const fileURL = URL.createObjectURL(file);
          const link = document.createElement('a');

          link.href = fileURL;
          link.download = 'Reporte_de_todas_las_compras.pdf';

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          URL.revokeObjectURL(fileURL);
        });
    } else {
      this.traer.http.post(
        this.API_URL + `/reporte_de_compras_x_partida`,
        payload,
        httpOptions
      )
        .subscribe((res: any) => {
          const file = new Blob(
            [res],
            { type: 'application/pdf' }
          );

          const fileURL = URL.createObjectURL(file);
          const link = document.createElement('a');

          link.href = fileURL;
          link.download = 'Reporte_compras_por_partida.pdf';

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          URL.revokeObjectURL(fileURL);
        });
    }
  } else {
    Swal.fire({
      title: 'Complete todos los campos',
      icon: 'warning'
    });
  }
}

GeneraReportePorProveedor(form: NgForm) {
  if (form.valid) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'blob' as 'arraybuffer'
    };

    const usuarioSesion =
      localStorage.getItem('nombre') ||
      localStorage.getItem('usuario') ||
      'USUARIO NO IDENTIFICADO';

    const payload = {
      ...this.reporte2,
      usuario: usuarioSesion
    };

    this.traer.http.post(
      this.API_URL + `/reporte_de_compras_x_proveedor`,
      payload,
      httpOptions
    )
      .subscribe((res: any) => {
        const file = new Blob(
          [res],
          { type: 'application/pdf' }
        );

        const fileURL = URL.createObjectURL(file);
        const link = document.createElement('a');

        link.href = fileURL;
        link.download = 'Reporte_compras_x_proveedor.pdf';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(fileURL);
      });
  } else {
    Swal.fire({
      title: 'Complete todos los campos',
      icon: 'warning'
    });
  }
}


  GeneraReporteKardex(form: NgForm) {
    if (form.valid) {
      Swal.fire({
        title: 'Generando Kárdex...',
        text: 'Por favor espere un momento',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading(null);
        }
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
    } else {
      Swal.fire({
        title: "Complete todos los campos",
        icon: "warning"
      });
    }
  }

  traerPartidas() {
    this.traer.http.get(this.API_URL + `/traerPartidas`)
      .subscribe((res: any) => {
        this.partidas = res;
        this.partidas.push({ id: '0', clave: '0', descripcion: 'Todos' });
      });
  }

  traerProveedores() {
    this.traer.http.get(this.API_URL + `/traerProveedores`)
      .subscribe((res: any) => {
        this.proveedores = res;
      });
  }

  CapturarValor() {
    const idproveedor = this.direccionSeleccionada;
    this.traer.http.get(this.API_URL + `/traerDatosProveedores/${idproveedor}`)
      .subscribe((res: any) => {
        this.datosproveedor = res;
      });
  }
}