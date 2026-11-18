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

  private obtenerUsuario(): string {
    const esCorreo = (v: string) => v.includes('@');

    const extraerNombre = (obj: any): string => {
      if (!obj || typeof obj !== 'object') return '';

      const completo =
        obj.nombre_completo || obj.nombreCompleto || obj.fullName || obj.displayName;
      if (completo && !esCorreo(String(completo))) return String(completo).trim();

      const nombre = obj.nombre || obj.nombres || obj.firstName;
      const apellidos =
        obj.apellidos ||
        obj.apellido ||
        obj.lastName ||
        [obj.apellido_paterno, obj.apellido_materno].filter(Boolean).join(' ');
      if (nombre && !esCorreo(String(nombre))) {
        return apellidos ? `${nombre} ${apellidos}`.trim() : String(nombre).trim();
      }

      const nombreUsuario = obj.nombreUsuario || obj.nombre_usuario;
      if (nombreUsuario && !esCorreo(String(nombreUsuario))) {
        return String(nombreUsuario).trim();
      }

      // Nunca devolver correo, email, usuario o username si es un correo
      return '';
    };

    const claves = ['nombre', 'nombre_completo', 'usuario', 'user', 'nombreUsuario', 'currentUser'];

    for (const storage of [localStorage, sessionStorage]) {
      for (const clave of claves) {
        const valor = storage.getItem(clave);
        if (!valor) continue;

        try {
          const obj = JSON.parse(valor);
          if (typeof obj === 'string') {
            if (!esCorreo(obj)) return obj.trim();
            continue;
          }
          const nombre = extraerNombre(obj);
          if (nombre) return nombre;
        } catch {
          if (!esCorreo(valor)) return valor.trim();
        }
      }
    }
    return '';
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
    const usuario = this.obtenerUsuario();

    this.service.descargarReporte(this.fechaInicio, this.fechaFin, ids, usuario).subscribe({
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
