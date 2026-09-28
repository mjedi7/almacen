import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    /* Animación fluida para el texto 'letras.png' */
    .letras {
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
    }

    /* Cuando el menú se colapsa, ocultamos las letras de SICAI */
    .letras-ocultas {
      max-width: 0 !important;
      width: 0 !important;
      opacity: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      transform: scale(0.8);
    }

    /* Suavizado en la hamburguesa */
    .ti-menu {
      cursor: pointer;
      display: inline-block;
      transition: transform 0.25s ease;
    }
    .ti-menu:hover {
      transform: scale(1.1);
    }
  `]
})
export class HeaderComponent implements OnInit {
  datos: any;
  plantel: string;
  Nombre: string;
  Correo: string;
  
  // Controla el estado colapsado
  isSidebarMini: boolean = false;

  constructor(private router: Router) {
    this.datos = JSON.parse(localStorage.getItem('datos')!);
    this.plantel = this.datos?.nombreArea || '';
    this.Nombre = this.datos?.nombre || '';
    this.Correo = this.datos?.correop || '';
  }

  ngOnInit(): void {}

  // Método que activa/desactiva el sidebar
  toggleSidebar(): void {
    this.isSidebarMini = !this.isSidebarMini;
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('mini-sidebar');
    }
  }
}