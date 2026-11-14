import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenerarPDFService } from '../../../services/generar-pdf.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-resumen-almacen',
  templateUrl: './reporte-resumen-almacen.component.html',
  styleUrls: ['./reporte-resumen-almacen.component.css']
})
export class ReporteResumenAlmacenComponent implements OnInit {

    reporteResumen = {
    fechaIni: '',
    fechaFin: '',
    fechaReporte: ''
  };

  API_URL = environment.uri_api;
  

  constructor(private pdfService: GenerarPDFService) { }

  ngOnInit(): void {

    const hoy = new Date().toISOString().split('T')[0];
    this.reporteResumen.fechaReporte = hoy ;
  }

  private getAuthHeaders(): HttpHeaders {
    const rawToken = localStorage.getItem('token') || '';
    const token = rawToken.startsWith('Bearer ') ? rawToken : `Bearer ${rawToken}`;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': rawToken ? token : ''
    });
  }

  GenerarReporteResumen(form: NgForm) {
    if (!form.valid) {
      Swal.fire({
        title: 'Complete todos los campos',
        text: 'Por favor verifique las fechas obligatorias',
        icon: 'warning'
      });
      return;
    }

    if (this.reporteResumen.fechaIni && this.reporteResumen.fechaFin && this.reporteResumen.fechaIni > this.reporteResumen.fechaFin) {
      Swal.fire({
        title: 'Fecha inválida',
        text: 'La fecha inicial no puede ser posterior a la fecha final',
        icon: 'error'
      });
      return;
    }

    const usuarioSesion =
      localStorage.getItem('nombre') ||
      localStorage.getItem('usuario') ||
      'USUARIO NO IDENTIFICADO';

    const payload = {
      ...this.reporteResumen,
      usuario: usuarioSesion
    };

    const nombreArchivo = `Resumen_Almacen_${this.reporteResumen.fechaIni}_al_${this.reporteResumen.fechaFin}.pdf`;

    Swal.fire({
      title: 'Generando Resumen de Almacén...',
      text: 'Por favor espere un momento mientras se compila el PDF',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(null)
    });

    // Llamamos al servicio centralizado utilizando el token de autorización
    this.pdfService.descargarResumenAlmacen(payload).subscribe({
      next: (res: Blob) => {
        Swal.close();
        this.descargarArchivo(res, nombreArchivo);
      },
      error: (err) => {
        Swal.close();
        console.error('Error al generar resumen de almacén:', err);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo generar el reporte de resumen de almacén. Verifique los datos o el estado del servidor.',
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

  
}
