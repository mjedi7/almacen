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
    id_partidas: null,
    descripcion: '',
    unidad_medida_id: null,
    precio_unitario: null,
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

    // 1. Obtener los nombres descriptivos para el cuadro de confirmación
    const partidaSeleccionada = this.partidas?.find((p: any) => p.id == this.articulo.id_partidas);
    const unidadSeleccionada = this.unidad_medida?.find((u: any) => u.id == this.articulo.unidad_medida_id);

    const textoPartida = partidaSeleccionada
      ? `${partidaSeleccionada.clave} - ${partidaSeleccionada.descripcion}`
      : this.articulo.id_partidas;

    const textoUnidad = unidadSeleccionada
      ? unidadSeleccionada.nombre_medida
      : 'No especificada';

    const descripcionLimpia = this.articulo.descripcion?.trim().toUpperCase();

    // 2. Alerta de confirmación con el resumen de datos
    Swal.fire({
      title: '¿Estás seguro de registrar este artículo?',
      html: `
      <div style="text-align: left; font-size: 0.95rem; line-height: 1.6; margin-top: 10px;">
        <p><strong>Partida:</strong> ${textoPartida}</p>
        <p><strong>Clave:</strong> ${this.articulo.clave}</p>
        <p><strong>Costo Unitario:</strong> $${this.articulo.precio_unitario ?? 0}</p>
        <p><strong>Descripción:</strong> ${descripcionLimpia}</p>
        <p><strong>Unidad de Medida:</strong> ${textoUnidad}</p>
      </div>
    `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // 3. Si confirma, activa loading y envía el payload
        this.loading = true;
        this.articulo.descripcion = descripcionLimpia;

        const payload = {
          clave: this.articulo.clave,
          id_partidas: this.articulo.id_partidas,
          unidad_medida_id: this.articulo.unidad_medida_id || null,
          descripcion: this.articulo.descripcion,
          precio_unitario: this.articulo.precio_unitario ? Number(this.articulo.precio_unitario) : 0,
          esActivo: this.articulo.esActivo ?? true,
          esBasico: this.articulo.esBasico ?? true
        };

        console.log('BODY ENVIADO:', payload);

        this.artSrv.crearArticulo(payload).subscribe({
          next: (resp: any) => {
            this.loading = false;
            if (resp?.ok) {
              Swal.fire({
                title: '¡Guardado!',
                icon: 'success',
                text: 'Artículo guardado correctamente',
                timer: 2000,
                showConfirmButton: false
              });

              // Resetear formulario
             f.resetForm({ 
                esActivo: true, 
                esBasico: true, 
                id_partidas: null, 
                unidad_medida_id: null,
                precio_unitario: null 
              });
              this.articulo.clave = '';
            } else {
              Swal.fire({
                title: 'Error',
                icon: 'warning',
                text: resp?.msg || 'No se pudo guardar el artículo'
              });
            }
          },
          error: (err: any) => {
            this.loading = false;
            console.error('ERROR COMPLETO:', err);
            console.error('DETALLE ERROR BACKEND:', err.error);

            Swal.fire({
              title: 'Error',
              icon: 'error',
              text: err.error?.msg || err.message || 'Ocurrió un error al guardar'
            });
          }
        });
      }
    });
  }
}