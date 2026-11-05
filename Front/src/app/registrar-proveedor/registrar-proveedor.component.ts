import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { ProveedoresService } from '../services/proveedores.service';
import { proveedores } from '../models/proveedores';

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.component.html',
  styleUrls: ['./registrar-proveedor.component.css']
})
export class RegistrarProveedorComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  proveedorNuevo: {
    rfc: string;
    razon_social: string;
    direccion: string;
    municipio: string;
    telefono: string;
    codigo_postal: string;
    esactivo: boolean;
  } = {
    rfc: '',
    razon_social: '',
    direccion: '',
    municipio: '',
    telefono: '',
    codigo_postal: '',
    esactivo: true
  };

  proveedoresList: proveedores[] = [];
  cargandoLista: boolean = false;
  guardando: boolean = false;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  datatableInicializada: boolean = false;

  constructor(private proveedoresService: ProveedoresService) {}

  ngOnInit(): void {
    this.configurarDataTable();
    this.cargarProveedores();
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
      order: [[1, 'asc']], // Ordenar por Razón Social
      language: {
        processing: 'Procesando...',
        search: 'Buscar proveedor:',
        lengthMenu: 'Mostrar _MENU_ registros',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ proveedores',
        infoEmpty: 'Mostrando 0 proveedores',
        infoFiltered: '(filtrado de _MAX_ proveedores)',
        loadingRecords: 'Cargando proveedores...',
        zeroRecords: 'No se encontraron proveedores coincidentes',
        emptyTable: 'No hay proveedores registrados en el catálogo',
        paginate: {
          first: 'Primero',
          previous: 'Anterior',
          next: 'Siguiente',
          last: 'Último'
        }
      }
    };
  }

  cargarProveedores(): void {
    this.cargandoLista = true;
    this.proveedoresService.listarProveedores().subscribe({
      next: (resp) => {
        this.proveedoresList = resp.proveedores || [];
        this.cargandoLista = false;
        this.renderizarDataTable();
      },
      error: (err) => {
        console.error('Error al cargar proveedores:', err);
        this.cargandoLista = false;
        this.proveedoresList = [];
        this.renderizarDataTable();
      }
    });
  }

  renderizarDataTable(): void {
    if (this.datatableInicializada) {
      if (this.dtElement && this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next(null);
        });
      }
    } else {
      this.datatableInicializada = true;
      this.dtTrigger.next(null);
    }
  }

  onRfcInput(): void {
    if (this.proveedorNuevo.rfc) {
      // Convertir a mayúsculas y remover caracteres no permitidos
      this.proveedorNuevo.rfc = this.proveedorNuevo.rfc
        .toUpperCase()
        .replace(/[^A-Z0-9&Ñ]/g, '')
        .trim();
    }
  }

  guardarProveedor(form: NgForm): void {
    if (form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Por favor llena los campos requeridos correctamente.'
      });
      return;
    }

    const rfcLimpio = this.proveedorNuevo.rfc.trim().toUpperCase();
    if (rfcLimpio.length < 12 || rfcLimpio.length > 13) {
      Swal.fire({
        icon: 'warning',
        title: 'RFC no válido',
        text: 'El RFC debe tener exactamente 12 caracteres (persona moral) o 13 caracteres (persona física).'
      });
      return;
    }

    this.guardando = true;

    const payload: Partial<proveedores> = {
      rfc: rfcLimpio,
      razon_social: this.proveedorNuevo.razon_social.trim(),
      direccion: this.proveedorNuevo.direccion?.trim() || '',
      municipio: this.proveedorNuevo.municipio?.trim() || '',
      telefono: this.proveedorNuevo.telefono?.trim() || '',
      codigo_postal: this.proveedorNuevo.codigo_postal?.trim() || '',
      esactivo: this.proveedorNuevo.esactivo
    };

    this.proveedoresService.crearProveedor(payload).subscribe({
      next: (resp) => {
        this.guardando = false;
        Swal.fire({
          icon: 'success',
          title: '¡Registrado!',
          text: resp.msg || 'El proveedor ha sido registrado con éxito.'
        });

        // Limpiar formulario
        form.resetForm({
          rfc: '',
          razon_social: '',
          direccion: '',
          municipio: '',
          telefono: '',
          codigo_postal: '',
          esactivo: true
        });

        // Recargar tabla de proveedores
        this.cargarProveedores();
      },
      error: (err) => {
        this.guardando = false;
        console.error('Error al registrar proveedor:', err);
        const mensaje = err.error?.msg || 'Ocurrió un error al intentar registrar el proveedor.';
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
