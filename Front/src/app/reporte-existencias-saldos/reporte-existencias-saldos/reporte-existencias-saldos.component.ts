import { Component } from '@angular/core';
import { ReporteExistenciasSaldosService } from '../reporte-existencias-saldos.service';

@Component({
  selector: 'app-reporte-existencias-saldos',
  templateUrl: './reporte-existencias-saldos.component.html',
  styleUrls: ['./reporte-existencias-saldos.component.css'],
})
export class ReporteExistenciasSaldosComponent {
  fechaInicio = '';
  fechaFin = '';
  cargando = false;
  error = '';

  constructor(private service: ReporteExistenciasSaldosService) {}

  generar(): void {
    this.error = '';
    if (!this.fechaInicio || !this.fechaFin) {
      this.error = 'Selecciona ambas fechas.';
      return;
    }
    if (this.fechaInicio > this.fechaFin) {
      this.error = 'La fecha de inicio no puede ser mayor que la fecha fin.';
      return;
    }

    this.cargando = true;
    this.service.descargarReporte(this.fechaInicio, this.fechaFin).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `reporte-existencias-saldos-${this.fechaFin}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al generar el reporte. Revisa la consola.';
        this.cargando = false;
      },
    });
  }
}