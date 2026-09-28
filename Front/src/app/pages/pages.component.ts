import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../services/settings.service';
import { RegistroService } from '../services/registro.service';
import { SidebarService } from '../services/sidebar.service'; // <-- 1. Importa tu SidebarService

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  anio: any;
  fecha: any;
  datos: any;

  // 2. Inyéctalo aquí como public
  constructor( 
    private settingsService: SettingsService,
    private registroService: RegistroService,
    public sidebarService: SidebarService
  ) { 
    this.datos = JSON.parse(localStorage.getItem('datos')!);
  }

  ngOnInit(): void {
    customInitFunctions();
    let hoy = new Date();
    this.fecha = hoy.toLocaleDateString();
    this.anio = hoy.getFullYear();
  }
}