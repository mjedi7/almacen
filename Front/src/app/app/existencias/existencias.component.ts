
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import { UsarArticulo } from 'src/app/models/nuevoDocumento';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';
import * as XLSX from 'xlsx';

declare var $: any;

@Component({
  selector: 'app-existencias',
  templateUrl: './existencias.component.html',
  styleUrls: ['./existencias.component.css']
})
export class ExistenciasComponent implements OnInit {

  // Datos generales
  planteles: any[] = [];
  plantelesFiltrados: any[] = [];
  existencias: any[] = [];

busquedaPlantel: string = '';

filtrarPlanteles(): void {
  const busqueda = this.busquedaPlantel
    .trim()
    .toLocaleLowerCase('es');

  this.plantelesFiltrados = this.planteles.filter((p: any) => {
    const descripcion = String(p.descripcion || '')
      .toLocaleLowerCase('es');

    const codigo = String(p.codigo ?? '');

    return descripcion.includes(busqueda) ||
      (p.categoria === 'Planteles' && codigo.includes(busqueda));
  });
}

  opcionSeleccionado: number = 0;
  verSeleccion: number | undefined;
  API_URL = environment.uri_api;

  // Categorías
  categoriaActiva: string | null = null;

  plantelesLista: any[] = [];
  direccionesLista: any[] = [];
  otrosLista: any[] = [];

  // Búsqueda independiente para cada selector
  busquedaPlantelDropdown: string = '';
  busquedaDireccionDropdown: string = '';
  busquedaOtroDropdown: string = '';

  // Estado de los menús
  menuPlantelesAbierto: boolean = false;
  menuDireccionesAbierto: boolean = false;
  menuOtrosAbierto: boolean = false;

  // DataTables
  dtOptions: any = {};
  dtTrigger = new Subject<any>();

  // Datos para usar artículos
  UsarArticulo: UsarArticulo = {
    nombreAutoriza: localStorage.getItem('nombre'),
    nombreSolicita: '',
    cantidadDisponible: null,
    cantidadAUtilizar: null,
    observacion: '',
    fecha: '',
    idPlantel: null,
    idCostos: null
  };

  botonUtilizaArticulo: boolean = false;

  // Identificar usuarios administrativos (rango 3)
esAdministrativo: boolean = localStorage.getItem('permiso') === '3';

  constructor(private traer: TraerDatosService) {}

  ngOnInit(): void {
    this.traerPlanteles();

    const fecha = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
    this.UsarArticulo.fecha = fecha;

    const centroT = localStorage.getItem('centro_trabajo') || '0';
    const centroTrabajoInt = parseInt(centroT, 10);

    if (centroTrabajoInt >= 1 && centroTrabajoInt <= 31) {
      this.botonUtilizaArticulo = true;
    } else if (centroTrabajoInt > 32) {
      this.botonUtilizaArticulo = false;
    }
  }

  // Centro de trabajo seleccionado actualmente
  get centroSeleccionado(): any {
    return this.planteles.find(
      (p: any) => Number(p.id) === Number(this.opcionSeleccionado)
    );
  }

  // Opciones visibles en cada selector
  
get plantelesVisibles(): any[] {
  const texto = this.busquedaPlantelDropdown.trim().toLocaleLowerCase('es');

  if (!texto) {
    return this.plantelesLista;
  }

  // Si se escribe un número, buscar el código exacto.
  if (/^\d+$/.test(texto)) {
    const codigoBuscado = Number(texto);

    return this.plantelesLista.filter((p: any) =>
      Number(p.codigo) === codigoBuscado
    );
  }

  // Si se escribe texto, buscar por nombre del plantel.
  return this.plantelesLista.filter((p: any) =>
    String(p.descripcion || '')
      .toLocaleLowerCase('es')
      .includes(texto)
  );
}

  get direccionesVisibles(): any[] {
    const texto = this.busquedaDireccionDropdown
      .trim()
      .toLocaleLowerCase('es');

    return this.direccionesLista.filter((p: any) =>
      String(p.descripcion || '').toLocaleLowerCase('es').includes(texto)
    );
  }

  get otrosVisibles(): any[] {
    const texto = this.busquedaOtroDropdown
      .trim()
      .toLocaleLowerCase('es');

    return this.otrosLista.filter((p: any) =>
      String(p.descripcion || '').toLocaleLowerCase('es').includes(texto)
    );
  }

