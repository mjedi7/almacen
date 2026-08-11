import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
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
  datoss = JSON.parse(localStorage.getItem('datos')!);
  mailusu = this.datoss.correop;
  idPlantelUsuario = this.datoss.id_plantel;

  partidas: any[] = [];
  articulos: any[] = [];
  listaTemporal: any[] = [];

  partidaSeleccionadaId: any = null;
  articuloSeleccionadoId: any = null;
  cantidadInput: number | null = null;

  articuloBuscado: string = '';

  isSaving: boolean = false;

  // Para rastrear si ya hay un artículo en la lista
  articuloAgregado: boolean = false;

  constructor(private traer: TraerDatosService) { }

  ngOnInit(): void {
    this.cargarPartidas();
  }

  /*cargarPartidas() {
    this.traer.http.get(this.API_URI + '/articulos/partidas')
    .subscribe((res: any) => {
      if (res && res.partidas) {
        this.partidas = res.partidas;
        console.log("Trae datos " + this.partidas)
      }
    }, error => {
      console.error('Error al cargar partidas:', error);
    });
}*/

cargarPartidas() {
  this.traer.http.get(this.API_URI + '/articulos/partidas')
    .subscribe((res: any) => {
      console.log('Respuesta cruda del backend partidas:', res);

      if (Array.isArray(res)) {
        // Caso A: El backend responde [ { id: 1, descripcion: '...' }, ... ]
        this.partidas = res;
      } else if (res && res.partidas) {
        // Caso B: El backend responde { partidas: [ ... ] }
        this.partidas = res.partidas;
      } else {
        this.partidas = [];
      }

      console.log('Arreglo de partidas listo para el select:', this.partidas);
    }, error => {
      console.error('Error al cargar partidas:', error);
    });
}

  /*onPartidaChange() {
    // Limpiar artículo seleccionado al cambiar partida
    this.articuloSeleccionadoId = null;
    this.articuloBuscado = '';      
    this.articulos = [];

    if (!this.partidaSeleccionadaId) return;

    this.traer.http.get(this.API_URI + '/articulos/general?id_partidas=' + this.partidaSeleccionadaId)
      .subscribe((res: any) => {
        if (res && res.articulos) {
          this.articulos = res.articulos;
        }
      }, error => {
        console.error('Error al cargar artículos:', error);
      });
  }*/

      onPartidaChange() {
  this.articuloSeleccionadoId = null;
  this.articuloBuscado = '';      
  this.articulos = [];

  if (!this.partidaSeleccionadaId) return;

  this.traer.http.get(this.API_URI + '/articulos/general?id_partidas=' + this.partidaSeleccionadaId)
    .subscribe((res: any) => {
      console.log('Respuesta de artículos:', res);
      
      if (Array.isArray(res)) {
        this.articulos = res;
      } else if (res && res.articulos) {
        this.articulos = res.articulos;
      }
    }, error => {
      console.error('Error al cargar artículos:', error);
    });
}

  agregarALista(form: any) {
    // 🔥 RESTRICCIÓN: Si ya hay un artículo, no permitir agregar otro
    if (this.articuloAgregado) {
      Swal.fire('Límite alcanzado', 'Solo se permite un artículo por carga. Guarda o elimina el artículo actual para agregar otro.', 'info');
      return;
    }

    if (this.articuloSeleccionadoId && this.cantidadInput !== null && this.cantidadInput > 0) {
      const art = this.articulos.find(a => a.id == this.articuloSeleccionadoId);
      const partida = this.partidas.find(p => p.id == this.partidaSeleccionadaId);

      this.listaTemporal.push({
        id_articulo: this.articuloSeleccionadoId,
        descripcion: art ? art.descripcion : 'Artículo ' + this.articuloSeleccionadoId,
        partida: partida ? partida.descripcion : '',
        cantidad: this.cantidadInput,
        id_plantel: this.idPlantelUsuario,
        usuario: this.mailusu
      });

      // 🔥 MARCAR QUE YA HAY UN ARTÍCULO AGREGADO
      this.articuloAgregado = true;

      // Limpiar selecciones
      this.partidaSeleccionadaId = null;
      this.articuloBuscado = '';
      this.articuloSeleccionadoId = null;
      this.articulos = [];
      this.cantidadInput = null;
      if (form.controls['cantidad']) {
        form.controls['cantidad'].reset();
      }
    } else {
      Swal.fire('Atención', 'Seleccione una partida, un artículo y una cantidad válida', 'warning');
    }
  }

  eliminarDeLista(index: number) {
    this.listaTemporal.splice(index, 1);

    // 🔥 Si se elimina el artículo, permitir agregar otro
    if (this.listaTemporal.length === 0) {
      this.articuloAgregado = false;
    }
  }

  enviarAlServidor() {

    if (this.listaTemporal.length === 0) {
      Swal.fire('Tabla vacía', 'Debe añadir al menos un artículo', 'info');
      return;
    }
  
    Swal.fire({
      title: '¿Finalizar carga de inventario?',
      text: `Se registrarán ${this.listaTemporal.length} artículos para su plantel.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, guardar todo',
      cancelButtonText: 'Revisar'
    }).then((result) => {
  
      if (!result.isConfirmed) return;
  
      // LLAMAMOS guardarDatos() SOLO SI EL USUARIO CONFIRMÓ
      this.guardarDatos();
  
    });
  }

  guardarDatos() {

    this.isSaving = true;
  
    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: token || ''
    });
  
    this.traer.http.post(
      this.API_URI + '/articulos/guardarExistenciasIniciales',
      this.listaTemporal,
      { headers }
    )
    .subscribe({
      next: (res: any) => {
    
        Swal.fire('¡Éxito!', 'El inventario ha sido actualizado.', 'success');
    
        // 🔥 FORZAR LIMPIEZA
        this.limpiarTodo();
    
      },
      error: (error) => {
    
        console.error('Error en el servidor:', error);
    
        Swal.fire('Error', 'No se pudo guardar la información en el servidor.', 'error');
    
        // 🔥 AUN ASÍ LIMPIA (opcional, tú decides)
        this.limpiarTodo();
      }
    });
  }

  limpiarTodo() {
    this.listaTemporal.length = 0;
    // 🔥 RESET DEL FLAG
    this.articuloAgregado = false;
    this.resetFormulario();
    this.isSaving = false;
  }

  resetFormulario() {
    this.partidaSeleccionadaId = null;
    this.articuloSeleccionadoId = null;
    this.cantidadInput = null;
  }

  onArticuloInput() {
    const seleccionado = this.articulos.find(
      art => (art.clave + ' — ' + art.descripcion) === this.articuloBuscado
    );
    this.articuloSeleccionadoId = seleccionado ? seleccionado.id : null;
  }

}