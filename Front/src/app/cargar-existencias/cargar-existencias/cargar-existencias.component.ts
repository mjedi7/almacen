import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { TraerDatosService } from 'src/app/services/traer-datos.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-cargar-existencias',
  templateUrl: './cargar-existencias.component.html',
  styleUrls: ['./cargar-existencias.component.css']
})
export class CargarExistenciasComponent implements OnInit {

  API_URI = environment.uri_api;

  // Catálogos
  partidas: any[] = [];

  // Todos los artículos recibidos del backend
  todosLosArticulos: any[] = [];

  // Artículos filtrados según la partida
  articulos: any[] = [];

  // Tabla temporal
  listaTemporal: any[] = [];


  // Formulario
  partidaSeleccionadaId: number | null = null;

  articuloSeleccionadoId: number | null = null;

  cantidadInput: number | null = null;


  // Estados visuales
  cargandoPartidas: boolean = false;

  cargandoArticulos: boolean = false;

  isSaving: boolean = false;


  constructor(
    private traer: TraerDatosService
  ) { }


  ngOnInit(): void {

    this.cargarPartidas();

    this.cargarTodosLosArticulos();

  }


  // ============================================================
  // PARTIDAS
  // ============================================================

  cargarPartidas(): void {

    this.cargandoPartidas = true;

    this.traer.http
      .get(this.API_URI + '/articulos/partidas')
      .subscribe({

        next: (res: any) => {

          this.cargandoPartidas = false;

          if (Array.isArray(res)) {

            this.partidas = res.filter(
              (p: any) => p.esactivo !== false
            );

          } else if (res?.partidas) {

            this.partidas = res.partidas.filter(
              (p: any) => p.esactivo !== false
            );

          } else {

            this.partidas = [];

          }

          console.log(
            'Partidas disponibles:',
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

          Swal.fire(
            'Error',
            'No fue posible cargar las partidas.',
            'error'
          );

        }

      });

  }


  // ============================================================
  // ARTÍCULOS
  // ============================================================

  cargarTodosLosArticulos(): void {

    this.cargandoArticulos = true;

    /*
     * Utilizamos:
     *
     * GET /articulos
     *
     * Este endpoint ya existe y devuelve cat_articulos.
     * No modificamos backend ni servicios compartidos.
     */
    this.traer.http
      .get(this.API_URI + '/articulos')
      .subscribe({

        next: (res: any) => {

          this.cargandoArticulos = false;

          let datos: any[] = [];


          if (Array.isArray(res)) {

            datos = res;

          } else if (res?.articulos) {

            datos = res.articulos;

          }


          /*
           * Solamente dejamos artículos activos.
           */
          this.todosLosArticulos = datos.filter(
            (art: any) => art.esactivo !== false
          );


          console.log(
            'Total artículos activos:',
            this.todosLosArticulos.length
          );


          /*
           * Si por alguna razón ya existe una partida
           * seleccionada, refrescamos el filtro.
           */
          if (this.partidaSeleccionadaId) {

            this.filtrarArticulosPorPartida();

          }

        },

        error: (error) => {

          this.cargandoArticulos = false;

          this.todosLosArticulos = [];

          console.error(
            'Error al cargar artículos:',
            error
          );

          Swal.fire(
            'Error',
            'No fue posible cargar el catálogo de artículos.',
            'error'
          );

        }

      });

  }


  // ============================================================
  // CAMBIO DE PARTIDA
  // ============================================================

  onPartidaChange(): void {

    /*
     * Limpiamos únicamente artículo y cantidad.
     *
     * NO tocamos listaTemporal.
     */
    this.articuloSeleccionadoId = null;

    this.cantidadInput = null;

    this.articulos = [];


    if (!this.partidaSeleccionadaId) {

      return;

    }


    this.filtrarArticulosPorPartida();

  }


  filtrarArticulosPorPartida(): void {

    if (!this.partidaSeleccionadaId) {

      this.articulos = [];

      return;

    }


    const idPartida =
      Number(this.partidaSeleccionadaId);


    this.articulos =
      this.todosLosArticulos

        .filter(
          (art: any) =>
            Number(art.id_partidas) === idPartida
        )

        .sort(
          (a: any, b: any) => {

            const claveA =
              String(a.clave || '');

            const claveB =
              String(b.clave || '');

            return claveA.localeCompare(
              claveB,
              undefined,
              {
                numeric: true,
                sensitivity: 'base'
              }
            );

          }
        );


    console.log(
      'Artículos de partida',
      idPartida,
      ':',
      this.articulos
    );

  }


  // ============================================================
  // AGREGAR A LISTA
  // ============================================================

  agregarALista(form: NgForm): void {

    if (!this.partidaSeleccionadaId) {

      Swal.fire(
        'Partida requerida',
        'Seleccione una partida.',
        'warning'
      );

      return;

    }


    if (!this.articuloSeleccionadoId) {

      Swal.fire(
        'Artículo requerido',
        'Seleccione un artículo.',
        'warning'
      );

      return;

    }


    if (
      this.cantidadInput === null ||
      Number(this.cantidadInput) <= 0
    ) {

      Swal.fire(
        'Cantidad inválida',
        'Capture una cantidad mayor a cero.',
        'warning'
      );

      return;

    }


    const articulo = this.articulos.find(
      (art: any) =>
        Number(art.id) ===
        Number(this.articuloSeleccionadoId)
    );


    const partida = this.partidas.find(
      (p: any) =>
        Number(p.id) ===
        Number(this.partidaSeleccionadaId)
    );


    if (!articulo) {

      Swal.fire(
        'Artículo no encontrado',
        'No fue posible identificar el artículo seleccionado.',
        'warning'
      );

      return;

    }


    /*
     * Comprobar si el artículo ya está
     * dentro de listaTemporal.
     */
    const existente = this.listaTemporal.find(
      (item: any) =>
        Number(item.id_articulo) ===
        Number(articulo.id)
    );


    if (existente) {

      /*
       * Si ya estaba capturado, sumamos cantidades.
       */
      existente.cantidad =
        Number(existente.cantidad) +
        Number(this.cantidadInput);


      Swal.fire({
        title: 'Cantidad actualizada',
        text:
          'El artículo ya estaba en la lista. ' +
          'La cantidad fue acumulada.',
        icon: 'info',
        timer: 1800,
        showConfirmButton: false
      });

    } else {

      /*
       * Nuevo artículo en lista.
       */
      this.listaTemporal.push({

        id_articulo: articulo.id,

        clave: articulo.clave,

        descripcion: articulo.descripcion,

        id_partida: articulo.id_partidas,

        partida_clave:
          partida?.clave || '',

        partida_descripcion:
          partida?.descripcion || '',

        unidad_medida_id:
          articulo.unidad_medida_id || null,

        cantidad:
          Number(this.cantidadInput)

      });

    }


    /*
     * IMPORTANTE:
     *
     * Dejamos seleccionada la partida para que
     * el usuario pueda cargar muchos artículos
     * de la misma partida rápidamente.
     */
    this.articuloSeleccionadoId = null;

    this.cantidadInput = null;


    /*
     * Reseteamos únicamente estos controles.
     */
    if (form.controls['id_articulo']) {

      form.controls['id_articulo'].reset();

    }


    if (form.controls['cantidad']) {

      form.controls['cantidad'].reset();

    }

  }


  // ============================================================
  // ELIMINAR
  // ============================================================

  eliminarDeLista(index: number): void {

    this.listaTemporal.splice(index, 1);

  }


  // ============================================================
  // VACIAR
  // ============================================================

  vaciarLista(): void {

    if (this.listaTemporal.length === 0) {

      return;

    }


    Swal.fire({

      title: '¿Vaciar la lista?',

      text:
        'Se eliminarán todos los artículos capturados.',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonText: 'Sí, vaciar',

      cancelButtonText: 'Cancelar'

    }).then((result) => {

      if (result.isConfirmed) {

        this.listaTemporal = [];

      }

    });

  }


  // ============================================================
  // CONFIRMACIÓN
  // ============================================================

  enviarAlServidor(): void {

    if (this.listaTemporal.length === 0) {

      Swal.fire(
        'Lista vacía',
        'Debe agregar al menos un artículo.',
        'info'
      );

      return;

    }


    const totalArticulos =
      this.listaTemporal.length;


    const totalUnidades =
      this.listaTemporal.reduce(
        (total: number, item: any) =>
          total + Number(item.cantidad),
        0
      );


    Swal.fire({

      title: '¿Cargar existencias?',

      html: `
        <div style="
          text-align: left;
          line-height: 1.7;
        ">

          <p>
            <strong>
              Artículos diferentes:
            </strong>
            ${totalArticulos}
          </p>

          <p>
            <strong>
              Total de unidades:
            </strong>
            ${totalUnidades}
          </p>

          <hr>

          <p>
            Se registrarán estas existencias
            en el inventario correspondiente
            al usuario autenticado.
          </p>

        </div>
      `,

      icon: 'question',

      showCancelButton: true,

      confirmButtonText: 'Sí, guardar todo',

      cancelButtonText: 'Revisar'

    }).then((result) => {

      if (!result.isConfirmed) {

        return;

      }


      this.guardarDatos();

    });

  }


  // ============================================================
  // GUARDAR
  // ============================================================

  guardarDatos(): void {

    if (this.isSaving) {

      return;

    }


    this.isSaving = true;


    const token =
      localStorage.getItem('token');


    const headers =
      new HttpHeaders({

        Authorization: token || ''

      });


    /*
     * El backend actual únicamente necesita
     * id_articulo y cantidad para procesar
     * cada registro.
     */
    const payload =
      this.listaTemporal.map(
        (item: any) => ({

          id_articulo:
            item.id_articulo,

          cantidad:
            Number(item.cantidad)

        })
      );


    console.log(
      'Payload enviado:',
      payload
    );


    this.traer.http
      .post(
        this.API_URI +
        '/articulos/guardarExistenciasIniciales',

        payload,

        { headers }
      )
      .subscribe({

        next: (res: any) => {

          this.isSaving = false;


          Swal.fire({

            title: '¡Éxito!',

            text:
              res?.mensaje ||
              'Las existencias fueron registradas correctamente.',

            icon: 'success',

            timer: 2500,

            showConfirmButton: false

          });


          this.limpiarTodo();

        },


        error: (error) => {

          this.isSaving = false;


          console.error(
            'Error al guardar existencias:',
            error
          );


          /*
           * MUY IMPORTANTE:
           *
           * En caso de error NO eliminamos
           * listaTemporal.
           *
           * El usuario conserva su captura.
           */
          Swal.fire(
            'Error',
            error?.error?.error ||
            error?.error?.msg ||
            'No se pudieron registrar las existencias.',
            'error'
          );

        }

      });

  }


  // ============================================================
  // LIMPIAR AL TERMINAR CORRECTAMENTE
  // ============================================================

  limpiarTodo(): void {

    this.listaTemporal = [];

    this.partidaSeleccionadaId = null;

    this.articuloSeleccionadoId = null;

    this.cantidadInput = null;

    this.articulos = [];

  }

}