  // Cargar los centros de trabajo
  
traerPlanteles(): void {
  const plantel = localStorage.getItem('centro_trabajo');

  this.traer.http.get<any[]>(
    `${this.API_URL}/traerPlanteles/${plantel}`
  ).subscribe({
    next: (res) => {

      // Normalizar descripciones para ignorar mayúsculas y acentos.
      const normalizar = (texto: any): string =>
        String(texto || '')
          .trim()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase('es');

      
const direccionesValidas = [
  'direccion general',
  'direccion administrativa',
  'direccion academica',
  'direccion de planeacion',
  'direccion de tecnologia educativa',
  'direccion de vinculacion'
];

const otrosValidos = [
  'almacen general',
  'sutcecytev'
];

// Clasificar los registros.
this.planteles = res.map((p: any) => {
  const codigo = Number(p.codigo);
  const descripcion = normalizar(p.descripcion);

  let categoria = 'Direcciones generales';

  if (codigo >= 1 && codigo <= 31) {
    categoria = 'Planteles';
  } else if (otrosValidos.includes(descripcion)) {
    categoria = 'Otros';
  }

  return {
    ...p,
    codigo,
    categoria
  };
});


      // Planteles: ordenar por código numérico.
      this.plantelesLista = this.planteles
        .filter((p: any) => p.categoria === 'Planteles')
        .sort((a: any, b: any) => a.codigo - b.codigo);

      // Direcciones generales: solo las válidas y en orden alfabético.
      this.direccionesLista = this.planteles
        .filter((p: any) => p.categoria === 'Direcciones generales')
        .sort((a: any, b: any) =>
          String(a.descripcion || '').trim().localeCompare(
            String(b.descripcion || '').trim(),
            'es',
            { sensitivity: 'base' }
          )
        );

      // Otros: únicamente Almacen General y Sutcecytev.
      this.otrosLista = this.planteles
        .filter((p: any) => p.categoria === 'Otros')
        .sort((a: any, b: any) =>
          String(a.descripcion || '').trim().localeCompare(
            String(b.descripcion || '').trim(),
            'es',
            { sensitivity: 'base' }
          )
        );

      // Conservar la lista general utilizada por el código existente.
      this.plantelesFiltrados = [...this.planteles];
    },
    error: (err) => {
      console.error('Error al cargar planteles:', err);
    }
  });
}

  // Abrir o cerrar el menú de una categoría
  toggleMenu(categoria: string): void {
    if (
      this.categoriaActiva !== null &&
      this.categoriaActiva !== categoria
    ) {
      return;
    }

    this.menuPlantelesAbierto =
      categoria === 'Planteles' && !this.menuPlantelesAbierto;

    this.menuDireccionesAbierto =
      categoria === 'Direcciones generales' &&
      !this.menuDireccionesAbierto;

    this.menuOtrosAbierto =
      categoria === 'Otros' && !this.menuOtrosAbierto;
  }

  // Seleccionar un centro de trabajo
  seleccionarCentro(centro: any, categoria: string): void {
    this.opcionSeleccionado = Number(centro.id);
    this.verSeleccion = Number(centro.id);
    this.categoriaActiva = categoria;

    this.busquedaPlantelDropdown = '';
    this.busquedaDireccionDropdown = '';
    this.busquedaOtroDropdown = '';

    this.menuPlantelesAbierto = false;
    this.menuDireccionesAbierto = false;
    this.menuOtrosAbierto = false;

    this.getListaExistencias(this.verSeleccion);
  }

  // Restablecer la selección para elegir otra categoría
  limpiarSeleccion(): void {
    this.opcionSeleccionado = 0;
    this.verSeleccion = undefined;
    this.categoriaActiva = null;
    this.existencias = [];

    this.busquedaPlantelDropdown = '';
    this.busquedaDireccionDropdown = '';
    this.busquedaOtroDropdown = '';

    this.menuPlantelesAbierto = false;
    this.menuDireccionesAbierto = false;
    this.menuOtrosAbierto = false;

    if ($.fn.DataTable.isDataTable('#articulos')) {
      $('#articulos').DataTable().clear();
      $('#articulos').DataTable().destroy();
    }
  }

