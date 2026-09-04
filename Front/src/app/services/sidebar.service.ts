import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
          titulo: 'Almacén',
          icono: '',
          submenu: [
            { titulo: 'Registrar Compra', url: 'generar-documento',mostrar:false},
            { titulo: 'Recargar Stock', url: 'mis-seguimientos',mostrar:false},
            { titulo: 'Existencias', url: 'existencias',mostrar:false},

            // Agregado por Oscar (27/03/26)
            { titulo: 'Cargar existencias a DG', url: 'cargar-existencias', mostrar: false },
            
            // Creado por Juan  
            { titulo: 'Usar artículo', url: 'usar-articulo',mostrar:false}
 
          ]
        },
  ];

  menu2: any[] = [
    {
          titulo: 'Buscar Documento',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'Capturados', url: '',mostrar:false },
            { titulo: 'Generados', url: '',mostrar:false },    
          ]
        },
  ];

  menu3: any[] = [
    {
          titulo: 'Transferencias',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'Asignar Artículos', url: 'estadistico-general',mostrar:false },
            // { titulo: 'Generar', url: 'Listadealumnos',mostrar:false },
          ]
        },
  ];


    menu4: any[] = [
    {
          titulo: 'Requisiciones',
          icono: 'mdi mdi-gauge',
          submenu: [
             { titulo: 'Generar', url: 'generar-requisicion',mostrar:false },
            { titulo: 'Pendientes', url: 'requisiciones-pendientes',mostrar:false },
            //  { titulo: 'Atendidas', url: 'Requisiciones-Atendidas',mostrar:false },
          ]
        },
  ];

     menu4B: any[] = [
    {
          titulo: 'Movimientos',
          icono: 'mdi mdi-gauge',
          submenu: [
             { titulo: 'Salidas', url: 'lista-movimientos',mostrar:true },
          ]
        },
  ];

	menu55: any[] = [
	  {
		titulo: 'Artículos',
		icono: 'mdi mdi-gauge',
		submenu: [
		  {
			titulo: 'Agregar artículo',
			url: 'agregar-articulo',
			mostrar: true
		  },

		  {
			titulo: 'Listar artículos por Partida',
			url: 'listar-articulos-partida',
			mostrar: false
		  }
		]
	  },
	];


  /*menu44: any[] = [
    {
          titulo: 'Reportes',
          icono: 'mdi mdi-gauge',
          submenu: [
             { titulo: 'Entradas', url: 'reporte_compras',mostrar:true },
             { titulo: 'Salidas', url: 'reporte_movimiento_x_partida',mostrar:true },
             { titulo: 'Existencias', url: 'reporte_existencias_x_partida',mostrar:true },
          ]
        },
  ];*/

    menu44: any[] = [
    {
      titulo: 'Reportes',
      icono: 'mdi mdi-gauge',
      submenu: [
         { titulo: 'Reporte Compras', url: 'reporte-compras', mostrar: false },
         { titulo: 'Existencia x Partida', url: 'reporte-existencia-x-partida', mostrar: false },
         { titulo: 'Movimiento x Partida', url: 'reporte-movimiento-x-partida', mostrar: false }
      ]
    },
  ];



  menu5: any[] = [
    {
          titulo: 'Usuarios',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'Ver usuarios', url: 'lista-usuarios',mostrar:false },
          ]
        },
  ];


       menu6: any[] = [
    {
          titulo: 'Movimientos',
          icono: 'mdi mdi-gauge',
          submenu: [
             { titulo: 'Salidas', url: 'lista-movimientos',mostrar:true },
          ]
        },
  ];

  menu10: any[] = [
    {
          titulo: 'Contraseña',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'Cambiar', url: 'cambio-password',mostrar:false },
          ]
        },
  ];


  constructor() { }
}
