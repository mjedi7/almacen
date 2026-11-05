import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { reporte_existencia_x_partida } from 'src/app/models/reporte_movimientos_x_partida';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-existencia-x-partida',
  templateUrl: './reporte-existencia-x-partida.component.html',
  styleUrls: ['./reporte-existencia-x-partida.component.css']
})
export class ReporteExistenciaXPartidaComponent implements OnInit {

  reporteExistencias: reporte_existencia_x_partida & { filtroExistencia: string } = {
    centro_trabajo: parseInt(localStorage.getItem('centro_trabajo') || '0', 10),
    partida: '0', // Inicia por defecto en "TODAS"
    fecha: null,
    filtroExistencia: 'todas'
  };

  partidas: any[] = [];
  API_URL = environment.uri_api;

  constructor(private traer: TraerDatosService) {}

  ngOnInit(): void {
    this.traerPartidas();
  }

  GeneraReporteExistenciasHTML(form: NgForm): void {
    if (!form.valid) {
      Swal.fire({
        title: 'Complete todos los campos',
        text: 'Por favor verifique la partida y la fecha seleccionada',
        icon: 'warning'
      });
      return;
    }

    // Validación de centro de trabajo en sesión
    const centroTrabajoId = parseInt(localStorage.getItem('centro_trabajo') || '0', 10);
    if (!centroTrabajoId) {
      Swal.fire('Sesión inválida', 'No se identificó el centro de trabajo del usuario', 'error');
      return;
    }

    // 1. Obtención del usuario real guardado en tu login
    const usuarioSesion = localStorage.getItem('nombre') || localStorage.getItem('usuario') || 'USUARIO';

    // 2. Formateo de fecha sin desfase horario
    let fechaFormateada = '';
    if (this.reporteExistencias.fecha) {
      const fechaStr = this.reporteExistencias.fecha.toString().split('T')[0];
      const partes = fechaStr.split('-');
      if (partes.length === 3) {
        fechaFormateada = `${partes[2]}/${partes[1]}/${partes[0]}`; // DD/MM/YYYY exacto
      } else {
        fechaFormateada = fechaStr;
      }
    } else {
      const hoy = new Date();
      const dd = String(hoy.getDate()).padStart(2, '0');
      const mm = String(hoy.getMonth() + 1).padStart(2, '0');
      const yyyy = hoy.getFullYear();
      fechaFormateada = `${dd}/${mm}/${yyyy}`;
    }

    // 3. Sufijo descriptivo para el PDF descargado
    let sufijo = '_todas';
    if (this.reporteExistencias.filtroExistencia === 'con_existencia') {
      sufijo = '_con_existencia';
    } else if (this.reporteExistencias.filtroExistencia === 'sin_existencia') {
      sufijo = '_sin_existencia';
    }

    const clavePartida = this.reporteExistencias.partida || '0';
    const nombreArchivo = (clavePartida === '0')
      ? `Reporte_existencias_general${sufijo}_${this.reporteExistencias.fecha}.pdf`
      : `Reporte_existencia_partida_${clavePartida}${sufijo}_${this.reporteExistencias.fecha}.pdf`;

    // 4. Payload con usuario y fecha corregida
    const payload = {
      centro_trabajo: centroTrabajoId,
      partida: clavePartida,
      fecha: fechaFormateada,
      filtroExistencia: this.reporteExistencias.filtroExistencia,
      usuario: usuarioSesion
    };

    Swal.fire({
      title: 'Generando Reporte PDF...',
      text: 'Por favor espere un momento',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(null)
    });

    // Petición al endpoint modularizado (/reporte/existencias)
    this.traer.http.post(`${this.API_URL}/reporte/existencias`, payload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'blob'
    }).subscribe({
      next: (res: Blob) => {
        Swal.close();
        this.descargarArchivo(res, nombreArchivo);
      },
      error: (err) => {
        console.error('Error al generar reporte:', err);
        Swal.fire(
          'Error al generar reporte',
          'Verifique la conexión con el servidor o los datos seleccionados',
          'error'
        );
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

  traerPartidas(): void {
    this.traer.http.get<any[]>(`${this.API_URL}/traerPartidas`)
      .subscribe({
        next: (res) => {
          this.partidas = res || [];
        },
        error: (err) => {
          console.error('Error cargando catálogo de partidas:', err);
        }
      });
  }
}