  // Obtener existencias del centro seleccionado
  getListaExistencias(idplantel: number): void {
    if ($.fn.DataTable.isDataTable('#articulos')) {
      $('#articulos').DataTable().clear();
      $('#articulos').DataTable().destroy();
    }

    try {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        searching: true,
        processing: true,
        destroy: true,
        language: {
          url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json',
          search: 'Buscar:'
        }
      };

      this.traer.http.get(
        `${this.API_URL}/getExistencias/${idplantel}`
      ).subscribe({
        next: (res: any) => {
          this.existencias = res;
          this.dtTrigger.next(null);
        },
        error: (err) => {
          console.error('Error al obtener existencias:', err);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Conservar el método por si todavía se utiliza en el HTML
  plantelSeleccionado(categoria: string): void {
    if (!this.opcionSeleccionado || this.opcionSeleccionado === 0) {
      this.categoriaActiva = null;
      this.verSeleccion = undefined;
      this.existencias = [];
      return;
    }

    this.categoriaActiva = categoria;
    this.verSeleccion = Number(this.opcionSeleccionado);

    this.getListaExistencias(this.verSeleccion);
  }

  // Guardar datos del artículo seleccionado
  PasarCantidadDisponible(
    cantidadDisponible: number,
    id_costos: number
  ): void {
    this.UsarArticulo.cantidadDisponible = cantidadDisponible;
    this.UsarArticulo.idCostos = id_costos;
  }

  // Registrar uso de artículo
  AsignarArticulo(form: NgForm): void {
    if (this.verSeleccion == null) {
      Swal.fire(
        'Seleccione un centro de trabajo',
        'Debe seleccionar un centro de trabajo primero.',
        'warning'
      );
      return;
    }

    this.UsarArticulo.idPlantel = this.verSeleccion;

    if (
      this.UsarArticulo.cantidadAUtilizar >
        this.UsarArticulo.cantidadDisponible ||
      this.UsarArticulo.cantidadAUtilizar <= 0
    ) {
      Swal.fire({
        title: 'Operación no realizada',
        text: 'La cantidad a utilizar no es válida',
        icon: 'warning'
      });
    } else {
      this.traer.http.post(
        `${this.API_URL}/UsarArticuloPlantel`,
        this.UsarArticulo
      ).subscribe({
        next: (res: any) => {
          if (res === 'Add') {
            Swal.fire(
              'Operación realizada',
              'El artículo se disminuyó del stock',
              'success'
            );

            this.getListaExistencias(this.verSeleccion!);
          } else {
            Swal.fire(
              'Error',
              '¡No se guardaron los cambios!',
              'error'
            );
          }
        },
        error: (err) => {
          console.error('Error al asignar artículo:', err);
          Swal.fire(
            'Error',
            'No se pudo registrar la salida del stock',
            'error'
          );
        }
      });
    }
  }

  // REPORTE GENERAL
  reporteGneral(): void {
    if (this.verSeleccion == null || this.verSeleccion === 0) {
      Swal.fire(
        'Seleccione un centro de trabajo',
        'Debe seleccionar un centro de trabajo para generar el reporte general',
        'warning'
      );
      return;
    }

    Swal.fire({
      title: 'Generando Reporte...',
      text: 'Por favor espere un momento',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(null)
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      }),
      responseType: 'blob' as 'json'
    };

    this.traer.http.get(
      `${this.API_URL}/reporte/general-plantel/${this.verSeleccion}`,
      httpOptions
    ).subscribe({
      next: (res: any) => {
        Swal.close();

    
        const nombreArchivo = `Reporte_general_plantel_${this.verSeleccion}.pdf`;

        
        this.descargarArchivo(res, nombreArchivo);
      },
      error: (err) => {
        Swal.close();

        console.error('Error al generar reporte general:', err);

        Swal.fire(
          'Error',
          'No se pudo generar el reporte general del centro de trabajo.',
          'error'
        );
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

  // Descargar formato PDF y Excel

descargarExcel(): void {
  if (!this.verSeleccion || !this.centroSeleccionado) {
    Swal.fire(
      'Seleccione un centro de trabajo',
      'Debe seleccionar un centro de trabajo para descargar su inventario.',
      'warning'
    );
    return;
  }

  if (!this.existencias || this.existencias.length === 0) {
    Swal.fire(
      'Sin existencias',
      'El centro de trabajo seleccionado no tiene artículos para exportar.',
      'info'
    );
    return;
  }

  const datosExcel = this.existencias.map((existencia: any) => ({
    'Partida': existencia.partida,
    'Artículo': existencia.descripcion,
    'Existencia': existencia.existencias
  }));

  const hoja = XLSX.utils.json_to_sheet(datosExcel);

  hoja['!cols'] = [
    { wch: 15 },
    { wch: 55 },
    { wch: 15 }
  ];

  const libro = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    libro,
    hoja,
    'Inventario'
  );

  const nombreCentro = String(
    this.centroSeleccionado.descripcion || 'Centro de trabajo'
  )
    .trim()
    .replace(/[\\/:*?"<>|]/g, '')
    .replace(/\s+/g, '_');

  const fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  XLSX.writeFile(
    libro,
    `Inventario_${nombreCentro}_${fecha}.xlsx`
  );
}

  descargarFormato(): void {
    const link = document.createElement('a');
    link.href = 'assets/Formato_plantel.pdf';
    link.download = 'Formato_plantel.pdf';
    link.click();
  }
}
