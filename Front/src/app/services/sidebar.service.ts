import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

 private miniSubject = new BehaviorSubject<boolean>(false);
  public isMini$ = this.miniSubject.asObservable();

  toggle(): void {
    const nuevoEstado = !this.miniSubject.value;
    this.setMini(nuevoEstado);
  }

  setMini(mini: boolean): void {
    this.miniSubject.next(mini);

    const wrapper = document.getElementById('main-wrapper');
    if (wrapper) {
      if (mini) {
        wrapper.classList.add('mini-sidebar');
      } else {
        wrapper.classList.remove('mini-sidebar');
      }
    }
  }


  // ALMACÉN
  menu: any[] = [
    {
      titulo: 'Almacén',
      icono: '',
      submenu: [
        { titulo: 'Registrar Compra', url: 'generar-documento', mostrar: false },
        { titulo: 'Recargar Stock', url: 'mis-seguimientos', mostrar: false },
        { titulo: 'Existencias', url: 'existencias', mostrar: false },
        { titulo: 'Cargar existencias a DG', url: 'cargar-existencias', mostrar: false },
        { titulo: 'Usar artículo', url: 'usar-articulo', mostrar: false }
      ]
    }
  ];

  // BUSCAR DOCUMENTO
  menu2: any[] = [
    {
      titulo: 'Buscar Documento',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Capturados', url: '', mostrar: false },
        { titulo: 'Generados', url: '', mostrar: false }
      ]
    }
  ];

  // TRANSFERENCIAS
  menu3: any[] = [
    {
      titulo: 'Transferencias',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Asignar Artículos', url: 'estadistico-general', mostrar: false }
      ]
    }
  ];

  // REQUISICIONES
  menu4: any[] = [
    {
      titulo: 'Requisiciones',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Generar', url: 'generar-requisicion', mostrar: false },
        { titulo: 'Pendientes', url: 'requisiciones-pendientes', mostrar: false }
      ]
    }
  ];

  // MOVIMIENTOS
  menu4B: any[] = [
    {
      titulo: 'Movimientos',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Salidas', url: 'lista-movimientos', mostrar: true }
      ]
    }
  ];

  // ARTÍCULOS
  menu55: any[] = [
    {
      titulo: 'Artículos',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Agregar artículo', url: 'agregar-articulo', mostrar: true },
        { titulo: 'Artículos bajo stock', url: 'bajo-stock', mostrar: true },
        { titulo: 'Listar artículos por Partida', url: 'listar-articulos-partida', mostrar: true }
      ]
    },
  ];

  // REPORTES
  menu44: any[] = [
    {
      titulo: 'Reportes',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Reporte Compras',
          url: 'reporte-compras',
          mostrar: false
        },

        {
          titulo: 'Existencia Por Partida',
          url: 'reporte-existencia-x-partida',
          mostrar: false
        },

        {
          titulo: 'Movimiento Por Partida',
          url: 'reporte-movimiento-x-partida',
          mostrar: false
        }
      ]
    }
  ];

  // USUARIOS
  menu5: any[] = [
    {
      titulo: 'Usuarios',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Ver usuarios', url: 'lista-usuarios', mostrar: false }
      ]
    }
  ];

  // MOVIMIENTOS (duplicado/respaldo)
  menu6: any[] = [
    {
      titulo: 'Movimientos',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Salidas', url: 'lista-movimientos', mostrar: true }
      ]
    }
  ];

  // CONTRASEÑAS
  menu10: any[] = [
    {
      titulo: 'Contraseña',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Cambiar', url: 'cambio-password', mostrar: false }
      ]
    }
  ];

  constructor() { }

}