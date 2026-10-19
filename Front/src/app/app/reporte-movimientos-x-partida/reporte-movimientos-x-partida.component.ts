import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { reporte_x_partida } from 'src/app/models/reporte_movimientos_x_partida';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-movimientos-x-partida',
  templateUrl: './reporte-movimientos-x-partida.component.html',
  styleUrls: ['./reporte-movimientos-x-partida.component.css']
})
export class ReporteMovimientosXPartidaComponent implements OnInit {

  reporte: reporte_x_partida = {
    fechaIni: undefined,
    fechaFin: undefined,
    partida: '0'
  };

  partidas: any[] = [];
  API_URL = environment.uri_api;

  constructor(private traer: TraerDatosService) {}

  ngOnInit(): void {
    this.traerPartidas();
  }

  GeneraReporte(form: NgForm) {
    if (!form.valid || !this.reporte.fechaIni || !this.reporte.fechaFin) {
      Swal.fire({
        title: 'Complete todos los campos',
        icon: 'warning'
      });
      return;
    }

    const fechaInicioValida = new Date(this.reporte.fechaIni);
    const fechaFinValida = new Date(this.reporte.fechaFin);

    if (fechaInicioValida > fechaFinValida) {
      Swal.fire({
        title: 'Rango de fechas no válido',
        text: 'La Fecha Inicial no puede ser posterior a la Fecha Final.',
        icon: 'warning'
      });
      return;
    }

    const formatearFecha = (f: any): string => {
      if (!f) return '';
      const p = f.toString().split('T')[0].split('-');
      return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : f;
    };

    const payload = {
      partida: this.reporte.partida || '0',
      fecha_inicio: formatearFecha(this.reporte.fechaIni),
      fecha_fin: formatearFecha(this.reporte.fechaFin),
      fechaIni: this.reporte.fechaIni,
      fechaFin: this.reporte.fechaFin,
      usuario: localStorage.getItem('nombre') || 'ADMINISTRADOR'
    };

    // Nuevo endpoint unificado
    const endpoint = `${this.API_URL}/reporte/salidas-partida`;

    const nombreDescarga = (this.reporte.partida === '0')
      ? 'Reporte_movimientos_por_partida_todos.pdf'
      : `Reporte_movimientos_partida_${this.reporte.partida}.pdf`;

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

    this.traer.http.post(endpoint, payload, httpOptions)
      .subscribe({
        next: (res: any) => {
          Swal.close();
          const file = new Blob([res], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          const link = document.createElement('a');
          link.href = fileURL;
          link.download = nombreDescarga;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(fileURL);
        },
        error: (err) => {
          console.error('Error al generar:', err);
          Swal.fire('Error', 'No se pudo generar el reporte de salidas.', 'error');
        }
      });
  }

  traerPartidas() {
    this.traer.http.get(`${this.API_URL}/traerPartidas`)
      .subscribe((res: any) => {
        this.partidas = res || [];
        this.partidas.unshift({ id: '', clave: '0', descripcion: 'TODAS LAS PARTIDAS' });
      });
  }
}