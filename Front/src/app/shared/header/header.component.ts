import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service'; // Revisa que la ruta apunte bien a tu archivo del service

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .letras {
      display: inline-block;
      vertical-align: middle;
      max-width: 100px;
      opacity: 1;
      transform: scale(1);
      transition: max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  opacity 0.25s ease-in-out,
                  transform 0.3s ease !important;
    }

    .letras-ocultas {
      max-width: 0 !important;
      opacity: 0 !important;
      transform: scale(0.7) !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .ti-menu {
      display: inline-block;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .menu-rotado {
      transform: rotate(90deg);
    }
  `]
})
export class HeaderComponent implements OnInit {
  datos: any;
  plantel: string;
  Nombre: string;
  Correo: string;

  // AQUÍ: Debe llevar 'public sidebarService: SidebarService' para que el HTML lo reconozca
  constructor(
    private router: Router,
    public sidebarService: SidebarService
  ) {
    this.datos = JSON.parse(localStorage.getItem('datos')!);
    this.plantel = this.datos?.nombreArea || '';
    this.Nombre = this.datos?.nombre || '';
    this.Correo = this.datos?.correo || this.datos?.correop || '';
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    if (window.innerWidth < 992) {
      this.sidebarService.setMini(false);
    }
  }

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }
}