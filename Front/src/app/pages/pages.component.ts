import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../services/settings.service';
import { RegistroService } from '../services/registro.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  anio:any;
  fecha:any;
datos:any;
  constructor( private settingsService: SettingsService,private registroService:RegistroService ) { 
    this.datos=JSON.parse(localStorage.getItem('datos')!);
    // this.restaurarSesion();
  }

  ngOnInit(): void {
    customInitFunctions();
    let hoy = new Date();
    this.fecha=hoy.toLocaleDateString()
    this.anio=hoy.getFullYear();
  }
// restaurarSesion() {
//   const datos = this.registroService.cargarSesionDesdeStorage();
//   if (datos) {
//     this.datos = datos;
//   } else {
//     // this.router.navigate(['/login']);
//   }
// }
}
