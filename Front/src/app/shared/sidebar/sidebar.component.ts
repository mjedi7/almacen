import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css' ]
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

  resgistraCompra:boolean=true;
  recargaStock:boolean=true;
  existencias:boolean=true;
  cargarexistencias:boolean=true;
  
  // Movimientos
  movimientos:boolean=true;

  // Requisiciones
  generarRequisicion:boolean=false;
  pendientes:boolean=false;
  atendidas:boolean=false;

  // Transferencias
  vertransferencias:boolean=false;
  verReportes:boolean=false;

  verArticulos:boolean=false;

  muestraUsuarios:boolean=false;

/////////////////////////////////////////////////////
  constructor( private sidebarService: SidebarService,private permodulos:RegistroService ) {
 
    this.menuItems = sidebarService.menu; 
    this.menuItems2=sidebarService.menu2; 
    this.menuItems3=sidebarService.menu3; 
    this.menuItems4=sidebarService.menu4;
    this.menuItems4B=sidebarService.menu4B;

    this.menuItems44=sidebarService.menu44;
    this.menuItems55=sidebarService.menu55;

    this.menuItems5=sidebarService.menu5;    
    
    this.menuItems6=sidebarService.menu6;

    this.menuItems10=sidebarService.menu10;  

  }

  ngOnInit(): void {

     this.getpetmisosModulos();
  }


  getpetmisosModulos(){

    var permiso= parseInt(localStorage.getItem('permiso'));  

    if(permiso==1){

    //Almacen
      this.menuItems[0].submenu[0].mostrar = true;
      this.menuItems[0].submenu[1].mostrar = true;
      this.menuItems[0].submenu[2].mostrar = true;
	  
	  // Este item es "Recargar existencias", pero solo esta diseñado para Planteles
	  this.menuItems[0].submenu[3].mostrar = false;
	  
	  this.menuItems[0].submenu[4].mostrar = false;	  
	  
      // Transferencias
       this.vertransferencias=true;

      // Requisiciones
      this.menuItems4[0].submenu[0].mostrar=false;
      this.menuItems4[0].submenu[1].mostrar=true;

      // Articulos
      // this.menuItems4[0].submenu[0].mostrar=false;
      // this.menuItems4[0].submenu[1].mostrar=true;
      this.verArticulos=true;
      this.menuItems55[0].submenu[0].mostrar=true;

      this.movimientos=false;
      this.menuItems6[0].submenu[0].mostrar=false;
      this.menuItems6[0].submenu[1].mostrar=false;

      //Reportes
      this.verReportes=true;
 

    }else if(permiso==3){

    // ALMACEN

      this.menuItems[0].submenu[2].mostrar = true;
      this.menuItems[0].submenu[0].mostrar = false;
      this.menuItems[0].submenu[1].mostrar = false;
 
      this.cargarexistencias=false;
      // "Recargar existencias", agregado por Oscar (27/03/26)
      this.menuItems[0].submenu[3].mostrar = true;
      
      this.menuItems[0].submenu[4].mostrar = true;

    //Transferencias
      this.vertransferencias=false;

    //  REQUISIONES
      this.menuItems4[0].submenu[0].mostrar=true;
      this.menuItems4[0].submenu[1].mostrar=true;

      // MOVIMIENTOS 
      this.movimientos=true;
      // Salidas
      this.menuItems6[0].submenu[0].mostrar=true;


      //Reportes
      this.verReportes=false;

      // Articulos
      this.verArticulos=false;
      this.menuItems55[0].submenu[0].mostrar=false;


    } 

  }

}