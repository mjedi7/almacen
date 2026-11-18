import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {
  ReporteExistenciasSaldosService,
  ArticuloBusqueda,
} from '../services/reporte-existencias-saldos.service';

@Component({
  selector: 'app-reporte-existencias-saldos',
  templateUrl: './reporte-existencias-saldos.component.html',
  styleUrls: ['./reporte-existencias-saldos.component.css'],
})
export class ReporteExistenciasSaldosComponent {
  fechaInicio = '';
  fechaFin = '';

  // Búsqueda
  terminoBusqueda = '';
  resultados: ArticuloBusqueda[] = [];
  buscando = false;
  private busqueda$ = new Subject<string>();

  // Lista temporal
  seleccionados: ArticuloBusqueda[] = [];

  cargando = false;
  error = '';

  constructor(private service: ReporteExistenciasSaldosService) {
    this.busqueda$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((q) => {
          if (!q || q.trim().length < 2) {
            this.buscando = false;
            return [];
          }
          this.buscando = true;
          return this.service.buscarArticulos(q);
        })
      )
      .subscribe({
        next: (resp: any) => {
          this.resultados = resp?.articulos ?? resp ?? [];
          this.buscando = false;
        },
        error: () => {
          this.buscando = false;
          this.resultados = [];
        },
      });
  }

  onBuscarChange(valor: string): void {
    this.busqueda$.next(valor);
  }

  agregar(art: ArticuloBusqueda): void {
    if (this.seleccionados.some((a) => a.id === art.id)) return;
    this.seleccionados.push(art);
    this.terminoBusqueda = '';
    this.resultados = [];
  }

  quitar(id: number): void {
    this.seleccionados = this.seleccionados.filter((a) => a.id !== id);
  }

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
    if (this.seleccionados.length === 0) {
      this.error = 'Agrega al menos un artículo.';
      return;
    }

    this.cargando = true;
    const ids = this.seleccionados.map((a) => a.id);

    this.service.descargarReporte(this.fechaInicio, this.fechaFin, ids).subscribe({
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
