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
    clavePartida: '',
    fechaReporte: null
  };

  reporte2: reporte_de_compras_x_proveedor = {
    fechaIni: null,
    fechaFin: null,
    idproveedor: null,
    nombreProveedor: '',
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

  private getAuthHeaders(): HttpHeaders {
    const rawToken = localStorage.getItem('token') || '';
    const token = rawToken.startsWith('Bearer ') ? rawToken : `Bearer ${rawToken}`;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': rawToken ? token : ''
    });
  }

  // Carga artículos dinámicos para el Kárdex al seleccionar una partida
  onPartidaKardexChange() {
    this.articulosKardex = [];
    this.reporteKardex.idCostos = '';
    const partidaSeleccionada = this.partidas.find((p: any) => p.clave === this.reporteKardex.clavePartida);
    if (partidaSeleccionada && partidaSeleccionada.id !== '0') {
      this.traer.http.get(`${this.API_URL}/traerProductos/${partidaSeleccionada.id}`, { headers: this.getAuthHeaders() })
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

    
    const partidaObj = this.partidas.find((p: any) => String(p.id) === String(this.reporte.partida));
    const claveReal = partidaObj ? partidaObj.clave : (this.reporte.clavePartida || 'general');

    const nombreArchivo = (this.reporte.partida === '0')
      ? `Reporte_de_todas_las_compras_${this.reporte.fechaReporte || 'general'}.pdf`
      : `Reporte_compras_partida_${claveReal}_${this.reporte.fechaReporte}.pdf`;

    Swal.fire({
      title: 'Generando Reporte...',
      text: 'Por favor espere un momento',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(null)
    });

    this.traer.http.post(endpoint, payload, {
      headers: this.getAuthHeaders(),
      responseType: 'blob'
    }).subscribe({
      next: (res: Blob) => {
        Swal.close();
        this.descargarArchivo(res, nombreArchivo.replace('compras', this.modo));
      },
      error: (err) => {
        Swal.close();
        console.error('Error al generar compras:', err);
        Swal.fire('Error', 'No se pudo generar el reporte de compras. Verifique las fechas o el estado del servidor.', 'error');
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

    // Buscamos el proveedor seleccionado para extraer su nombre o razón social de forma limpia
    const proveedorObj = this.proveedores.find((p: any) => String(p.id) === String(this.reporte2.idproveedor));
    // Limpiamos caracteres raros por si la razón social tiene espacios largos, comas o puntos
    const nombreProveedorLimpio = proveedorObj 
      ? (proveedorObj.razon_social || proveedorObj.nombre || 'proveedor').replace(/[^a-zA-Z0-9_-]/g, '_') 
      : 'proveedor';

    // Armamos el nombre dinámico incluyendo la modalidad (entradas/compras) y la fecha del reporte
    const nombreArchivo = `Reporte_${this.modo}_proveedor_${nombreProveedorLimpio}_${this.reporte2.fechaReporte || 'general'}.pdf`;

    Swal.fire({
      title: 'Generando Reporte...',
      text: 'Por favor espere un momento',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(null)
    });

    this.traer.http.post(`${this.API_URL}/reporte/compras-proveedor`, payload, {
      headers: this.getAuthHeaders(),
      responseType: 'blob'
    }).subscribe({
      next: (res: Blob) => {
        Swal.close();
        this.descargarArchivo(res, nombreArchivo);
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

    // Buscamos el artículo seleccionado en el arreglo para extraer su descripción o nombre
    const articuloObj = this.articulosKardex.find((a: any) => String(a.id) === String(this.reporteKardex.idCostos));
    const nombreArticuloCrudo = articuloObj ? (articuloObj.descripcion || articuloObj.nombre || 'articulo') : 'articulo';
    
    // Limpiamos la descripción de caracteres extraños, espacios largos o barras para que el archivo no falle al descargarse
    const nombreArticuloLimpio = nombreArticuloCrudo
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Quita acentos
      .replace(/[^a-zA-Z0-9]/g, '_')   // Cambia todo lo que no sea letra o número por guión bajo
      .replace(/_+/g, '_');            // Evita guiones bajos repetidos

    const nombreArchivo = `Reporte_kardex_partida_${this.reporteKardex.clavePartida}_${nombreArticuloLimpio}.pdf`;

    this.reportesService.descargarKardex(this.reporteKardex.clavePartida, this.reporteKardex.idCostos)
      .subscribe({
        next: (pdfBlob: Blob) => {
          Swal.close();
          // Forzamos la descarga con el nombre limpio y descriptivo
          this.descargarArchivo(pdfBlob, nombreArchivo);
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
    this.traer.http.get(`${this.API_URL}/traerPartidas`, { headers: this.getAuthHeaders() })
      .subscribe((res: any) => {
        this.partidas = res || [];
        this.partidas.unshift({ id: '0', clave: '0', descripcion: 'TODAS' });
      });
  }

  traerProveedores() {
    this.traer.http.get(`${this.API_URL}/traerProveedores`, { headers: this.getAuthHeaders() })
      .subscribe((res: any) => {
        this.proveedores = res || [];
      });
  }

  // CORREGIDO: antes leía this.direccionSeleccionada (nunca asignada) y pedía
  // /traerDatosProveedores/undefined. Ahora lee el proveedor del select y no
  // hace la petición si no hay uno seleccionado.
  CapturarValor() {
    const idproveedor = this.reporte2.idproveedor;
    if (idproveedor === null || idproveedor === undefined || (idproveedor as any) === '') {
      this.datosproveedor = [];
      return;
    }

    this.traer.http.get(`${this.API_URL}/traerDatosProveedores/${idproveedor}`, { headers: this.getAuthHeaders() })
      .subscribe((res: any) => {
        this.datosproveedor = res;
      });
  }
}
