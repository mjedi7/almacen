import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import {
  ListarArticulosPartidaService
} from '../services/listar-articulos-partida.service';

@Component({
  selector: 'app-listar-articulos-partida',
  templateUrl: './listar-articulos-partida.component.html',
  styleUrls: ['./listar-articulos-partida.component.css']
})
export class ListarArticulosPartidaComponent
  implements OnInit, OnDestroy {

  @ViewChild(
    DataTableDirective,
    { static: false }
  )
  dtElement!: DataTableDirective;


  partidas: any[] = [];

  articulos: any[] = [];


  idPartidaSeleccionada: number | null = null;


  cargandoPartidas: boolean = false;

  cargandoArticulos: boolean = false;


  dtOptions: any = {};

  dtTrigger: Subject<any> = new Subject<any>();

  datatableInicializada: boolean = false;


  constructor(
    private listarService: ListarArticulosPartidaService
  ) { }


  ngOnInit(): void {

    this.configurarDataTable();

    this.cargarPartidas();

  }


  // ==========================================================
  // PARTIDA SELECCIONADA
  // ==========================================================

  get partidaSeleccionada(): any {

    if (!this.idPartidaSeleccionada) {
      return null;
    }

    return this.partidas.find(
      (partida: any) =>
        Number(partida.id) ===
        Number(this.idPartidaSeleccionada)
    );

  }


  // ==========================================================
  // CONFIGURAR DATATABLE
  // ==========================================================

  configurarDataTable(): void {

    this.dtOptions = {

      pagingType: 'full_numbers',

      // Mostrar 100 registros por defecto
      pageLength: 100,

      lengthMenu: [
        [10, 25, 50, 100],
        [10, 25, 50, 100]
      ],

      processing: true,

      searching: true,

      ordering: true,

      autoWidth: false,

      // Clave y después descripción
      order: [
        [0, 'asc'],
        [1, 'asc']
      ],

      /*
       * Traducción local.
       * No usamos CDN para evitar errores CORS.
       */
      language: {

        processing: 'Procesando...',

        search: 'Buscar:',

        lengthMenu:
          'Mostrar _MENU_ registros',

        info:
          'Mostrando _START_ a _END_ de _TOTAL_ artículos',

        infoEmpty:
          'Mostrando 0 artículos',

        infoFiltered:
          '(filtrado de _MAX_ artículos)',

        loadingRecords:
          'Cargando...',

        zeroRecords:
          'No se encontraron artículos',

        emptyTable:
          'No hay artículos registrados para esta partida',

        paginate: {

          first: 'Primero',

          previous: 'Anterior',

          next: 'Siguiente',

          last: 'Último'

        }

      }

    };

  }


  // ==========================================================
  // CARGAR PARTIDAS
  // ==========================================================

  cargarPartidas(): void {

    this.cargandoPartidas = true;


    this.listarService
      .listarPartidas()
      .subscribe({

        next: (resp: any) => {

          this.cargandoPartidas = false;


          if (Array.isArray(resp)) {

            this.partidas = resp.filter(
              (partida: any) =>
                partida.esactivo !== false
            );

          } else {

            this.partidas =
              (resp?.partidas || []).filter(
                (partida: any) =>
                  partida.esactivo !== false
              );

          }


          console.log(
            'Partidas cargadas:',
            this.partidas
          );

        },


        error: (error) => {

          this.cargandoPartidas = false;

          this.partidas = [];

          console.error(
            'Error al cargar partidas:',
            error
          );

        }

      });

  }


  // ==========================================================
  // CAMBIO DE PARTIDA
  // ==========================================================

  onPartidaChange(): void {

    if (!this.idPartidaSeleccionada) {

      this.articulos = [];

      return;

    }


    this.cargarArticulos(
      this.idPartidaSeleccionada
    );

  }


  // ==========================================================
  // CARGAR ARTÍCULOS DE LA PARTIDA
  // ==========================================================

  cargarArticulos(
    idPartida: number
  ): void {

    this.cargandoArticulos = true;


    this.listarService
      .listarArticulosPorPartida(idPartida)
      .subscribe({

        next: (resp: any) => {

          this.cargandoArticulos = false;


          const nuevosArticulos =
            resp?.articulos || [];


          console.log(
            'Artículos encontrados:',
            nuevosArticulos
          );


          this.actualizarDataTable(
            nuevosArticulos
          );

        },


        error: (error) => {

          this.cargandoArticulos = false;

          console.error(
            'Error al cargar artículos:',
            error
          );


          this.actualizarDataTable([]);

        }

      });

  }


  // ==========================================================
  // ACTUALIZAR DATATABLE
  // ==========================================================

  actualizarDataTable(
    nuevosArticulos: any[]
  ): void {

    /*
     * Primera carga.
     */
    if (!this.datatableInicializada) {

      this.articulos =
        nuevosArticulos;


      this.datatableInicializada =
        true;


      setTimeout(() => {

        this.dtTrigger.next(null);

      }, 0);


      return;

    }


    /*
     * Protección por si Angular todavía
     * no tiene disponible la referencia.
     */
    if (!this.dtElement) {

      this.articulos =
        nuevosArticulos;

      return;

    }


    /*
     * Destruir DataTables anterior,
     * actualizar Angular y volver a iniciar.
     */
    this.dtElement.dtInstance
      .then(
        (dtInstance: any) => {

          dtInstance.destroy();


          this.articulos =
            nuevosArticulos;


          setTimeout(() => {

            this.dtTrigger.next(null);

          }, 0);

        }
      )
      .catch((error) => {

        console.error(
          'Error al reinicializar DataTable:',
          error
        );


        this.articulos =
          nuevosArticulos;

      });

  }


  // ==========================================================
  // DESTRUIR SUBJECT
  // ==========================================================

  ngOnDestroy(): void {

    this.dtTrigger.complete();

  }

}