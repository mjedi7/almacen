import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
   datos:any;
  // cargo:string;
   plantel:string;
  Nombre:string;
   Correo:string;

  constructor(private router:Router) {

     this.datos=JSON.parse(localStorage.getItem('datos')!);
    // this.cargo=this.datos.cargodb;
     this.plantel=this.datos.nombreArea;
    this.Nombre=this.datos.nombre;
     this.Correo=this.datos.correop;

   }

  ngOnInit(): void {
  }

}
