import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticulosService } from 'src/app/services/articulos.service'; 
import { articulo, partida, unidad_medida } from 'src/app/models/articulos/alta-articulo'; 
import Swal from 'sweetalert2';
import { PartidasService } from 'src/app/services/partidas.service'; 
import { UnidadMedidaServices } from 'src/app/services/unidad_medida.service'; 

@Component({
  selector: 'app-alta-articulo',
  templateUrl: './alta-articulo.component.html',
  styleUrls: ['./alta-articulo.component.css']
})
export class AltaArticuloComponent implements OnInit {

  articulo: articulo = {
    clave: '',
    id_partidas: null, // <-- Inicializado explícitamente
    descripcion: '',
    unidad_medida_id: null,
    esActivo: true,
    esBasico: true
  };

  partidas: partida[] = [];
  unidad_medida: unidad_medida[] = [];
  loading = false;

  constructor(
    private artSrv: ArticulosService, 
    private partSrvc: PartidasService,
    private unidadSrvc: UnidadMedidaServices
  ) { }

  ngOnInit(): void {
    this.partSrvc.listarPartidas().subscribe({
      next: (resp) => this.partidas = resp.partidas || [], 
      error: () => this.partidas = []
    });

    this.cargarUnidadesMedida();
  }

  cargarUnidadesMedida(): void {
    this.unidadSrvc.listarUnidadesMedida().subscribe({
      next: (resp: any) => {
        this.unidad_medida = resp.unidades || [];
        console.log('Arreglo guardado en unidad_medida:', this.unidad_medida);
      },
      error: (err) => {
        console.error('Error al cargar unidades de medida', err);
        this.unidad_medida = [];
      }
    });
  }

  onPartidaChange(idPartida: any): void {
  if (!idPartida) {
    this.articulo.clave = '';
    return;
  }

  this.artSrv.obtenerSiguienteClave(idPartida).subscribe({
    next: (resp: any) => {
      if (resp?.ok) {
        this.articulo.clave = resp.clave; // Asigna '2722'
      }
    },
    error: (err) => {
      console.error('Error al obtener la siguiente clave:', err);
      this.articulo.clave = ''; // Deja vacío si falla en vez de forzar 001
    }
  });
}

  guardarArticulo(f: NgForm): void {
    if (f.invalid || this.loading) {
      f.control.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.articulo.descripcion = this.articulo.descripcion?.trim();

    const payload = {
      clave: this.articulo.clave,
      id_partidas: this.articulo.id_partidas,
      unidad_medida_id: this.articulo.unidad_medida_id || null,
      descripcion: this.articulo.descripcion,
      esActivo: this.articulo.esActivo ?? true,
      esBasico: this.articulo.esBasico ?? true
    };

    console.log('BODY ENVIADO:', payload); // Abre la consola de Chrome (F12) para verificar qué valores van

    this.artSrv.crearArticulo(payload).subscribe({
      next: (resp) => {
        if (resp?.ok) {
          Swal.fire({
            title: 'Guardado',
            icon: 'success',
            text: 'Artículo guardado correctamente' 
          });

          // Resetear formulario
          f.resetForm({ esActivo: true, esBasico: true, id_partidas: null, unidad_medida_id: null });
          this.articulo.clave = '';

         
        } else {
          Swal.fire({
            title: 'Error',
            icon: 'warning',
            text: 'No se pudo guardar el artículo'
          });
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error('ERROR COMPLETO:', err);
        console.error('DETALLE ERROR BACKEND:', err.error);

        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: err.error?.msg || 'Ocurrió un error al guardar'
        });
      }
    });
  }
}