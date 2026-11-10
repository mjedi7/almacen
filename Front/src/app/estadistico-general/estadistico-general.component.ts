import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import * as Chart from 'chart.js';
import { Subject } from 'rxjs';
import { TraerDatosService } from '../services/traer-datos.service';
import { environment } from 'src/environments/environment';
import { Transferencias } from '../models/nuevoDocumento';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';

declare var $: any;

@Component({
  selector: 'app-estadistico-general',
  templateUrl: './estadistico-general.component.html',
  styleUrls: ['./estadistico-general.component.css']
})
export class EstadisticoGeneralComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  

 transferencia: Transferencias = {
    plantel: null,
    partida: null,
    idcosto: null,
    fecha: null,
    cantidadEnStock: null,
    cantidadTransferir: null,
    consecutivo: null,
    autorizo: localStorage.getItem('nombre'),
    recibio: '',
    nombreProducto: ''
  };

  plantelesTransferencia: number[] = [];
  productosFiltrados: any[] = [];
  productoBuscado: string = '';
  dtOptions: any = {};
  dtTrigger = new Subject<any>(); // Única declaración limpia
  API_URL = environment.uri_api;
  articulosTransferir: any = [];
  totales: any;
  planteles: any = [];
  partidas: any = [];
  productos: any = [];
  datosAdmin: any = [];
  direccionSeleccionada: string = '';
  asig: any[] = [];
  numlista: number = 0;
  sumagenerados: number = 0;
  mostrarBotonTransferir: boolean = false;


  plantelesFiltrados: any[] = [];
  plantelesLista: any[] = [];
  direccionesLista: any[] = [];
  otrosLista: any[] = [];

  // Búsqueda independiente para cada categoría
  busquedaPlantelDropdown: string = '';
  busquedaDireccionDropdown: string = '';
  busquedaOtroDropdown: string = '';

  // Estado de los menús desplegables
  menuPlantelesAbierto: boolean = false;
  menuDireccionesAbierto: boolean = false;
  menuOtrosAbierto: boolean = false;

  // Categoría activa actualmente
  categoriaActiva: string | null = null;
  opcionSeleccionado: number = 0;

  // Identificar usuarios administrativos (rango 3)
  esAdministrativo: boolean = localStorage.getItem('permiso') === '3';


  constructor(private traer: TraerDatosService, private cdr: ChangeDetectorRef) { }

  public chart: Chart;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      searching: false,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
      }
    };

    this.traerPartidas();
    this.traerPlanteles();
    this.TraerConsecutivo();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next(null);
    });
  }

  // Getter para obtener el centro seleccionado actual
  get centroSeleccionado(): any {
    return this.planteles.find(
      (p: any) => Number(p.id) === Number(this.opcionSeleccionado)
    );
  }

  // Getters para filtrar las opciones en tiempo real
  get plantelesVisibles(): any[] {
    const texto = this.busquedaPlantelDropdown.trim().toLocaleLowerCase('es');
    if (!texto) return this.plantelesLista;

    if (/^\d+$/.test(texto)) {
      const codigoBuscado = Number(texto);
      return this.plantelesLista.filter((p: any) => Number(p.codigo) === codigoBuscado);
    }

    return this.plantelesLista.filter((p: any) =>
      String(p.descripcion || '').toLocaleLowerCase('es').includes(texto)
    );
  }

  get direccionesVisibles(): any[] {
    const texto = this.busquedaDireccionDropdown.trim().toLocaleLowerCase('es');
    return this.direccionesLista.filter((p: any) =>
      String(p.descripcion || '').toLocaleLowerCase('es').includes(texto)
    );
  }

  get otrosVisibles(): any[] {
    const texto = this.busquedaOtroDropdown.trim().toLocaleLowerCase('es');
    return this.otrosLista.filter((p: any) =>
      String(p.descripcion || '').toLocaleLowerCase('es').includes(texto)
    );
  }

  // Control para abrir o cerrar menús
  toggleMenu(categoria: string): void {
    if (this.categoriaActiva !== null && this.categoriaActiva !== categoria) {
      return;
    }

    this.menuPlantelesAbierto = categoria === 'Planteles' && !this.menuPlantelesAbierto;
    this.menuDireccionesAbierto = categoria === 'Direcciones generales' && !this.menuDireccionesAbierto;
    this.menuOtrosAbierto = categoria === 'Otros' && !this.menuOtrosAbierto;
  }

  // Seleccionar un centro de trabajo desde el menú desplegable
  seleccionarCentroDropdown(centro: any, categoria: string): void {
    this.opcionSeleccionado = Number(centro.id);
    this.transferencia.plantel = Number(centro.id);
    this.categoriaActiva = categoria;

    this.busquedaPlantelDropdown = '';
    this.busquedaDireccionDropdown = '';
    this.busquedaOtroDropdown = '';

    this.menuPlantelesAbierto = false;
    this.menuDireccionesAbierto = false;
    this.menuOtrosAbierto = false;

    // Ejecutamos tu lógica existente cuando se selecciona un plantel
    this.plantelSeleccionado();
  }

  // Limpiar la selección para cambiar de categoría
  limpiarSeleccion(): void {
    this.opcionSeleccionado = 0;
    this.transferencia.plantel = null;
    this.categoriaActiva = null;

    this.busquedaPlantelDropdown = '';
    this.busquedaDireccionDropdown = '';
    this.busquedaOtroDropdown = '';

    this.menuPlantelesAbierto = false;
    this.menuDireccionesAbierto = false;
    this.menuOtrosAbierto = false;

    // Limpiamos los datos del administrativo asociado si aplica
    this.datosAdmin = [];
    this.transferencia.recibio = '';
  }

  filtrarProductos() {
    const texto = this.productoBuscado.toLowerCase();
    this.productosFiltrados = this.productos.filter(p =>
      p.nombre_producto.toLowerCase().includes(texto)
    );
  }

  seleccionarProducto(producto: any) {
    this.transferencia.idcosto = producto.id_costos;
    this.productoBuscado = producto.nombre_producto;
    this.productosFiltrados = [];
    this.TraerTotalDisponible();
  }

