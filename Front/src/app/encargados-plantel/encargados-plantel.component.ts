import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CentroTrabajoService, CentroTrabajo } from '../services/centro-trabajo.service';

@Component({
  selector: 'app-encargados-plantel',
  templateUrl: './encargados-plantel.component.html',
  styleUrls: ['./encargados-plantel.component.css']
})
export class EncargadosPlantelComponent implements OnInit, OnDestroy {

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  centros: CentroTrabajo[] = [];
  cargando: boolean = true;

  // Centro seleccionado para edición
  centroSeleccionado: CentroTrabajo | null = null;
  nuevoDirector: string = '';
  nuevoAdministrativo: string = '';
  campoEdicion: 'director' | 'administrativo' | 'ambos' = 'ambos';

  constructor(
    private centroService: CentroTrabajoService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Verificar que solo tipo de usuario 0 tenga acceso
    const permiso = parseInt(localStorage.getItem('permiso') || '-1', 10);
    if (permiso !== 0) {
      Swal.fire({
        icon: 'error',
        title: 'Acceso Denegado',
        text: 'Solo los administradores generales (tipo 0) pueden acceder a este módulo.'
      });
      this.router.navigate(['/dashboard']);
      return;
    }

    this.configurarDatatable();
    this.cargarCentros();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  configurarDatatable(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 50,
      lengthMenu: [10, 25, 50, 100],
      searching: true,
      processing: true,
      destroy: true,
      responsive: true,
      order: [[1, 'asc']], // Ordenar por Plantel / Descripción
      language: {
        lengthMenu: 'Mostrar _MENU_ planteles',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ planteles',
        infoEmpty: 'Mostrando 0 a 0 de 0 planteles',
        infoFiltered: '(filtrado de un total de _MAX_ registros)',
        search: 'Buscar plantel o encargado:',
        zeroRecords: 'No se encontraron planteles coincidentes',
        paginate: {
          first: 'Primero',
          last: 'Último',
          next: 'Siguiente',
          previous: 'Anterior'
        }
      }
    };
  }

  cargarCentros(): void {
    this.cargando = true;
    this.centroService.getCentrosTrabajo().subscribe({
      next: (res: any) => {
        this.centros = res.centros || [];
        this.cargando = false;

        // Reinicializar DataTables
        if (this.dtElement && this.dtElement.dtInstance) {
          this.dtElement.dtInstance.then((dtInstance: any) => {
            dtInstance.destroy();
            this.dtTrigger.next(null);
          });
        } else {
          this.dtTrigger.next(null);
        }
      },
      error: (err) => {
        console.error('Error al cargar centros de trabajo:', err);
        this.cargando = false;
        Swal.fire({
          icon: 'error',
          title: 'Error de carga',
          text: 'No se pudieron obtener los centros de trabajo.'
        });
      }
    });
  }

  /**
   * Modal para editar el Director
   */
  abrirEditarDirector(centro: CentroTrabajo, modal: any): void {
    this.centroSeleccionado = { ...centro };
    this.nuevoDirector = centro.director || '';
    this.campoEdicion = 'director';
    this.modalService.open(modal, { centered: true, backdrop: 'static' });
  }

  /**
   * Modal para editar el Administrativo
   */
  abrirEditarAdministrativo(centro: CentroTrabajo, modal: any): void {
    this.centroSeleccionado = { ...centro };
    this.nuevoAdministrativo = centro.administrativo || '';
    this.campoEdicion = 'administrativo';
    this.modalService.open(modal, { centered: true, backdrop: 'static' });
  }

  /**
   * Modal para editar Ambos encargados
   */
  abrirEditarAmbos(centro: CentroTrabajo, modal: any): void {
    this.centroSeleccionado = { ...centro };
    this.nuevoDirector = centro.director || '';
    this.nuevoAdministrativo = centro.administrativo || '';
    this.campoEdicion = 'ambos';
    this.modalService.open(modal, { centered: true, backdrop: 'static' });
  }

  /**
   * Guardar cambios del modal
   */
  guardarEdicion(modal: any): void {
    if (!this.centroSeleccionado) return;

    const id = this.centroSeleccionado.id;

    if (this.campoEdicion === 'director') {
      if (!this.nuevoDirector.trim()) {
        Swal.fire({
          icon: 'warning',
          title: 'Campo Requerido',
          text: 'Por favor ingrese el nombre del Director.'
        });
        return;
      }

      this.centroService.actualizarDirector(id, this.nuevoDirector.trim()).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: '¡Director Actualizado!',
            text: `Se actualizó el director de ${this.centroSeleccionado?.descripcion}`,
            timer: 2000,
            showConfirmButton: false
          });
          modal.close();
          this.recargarRegistro(id, { director: this.nuevoDirector.trim() });
        },
        error: (err) => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al actualizar el Director.'
          });
        }
      });

    } else if (this.campoEdicion === 'administrativo') {
      if (!this.nuevoAdministrativo.trim()) {
        Swal.fire({
          icon: 'warning',
          title: 'Campo Requerido',
          text: 'Por favor ingrese el nombre del Administrativo.'
        });
        return;
      }

      this.centroService.actualizarAdministrativo(id, this.nuevoAdministrativo.trim()).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: '¡Administrativo Actualizado!',
            text: `Se actualizó el responsable administrativo de ${this.centroSeleccionado?.descripcion}`,
            timer: 2000,
            showConfirmButton: false
          });
          modal.close();
          this.recargarRegistro(id, { administrativo: this.nuevoAdministrativo.trim() });
        },
        error: (err) => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al actualizar el Administrativo.'
          });
        }
      });

    } else {
      // Guardar ambos
      this.centroService.actualizarEncargados(id, {
        director: this.nuevoDirector.trim(),
        administrativo: this.nuevoAdministrativo.trim()
      }).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: '¡Encargados Actualizados!',
            text: `Se actualizaron los encargados de ${this.centroSeleccionado?.descripcion}`,
            timer: 2000,
            showConfirmButton: false
          });
          modal.close();
          this.recargarRegistro(id, {
            director: this.nuevoDirector.trim(),
            administrativo: this.nuevoAdministrativo.trim()
          });
        },
        error: (err) => {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al actualizar los encargados.'
          });
        }
      });
    }
  }

  /**
   * Actualiza el registro localmente sin parpadear toda la tabla
   */
  private recargarRegistro(id: number, cambios: Partial<CentroTrabajo>): void {
    const item = this.centros.find(c => c.id === id);
    if (item) {
      Object.assign(item, cambios);
    }
  }

}
