import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { PartidasService } from '../services/partidas.service';
import { partida } from '../models/articulos/alta-articulo';

@Component({
  selector: 'app-registrar-partida',
  templateUrl: './registrar-partida.component.html',
  styleUrls: ['./registrar-partida.component.css']
})
export class RegistrarPartidaComponent implements OnInit, OnDestroy {
  // Longitud de la clave presupuestal (por ahora 5 dígitos, ej. 21101, 21401, 22104)
  readonly LONGITUD_CLAVE = 5;

  partidaNueva: {
    clave: string;
    descripcion: string;
    esactivo: boolean;
  } = {
    clave: '',
    descripcion: '',
    esactivo: true
  };

  partidas: partida[] = [];
  cargandoLista: boolean = false;
  guardando: boolean = false;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  mostrarTabla: boolean = true;

  constructor(
    private partidasService: PartidasService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.configurarDataTable();
    this.cargarPartidas();
  }

  configurarDataTable(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      lengthMenu: [
        [10, 25, 50, 100],
        [10, 25, 50, 100]
      ],
      processing: true,
      searching: true,
      ordering: true,
      autoWidth: false,
      order: [[0, 'asc']],
      language: {
        processing: 'Procesando...',
        search: 'Buscar partida:',
        lengthMenu: 'Mostrar _MENU_ registros',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ partidas',
        infoEmpty: 'Mostrando 0 partidas',
        infoFiltered: '(filtrado de _MAX_ partidas)',
        loadingRecords: 'Cargando partidas...',
        zeroRecords: 'No se encontraron partidas coincidentes',
        emptyTable: 'No hay partidas registradas en el catálogo',
        paginate: {
          first: 'Primero',
          previous: 'Anterior',
          next: 'Siguiente',
          last: 'Último'
        }
      }
    };
  }

  cargarPartidas(): void {
    this.cargandoLista = true;
    this.partidasService.listarPartidas().subscribe({
      next: (resp) => {
        this.partidas = resp.partidas || [];
        this.cargandoLista = false;
        this.renderizarDataTable();
      },
      error: (err) => {
        console.error('Error al cargar partidas:', err);
        this.cargandoLista = false;
        this.partidas = [];
        this.renderizarDataTable();
      }
    });
  }

  // Recrea la tabla para que DataTables tome los datos nuevos sin necesidad de F5
  renderizarDataTable(): void {
    this.mostrarTabla = false;
    this.cdr.detectChanges(); // destruye la tabla anterior

    this.mostrarTabla = true;
    this.cdr.detectChanges(); // pinta la tabla con las filas actuales

    this.dtTrigger.next(null); // inicializa DataTables
  }

  // Solo dígitos; si excede la longitud permitida se muestra el warning
  onClaveInput(): void {
    this.partidaNueva.clave = (this.partidaNueva.clave || '').replace(/\D/g, '');
  }

  get claveExcedida(): boolean {
    return (this.partidaNueva.clave || '').length > this.LONGITUD_CLAVE;
  }

  estaActiva(p: any): boolean {
    return p?.esactivo !== false;
  }

  guardarPartida(form: NgForm): void {
    if (form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Por favor completa todos los campos requeridos.'
      });
      return;
    }

    const clave = this.partidaNueva.clave.trim();
    if (clave.length > this.LONGITUD_CLAVE) {
      Swal.fire({
        icon: 'warning',
        title: 'Clave demasiado larga',
        text: `La clave de la partida debe tener ${this.LONGITUD_CLAVE} dígitos (ej. 21101). Capturaste ${clave.length}.`
      });
      return;
    }
    if (!/^\d+$/.test(clave) || clave.length < this.LONGITUD_CLAVE) {
      Swal.fire({
        icon: 'warning',
        title: 'Clave no válida',
        text: `La clave de la partida debe tener exactamente ${this.LONGITUD_CLAVE} dígitos numéricos (ej. 21101).`
      });
      return;
    }

    this.guardando = true;

    const payload = {
      clave,
      descripcion: this.partidaNueva.descripcion.trim(),
      esactivo: this.partidaNueva.esactivo
    };

    this.partidasService.crearPartida(payload).subscribe({
      next: (resp) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: '¡Registrada!',
          text: resp.msg || 'La partida presupuestal ha sido guardada correctamente.'
        });

        // Limpiar formulario
        form.resetForm({
          clave: '',
          descripcion: '',
          esactivo: true
        });

        // Recargar la lista
        this.cargarPartidas();
      },
      error: (err) => {
        this.guardando = false;
        console.error('Error al guardar partida:', err);
        const mensaje = err.error?.msg || 'Ocurrió un error al intentar registrar la partida';
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: mensaje
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