getListaArticulosTransferir() {
    const folio = this.transferencia.consecutivo;
    
    const plantelProtegido = this.transferencia.plantel;
    const partidaProtegida = this.transferencia.partida;

    this.traer.http.get(`${this.API_URL}/getListaArticulosTransferir/${folio}`)
      .subscribe({
        next: (res: any) => {
          console.log("Datos recibidos del servidor:", res);
          
          // Clonamos el arreglo para romper la referencia y obligar a Angular a refrescar
          this.articulosTransferir = res ? [...res] : [];
          
          this.transferencia.plantel = plantelProtegido;
          this.transferencia.partida = partidaProtegida;

          this.mostrarBotonTransferir = this.articulosTransferir.length > 0;

          // Forzamos la detección de cambios
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error al cargar artículos a transferir:', err);
        }
      });
  }

  eliminarArticulo(idarticulo: number) {
    this.traer.http.delete(`${this.API_URL}/eliminarArticulo/${idarticulo}`)
      .subscribe(() => {
        this.getListaArticulosTransferir();
      });
  }

  confirmarTranferencia() {
    Swal.fire({
      title: '¿Estás seguro de terminar la lista?',
      text: 'Una vez terminada no podrá agregar nuevos artículos',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, terminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.traer.http.get(`${this.API_URL}/confirmarTransferencia/${this.transferencia.consecutivo}`)
          .subscribe((res: any) => {
            if (res === 'ListaOk') {
              Swal.fire({
                title: 'Generando formatos...',
                text: 'Los artículos se asignaron. Se están preparando los documentos.',
                icon: 'info',
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading(null);
                }
              });

              this.obtenerPlantelesTransferencia();
            }
          });
      }
    });
  }

  obtenerPlantelesTransferencia() {
    this.traer.http.get(
      this.API_URL + `/getListaArticulosTransferir/${this.transferencia.consecutivo}`
    ).subscribe({
      next: (res: any) => {
        this.plantelesTransferencia = Array.from(
          new Set<number>(
            res.map((movimiento: any) =>
              Number(movimiento.id_centrotrabajo_transfiere)
            )
          )
        );

        if (this.plantelesTransferencia.length === 0) {
          Swal.fire(
            'Error',
            'No se encontraron planteles para esta transferencia',
            'error'
          );
          return;
        }

        this.generarFormatoListaSurtido(0);
      },
      error: (err) => {
        console.error("Error al obtener los planteles de la transferencia", err);
        Swal.fire(
          'Error',
          'No se pudieron obtener los planteles de la transferencia',
          'error'
        );
      }
    });
  }

  // Usuario logueado (el mismo de "autorizo"); se envía como query param para el PDF
  get usuarioLogueado(): string {
    return encodeURIComponent(localStorage.getItem('nombre') || '');
  }

  generarFormatoListaSurtido(indice: number) {
    const plantel = this.plantelesTransferencia[indice];

    this.traer.http.get(
      this.API_URL + `/formatoListaArticulosSurtidos/${this.transferencia.consecutivo}/${plantel}?usuario=${this.usuarioLogueado}`,
      { responseType: 'text' }
    ).subscribe({
      next: (res: any) => {
        this.generarFormatoListaSurtidoSinMontos(indice);
      },
      error: (err) => {
        console.error("Error al generar el PDF con montos", err);
        Swal.fire(
          'Error',
          'Hubo un error al generar el PDF con montos',
          'error'
        );
      }
    });
  }

  generarFormatoListaSurtidoSinMontos(indice: number) {
    const plantel = this.plantelesTransferencia[indice];

    this.traer.http.get(
      this.API_URL + `/formatoListaArticulosSurtidosSinMontos/${this.transferencia.consecutivo}/${plantel}?usuario=${this.usuarioLogueado}`,
      { responseType: 'text' }
    ).subscribe({
      next: (res: any) => {
        const siguienteIndice = indice + 1;
        if (siguienteIndice < this.plantelesTransferencia.length) {
          this.generarFormatoListaSurtido(siguienteIndice);
        } else {
          this.descargarZip();
        }
      },
      error: (err) => {
        console.error("Error al generar el PDF sin montos", err);
        Swal.fire(
          'Error',
          'Hubo un error al generar el PDF sin montos',
          'error'
        );
      }
    });
  }

  traerPartidas() {
    this.traer.http.get(`${this.API_URL}/traerPartidas`)
      .subscribe((res: any) => {
        this.partidas = res;
      });
  }

  descargarZip() {
    this.traer.http.post(`${this.API_URL}/descargarzip`, null, { responseType: 'blob' })
      .subscribe({
        next: (res: Blob) => {
          const fileURL = window.URL.createObjectURL(res);
          const link = document.createElement('a');
          link.href = fileURL;
          link.download = `Transferencia_${this.transferencia.consecutivo}_${this.transferencia.plantel}_${this.transferencia.fecha}.zip`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(fileURL);

          Swal.fire({
            title: 'Lista asignada y descargada',
            text: 'Los archivos PDF se han descargado correctamente en tu equipo.',
            icon: 'success'
          }).then(() => {
            location.reload();
          });
        },
        error: (error) => {
          console.error('Error descargando ZIP', error);
          Swal.fire('Error', 'No se pudo generar o descargar el archivo ZIP con los formatos.', 'error');
        }
      });
  }

