import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { claveOperacion } from '../services/clave-operacion';

@Component({
  selector: 'app-mis-seguimientos',
  templateUrl: './mis-seguimientos.component.html',
  styleUrls: ['./mis-seguimientos.component.css']
})
export class MisSeguimientosComponent {
  folio = '';
  compras: any[] = [];
  historial: any[] = [];
  seleccionada: any = null;
  fecha = '';
  referencia = '';
  observaciones = '';
  mensaje = '';
  error = '';
  ocupado = false;
  consultando = false;
  historialCargando = false;

  private clave = claveOperacion();
  private envioPendiente: any = null;

  get headers() { 
    return { Authorization: localStorage.getItem('token') || '' }; 
  }

  constructor(private http: HttpClient) {
    const d = new Date();
    this.fecha = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  buscar(): void {
    if (this.ocupado || this.consultando || this.envioPendiente) return;
    this.cargar();
  }

  private cargar(): void {
    if (!this.folio.trim()) { 
      this.error = 'Escriba el Folio de compra.'; 
      return; 
    }

    this.consultando = true;
    this.error = ''; 
    this.seleccionada = null; 
    this.historial = []; 
    this.compras = [];

    this.http.get<any[]>(`${environment.uri_api}/compras/por-folio`, { 
      headers: this.headers, 
      params: { folio: this.folio.trim() } 
    }).subscribe({
      next: data => {
        // Mapeo seguro con casteo explícito de tipos para evitar bloqueos involuntarios en el template
        this.compras = data.map(c => {
          const total = Number(c.total_articulos) || 0;
          const recibido = Number(c.recibido ?? c.cantidad_recibida) || 0;
          const pendienteCalculado = total - recibido;

          return {
            ...c,
            recibir: 0,
            total_articulos: total,
            recibido: recibido,
            pendiente: c.pendiente !== undefined && c.pendiente !== null ? Number(c.pendiente) : pendienteCalculado,
            gestion_recepciones: c.gestion_recepciones !== undefined ? Boolean(c.gestion_recepciones) : true,
            esactivo: c.esactivo !== undefined ? Boolean(c.esactivo) : true,
            estado: c.estado || c.estatus || 'Pendiente'
          };
        });

        this.consultando = false;
        if (!data.length) {
          this.error = 'No se encontró ese folio en su centro de trabajo.';
        }
      },
      error: e => { 
        this.consultando = false; 
        this.error = e.error?.error || 'No se pudo consultar la compra.'; 
      }
    });
  }

  verHistorial(c: any): void {
    if (this.historialCargando) return;
    this.seleccionada = c; 
    this.historial = []; 
    this.historialCargando = true;

    this.http.get<any[]>(`${environment.uri_api}/compras/${c.id}/recepciones`, { 
      headers: this.headers 
    }).subscribe({
      next: data => { 
        this.historial = data; 
        this.historialCargando = false; 
      },
      error: e => { 
        this.historialCargando = false; 
        this.error = e.error?.error || 'No se pudo cargar el historial.'; 
      }
    });
  }

  get bloqueado(): boolean { 
    return this.ocupado || this.consultando || !!this.envioPendiente; 
  }

  guardar(): void {
    if (this.ocupado || this.consultando) return;
    this.error = ''; 
    this.mensaje = '';

    if (!this.envioPendiente) {
      const seleccion = this.compras.filter(c => Number(c.recibir) > 0);

      if (!seleccion.length || !this.fecha || this.compras.some(c => Number(c.recibir) < 0 || !Number.isFinite(Number(c.recibir)))) {
        this.error = 'Indique la fecha y una cantidad positiva para al menos un artículo.'; 
        return;
      }

      if (seleccion.some(c => !c.gestion_recepciones || !c.esactivo || Number(c.recibir) > Number(c.pendiente))) {
        this.error = 'Revise las cantidades: no pueden superar el pendiente.'; 
        return;
      }

      const grupos = new Set(seleccion.map(c => JSON.stringify([c.id_proveedor, c.id_centrotrabajo, String(c.fecha_compra).slice(0, 4)])));
      if (grupos.size > 1) { 
        this.error = 'Seleccione artículos del mismo proveedor y año por recepción.'; 
        return; 
      }

      this.envioPendiente = { 
        clave_operacion: this.clave, 
        fecha_recepcion: this.fecha,
        referencia: this.referencia, 
        observaciones: this.observaciones,
        detalles: seleccion.map(c => ({ id_compra: c.id, cantidad: Number(c.recibir) })) 
      };
    }

    this.ocupado = true;
    this.http.post<any>(`${environment.uri_api}/compras/recepciones`, this.envioPendiente, { 
      headers: this.headers 
    }).subscribe({
      next: r => {
        this.ocupado = false; 
        this.envioPendiente = null; 
        this.clave = claveOperacion();
        this.mensaje = `Recepción #${r.id_recepcion} registrada. Se actualizaron las existencias y el historial.`;
        this.referencia = ''; 
        this.observaciones = ''; 
        this.cargar();
      },
      error: e => {
        this.ocupado = false;
        if (e.status >= 400 && e.status < 500) {
          this.envioPendiente = null;
        }
        this.error = e.error?.error || 'No se confirmó la respuesta. Pulse Guardar para reintentar la misma recepción sin duplicarla.';
      }
    });
  }
}