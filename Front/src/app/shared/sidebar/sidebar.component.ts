import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  menuItems2: any[];
  menuItems3: any[];
  menuItems4: any[];
  menuItems44: any[];
  menuItems4B: any[];
  menuItems55: any[];
  menuItems6: any[];
  menuItems5: any[];
  menuItems10: any[];

  // Almacen
  resgistraCompra: boolean = true;
  recargaStock: boolean = true;
  existencias: boolean = true;
  cargarexistencias: boolean = true;

  // Movimientos
  movimientos: boolean = true;

  // Requisiciones
  generarRequisicion: boolean = false;
  pendientes: boolean = false;
  atendidas: boolean = false;

  // Transferencias / Modulos
  vertransferencias: boolean = false;
  verReportes: boolean = false;
  verArticulos: boolean = false;
  muestraUsuarios: boolean = false;

  constructor(
    private sidebarService: SidebarService,
    private permodulos: RegistroService
  ) {
    this.menuItems = sidebarService.menu;
    this.menuItems2 = sidebarService.menu2;
    this.menuItems3 = sidebarService.menu3;
    this.menuItems4 = sidebarService.menu4;
    this.menuItems4B = sidebarService.menu4B;
    this.menuItems44 = sidebarService.menu44;
    this.menuItems55 = sidebarService.menu55;
    this.menuItems5 = sidebarService.menu5;
    this.menuItems6 = sidebarService.menu6;
    this.menuItems10 = sidebarService.menu10;
  }

  ngOnInit(): void {
    this.getpetmisosModulos();
  }

  getpetmisosModulos() {
    const permisoRaw = localStorage.getItem('permiso');
    var permiso = parseInt(permisoRaw || '0');
    this.muestraUsuarios = (permiso === 0);

    if (permiso === 1) {
      // Almacen
      if (this.menuItems?.[0]?.submenu) {
        this.menuItems[0].submenu[0].mostrar = true;
        this.menuItems[0].submenu[1].mostrar = true;
        this.menuItems[0].submenu[2].mostrar = true;
        if (this.menuItems[0].submenu[3]) this.menuItems[0].submenu[3].mostrar = false;
        if (this.menuItems[0].submenu[4]) this.menuItems[0].submenu[4].mostrar = false;
      }

      // Transferencias
      this.vertransferencias = true;

      // Requisiciones
      if (this.menuItems4?.[0]?.submenu) {
        this.menuItems4[0].submenu[0].mostrar = false;
        this.menuItems4[0].submenu[1].mostrar = true;
      }

      // Articulos
      this.verArticulos = true;
      if (this.menuItems55?.[0]?.submenu?.[0]) {
        this.menuItems55[0].submenu[0].mostrar = true;
      }

      // Movimientos
      this.movimientos = false;
      if (this.menuItems6?.[0]?.submenu) {
        this.menuItems6[0].submenu.forEach((sub: any) => sub.mostrar = false);
      }

      // ==========================================
      // REPORTES (Seguro con forEach)
      // ==========================================
      this.verReportes = true;
      if (this.menuItems44?.[0]?.submenu) {
        this.menuItems44[0].submenu.forEach((item: any) => {
          item.mostrar = true;
        });
      }

    } else if (permiso === 3) {
      // ALMACEN
      if (this.menuItems?.[0]?.submenu) {
        this.menuItems[0].submenu[0].mostrar = false;
        this.menuItems[0].submenu[1].mostrar = false;
        this.menuItems[0].submenu[2].mostrar = true;
        if (this.menuItems[0].submenu[3]) this.menuItems[0].submenu[3].mostrar = true;
        if (this.menuItems[0].submenu[4]) this.menuItems[0].submenu[4].mostrar = true;
      }

      this.cargarexistencias = false;
      this.vertransferencias = false;

      // REQUISICIONES
      if (this.menuItems4?.[0]?.submenu) {
        this.menuItems4[0].submenu[0].mostrar = true;
        this.menuItems4[0].submenu[1].mostrar = true;
      }

      // MOVIMIENTOS
      this.movimientos = true;
      if (this.menuItems6?.[0]?.submenu?.[0]) {
        this.menuItems6[0].submenu[0].mostrar = true;
      }

      // REPORTES
      this.verReportes = false;
      if (this.menuItems44?.[0]?.submenu) {
        this.menuItems44[0].submenu.forEach((item: any) => {
          item.mostrar = false;
        });
      }

      // Articulos
      this.verArticulos = false;
      if (this.menuItems55?.[0]?.submenu?.[0]) {
        this.menuItems55[0].submenu[0].mostrar = false;
      }
    }
  }
}