opcionSeleccionadaX() {
    // 1. Limpiamos por completo el producto actual y los stocks en cuanto se cambia de partida
    this.transferencia.idcosto = null;
    this.productoBuscado = '';
    this.productos = [];
    this.productosFiltrados = [];
    this.transferencia.cantidadEnStock = 0;
    this.transferencia.cantidadTransferir = null;

    // 2. Pedimos los nuevos productos exclusivos de la nueva partida seleccionada
    this.traer.http.get(`${this.API_URL}/traerProductosDesdeTransferir/${this.transferencia.partida}`)
      .subscribe((res: any) => {
        this.productos = res || [];
        this.productosFiltrados = res || [];
        this.cdr.detectChanges();
      });
  }

  plantelSeleccionado() {
    this.traer.http.get(`${this.API_URL}/traerDatosAdministrativo/${this.transferencia.plantel}`)
      .subscribe((res: any) => {
        this.datosAdmin = res;
        if (res && res.length > 0) {
          this.transferencia.recibio = res[0].administrativo;
        }
      });
  }

traerPlanteles() {
    const plantelUsuario = localStorage.getItem('centro_trabajo');

    // Mantenemos tu ruta o adaptamos si requiere el parámetro (en existencias usabas /traerPlanteles/${plantelUsuario})
    this.traer.http.get(`${this.API_URL}/traerPlanteles`)
      .subscribe((res: any) => {
        const normalizar = (texto: any): string =>
          String(texto || '')
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase('es');

        const otrosValidos = ['almacen general', 'sutcecytev'];

        this.planteles = res.map((p: any) => {
          const codigo = Number(p.codigo);
          const descripcion = normalizar(p.descripcion);
          let categoria = 'Direcciones generales';

          if (codigo >= 1 && codigo <= 31) {
            categoria = 'Planteles';
          } else if (otrosValidos.includes(descripcion)) {
            categoria = 'Otros';
          }

          return { ...p, codigo, categoria };
        });

        // Ordenar planteles por código numérico
        this.plantelesLista = this.planteles
          .filter((p: any) => p.categoria === 'Planteles')
          .sort((a: any, b: any) => a.codigo - b.codigo);

        // Direcciones generales en orden alfabético
        this.direccionesLista = this.planteles
          .filter((p: any) => p.categoria === 'Direcciones generales')
          .sort((a: any, b: any) => String(a.descripcion || '').trim().localeCompare(String(b.descripcion || '').trim(), 'es', { sensitivity: 'base' }));

        // Otros en orden alfabético
        this.otrosLista = this.planteles
          .filter((p: any) => p.categoria === 'Otros')
          .sort((a: any, b: any) => String(a.descripcion || '').trim().localeCompare(String(b.descripcion || '').trim(), 'es', { sensitivity: 'base' }));
      });
  }

  TraerTotalDisponible() {
    this.traer.http.get(`${this.API_URL}/traerTotalDisponible/${this.transferencia.idcosto}`)
      .subscribe((res: any) => {
        if (res === 'SinDatos') {
          this.transferencia.cantidadEnStock = 0;
        } else {
          this.transferencia.cantidadEnStock = (res.length > 0 && res[0].existencias) ? res[0].existencias : 0;
        }
      });
  }

  TraerConsecutivo() {
    this.traer.http.get(`${this.API_URL}/traerConsecutivo`)
      .subscribe((res: any) => {
        this.transferencia.consecutivo = res;
      });
  }

