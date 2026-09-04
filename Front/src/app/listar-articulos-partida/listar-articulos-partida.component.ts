import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ListarArticulosPartidaService } from '../services/listar-articulos-partida.service';


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


  // Catálogo de partidas
  partidas: any[] = [];

  // Artículos de la partida seleccionada
  articulos: any[] = [];


  // Partida seleccionada
  idPartidaSeleccionada: number | null = null;


  // Indicadores
  cargandoPartidas: boolean = false;
  cargandoArticulos: boolean = false;


  // DataTables
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  datatableInicializada: boolean = false;


  constructor(
    private listarService: ListarArticulosPartidaService
  ) { }


  ngOnInit(): void {
    this.configurarDataTable();
    this.cargarPartidas();
  }


    // Configurar Datatables
  

  configurarDataTable(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100,
      lengthMenu: [
        [10, 25, 50, 100],
        [10, 25, 50, 100]
      ],

      processing: true,
      searching: true,
      ordering: true,

      // Clave y posteriormente descripción
      order: [
        [0, 'asc'],
        [1, 'asc']
      ],

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

  // CARGAR PARTIDAS
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


          // console.log('Partidas cargadas:', this.partidas;

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


    // CAMBIAR PARTIDA
    onPartidaChange(): void {

    if (!this.idPartidaSeleccionada) {

      this.articulos = [];

      return;

    }


    this.cargarArticulos(
      this.idPartidaSeleccionada
    );

  }


  // CARGAR ARTÍCULOS

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
  
	  get partidaSeleccionada(): any {

	  if (!this.idPartidaSeleccionada) {
		return null;
	  }

	  return this.partidas.find(
		(partida: any) =>
		  Number(partida.id) === Number(this.idPartidaSeleccionada)
	  );

	}


    // ACTUALIZAR DATATABLE
  
      actualizarDataTable(
        nuevosArticulos: any[]
      ): void {
      
        if (!this.datatableInicializada) {
        
          this.articulos = nuevosArticulos;
        
          this.datatableInicializada = true;
        
          setTimeout(() => {
            this.dtTrigger.next(null);
          }, 0);
        
          return;
        }



   // Si por alguna razón Angular todavía no tiene disponible la referencia al DataTable, solamente actualizamos los datos.

  if (!this.dtElement) {

    this.articulos = nuevosArticulos;

    return;
  }


   //La tabla ya existe. Destruimos DataTables antes de cambiar sus datos.

  this.dtElement.dtInstance
    .then((dtInstance: DataTables.Api) => {

      dtInstance.destroy();

      this.articulos = nuevosArticulos;

       // Esperamos a que Angular pinte nuevamente las filas.

      setTimeout(() => {

        this.dtTrigger.next(null);

      }, 0);

    })
    .catch((error) => {

      console.error(
        'Error al reinicializar DataTable:',
        error
      );

      this.articulos = nuevosArticulos;

    });

}


  // LIBERAR DATATABLES

  ngOnDestroy(): void {

    //this.dtTrigger.unsubscribe();
      this.dtTrigger.complete();

  }

}