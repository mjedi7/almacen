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

  constructor(private proveedoresService: ProveedoresService) { }

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

  // Convierte a mayúsculas y quita caracteres especiales
  // Bloquea símbolos en tiempo real: solo permite letras A-Z, números, & y Ñ
  onRfcInput(event?: Event): void {
    const input = event ? (event.target as HTMLInputElement) : null;
    let valor = (input ? input.value : this.proveedorNuevo.rfc) || '';

    // Limpia caracteres no permitidos y pasa a mayúsculas
    valor = valor.toUpperCase().replace(/[^A-Z0-9&Ñ]/g, '');

    this.proveedorNuevo.rfc = valor;
    if (input) {
      input.value = valor;
    }
  }

  // Bloquea letras y símbolos: solo permite números (máximo 10 dígitos)
  onTelefonoInput(event?: Event): void {
    const input = event ? (event.target as HTMLInputElement) : null;
    let valor = (input ? input.value : this.proveedorNuevo.telefono) || '';

    valor = valor.replace(/\D/g, ''); // Elimina todo lo que no sea dígito

    this.proveedorNuevo.telefono = valor;
    if (input) {
      input.value = valor;
    }
  }

  // Bloquea letras y símbolos: solo permite números (máximo 5 dígitos)
  onCpInput(event?: Event): void {
    const input = event ? (event.target as HTMLInputElement) : null;
    let valor = (input ? input.value : this.proveedorNuevo.codigo_postal) || '';

    valor = valor.replace(/\D/g, ''); // Elimina todo lo que no sea dígito

    this.proveedorNuevo.codigo_postal = valor;
    if (input) {
      input.value = valor;
    }
  }

  guardarProveedor(form: NgForm): void {
  if (form.invalid) {
    Swal.fire({
      icon: 'warning',
      title: 'Formulario incompleto o inválido',
      text: 'Por favor verifica los campos marcados en rojo.'
    });
    return;
  }

  const rfcLimpio = this.proveedorNuevo.rfc?.trim().toUpperCase() || '';
  if (rfcLimpio.length < 12 || rfcLimpio.length > 13) {
    Swal.fire({
      icon: 'warning',
      title: 'RFC no válido',
      text: 'El RFC debe contener exactamente 12 caracteres (persona moral) o 13 caracteres (persona física).'
    });
    return;
  }

  const cpLimpio = this.proveedorNuevo.codigo_postal?.trim() || '';
  if (cpLimpio && cpLimpio.length !== 5) {
    Swal.fire({
      icon: 'warning',
      title: 'Código Postal incompleto',
      text: 'El código postal debe contener exactamente 5 dígitos numéricos.'
    });
    return;
  }

  const telLimpio = this.proveedorNuevo.telefono?.trim() || '';
  if (telLimpio && telLimpio.length !== 10) {
    Swal.fire({
      icon: 'warning',
      title: 'Teléfono incompleto',
      text: 'El teléfono debe contener exactamente 10 dígitos numéricos.'
    });
    return;
  }

  this.guardando = true;

  const payload: Partial<proveedores> = {
    rfc: rfcLimpio,
    razon_social: this.proveedorNuevo.razon_social.trim(),
    direccion: this.proveedorNuevo.direccion?.trim() || '',
    municipio: this.proveedorNuevo.municipio?.trim() || '',
    telefono: telLimpio,
    codigo_postal: cpLimpio,
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

      form.resetForm({ esactivo: true });
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