agregarArticulo(form: NgForm) {
    // Si no hay un idcosto seleccionado de la lista desplegable, se frena en seco
    if (!this.transferencia.idcosto) {
      Swal.fire({
        title: 'Producto no válido',
        text: 'Debe seleccionar un producto haciendo clic en las opciones de la lista desplegable',
        icon: 'warning'
      });
      return;
    } 
    
    if (!Number.isInteger(Number(this.transferencia.cantidadTransferir))) {
      Swal.fire({
        title: 'Cantidad no válida',
        text: 'La cantidad a transferir debe ser número entero',
        icon: 'warning'
      });
      return;
    }

    if (!form.valid) {
      Swal.fire({
        title: 'Operación no realizada',
        text: 'Complete todos los campos',
        icon: 'warning'
      });
      return;
    }

    if (this.transferencia.cantidadEnStock < this.transferencia.cantidadTransferir) {
      Swal.fire({
        title: 'Operación no realizada',
        text: 'No hay suficiente stock de este producto',
        icon: 'warning'
      });
      return;
    } 
    
    if (this.transferencia.cantidadTransferir <= 0) {
      Swal.fire({
        title: 'Operación no realizada',
        text: 'Debe transferir mínimo 1 artículo',
        icon: 'warning'
      });
      return;
    }

    // Enviamos al backend de forma segura
    this.traer.http.post(`${this.API_URL}/TransferirArticulosPlantel`, this.transferencia)
      .subscribe((res: any) => {
     if (res === 'Add') {
          Swal.fire('Ok', 'Artículo agregado a la lista', 'success');
          
          this.getListaArticulosTransferir();

          // Limpieza total
          this.transferencia.idcosto = null;
          this.productoBuscado = '';
          this.transferencia.cantidadEnStock = null;
          this.transferencia.cantidadTransferir = null;

          // RECARGAMOS LOS PRODUCTOS DE LA PARTIDA ACTUAL PARA QUE EL SELECT VUELVA A FUNCIONAR
          if (this.transferencia.partida) {
            this.opcionSeleccionadaX();
          }

          form.controls['Producto']?.reset();
          form.controls['cantidadTransferir']?.reset();
          form.controls['cantidadEnStock']?.reset();
          
          this.cdr.detectChanges();
        } else if (res === 'Duplicado') {
          Swal.fire('Artículo Duplicado', 'Este artículo ya fue agregado a la lista', 'warning');
        } else {
          Swal.fire('Error', '¡No se guardaron los cambios!', 'error');
        }
      });
  }

  validarProducto() {
    this.transferencia.idcosto = null;
  }
}