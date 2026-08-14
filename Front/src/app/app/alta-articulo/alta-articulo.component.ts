import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticulosService } from 'src/app/services/articulos.service'; 
import { articulo, partida, unidad_medida } from 'src/app/models/articulos/alta-articulo'; 
import Swal from 'sweetalert2';
import { PartidasService } from 'src/app/services/partidas.service'; 

// 1. IMPORTAMOS CON EL NOMBRE EXACTO DE TU CLASE Y ARCHIVO
import { UnidadMedidaServices } from 'src/app/services/unidad_medida.service'; 

@Component({
  selector: 'app-alta-articulo',
  templateUrl: './alta-articulo.component.html',
  styleUrls: ['./alta-articulo.component.css']
})
export class AltaArticuloComponent implements OnInit {

  articulo: articulo = {
    clave: '',
    descripcion: '',
    unidad_medida_id:null,
    esActivo: true,
    esBasico: true
  };

  partidas: partida[] = [];
  unidad_medida: unidad_medida[] = [];
  loading = false;

  // 2. CAMBIAMOS EL TIPO A UnidadMedidaServices EN EL CONSTRUCTOR
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
        // Asignamos las unidades recibidas de Express
        this.unidad_medida = resp.unidades || [];

        console.log('Arreglo guardado en unidad_medidacon:', this.unidad_medida);
      },
      error: (err) => {
        console.error('Error al cargar unidades de medida', err);
        this.unidad_medida = [];
      }
    });
  }

  guardarArticulo(f: NgForm): void {
    if (f.invalid || this.loading) {
      f.control.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.articulo.clave = this.articulo.clave?.toUpperCase()?.trim();
    this.articulo.descripcion = this.articulo.descripcion?.trim();

    console.log('DATOS A ENVIAR:', {
  clave: this.articulo.clave,
  id_partidas: this.articulo.id_partidas,
  unidad_medida_id: this.articulo.unidad_medida_id,
  descripcion: this.articulo.descripcion,
  esActivo: this.articulo.esActivo ?? true,
  esBasico: this.articulo.esBasico ?? true
});


    this.artSrv.crearArticulo({
      clave: this.articulo.clave,
      id_partidas: this.articulo.id_partidas,
      unidad_medida_id: this.articulo.unidad_medida_id,
      descripcion: this.articulo.descripcion,
      esActivo: this.articulo.esActivo ?? true,
      esBasico: this.articulo.esBasico ?? true
    }).subscribe({
      next: (resp) => {
        if (resp?.ok) {
          Swal.fire({
            title: 'Guardado',
            icon: 'success',
            text: 'Articulo guardado correctamente' 
          });
        } else {
          Swal.fire({
            title: 'Error',
            icon: 'warning',
            text: 'No se pudo guardar el articulo'
          });
        }
        this.loading = false;
      },
      error: (err) => {
  this.loading = false;

  console.error('ERROR COMPLETO:', err);
  console.error('ERROR DEL BACKEND:', err.error);

  Swal.fire({
    title: 'Error',
    icon: 'error',
    text: err.error?.msg || 'Ocurrió un error al guardar'
  });
}
    });
  }
}