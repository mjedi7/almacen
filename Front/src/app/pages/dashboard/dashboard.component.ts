import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TraerDatosService } from 'src/app/services/traer-datos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

    dtOptions: any={};
    dtTrigger = new Subject<any>();
    
    API_URL = environment.uri_api;

    existenciasBajas: any = [];

  constructor(private traer: TraerDatosService) { }

  ngOnInit(): void {
    this.getListaExistenciasBajas();
  }

  getListaExistenciasBajas(){
    if ((<any>$('#articulos')).DataTable().context.length > 0) {
      $('#articulos').DataTable().clear();
      $('#articulos').DataTable().destroy();
    }
 
    try{
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 20,
        searching: true,
        processing: true,
        destroy: true,
        language: {
          url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
        },
      };

      var idplantel = localStorage.getItem('centro_trabajo');

      this.traer.http.get(this.API_URL + `/getExistenciasBajas/${idplantel}`)
        .subscribe((res: any) => {
          
          // 1. Agrupamos los costos por la descripción del artículo
          const mapaCostos: { [key: string]: Set<number> } = {};
          res.forEach((item: any) => {
            const claveArticulo = item.descripcion ? item.descripcion.trim().toLowerCase() : '';
            if (!mapaCostos[claveArticulo]) {
              mapaCostos[claveArticulo] = new Set();
            }
            mapaCostos[claveArticulo].add(Number(item.costo));
          });

          // 2. Paleta de colores pasteles suaves para ir rotando por cada artículo variable
          const pastelColors = ['#fff3cd', '#d1e7dd', '#cfe2ff', '#f8d7da', '#e2d9f3', '#ffe5d0'];
          let colorIndex = 0;
          const colorMap: { [key: string]: string } = {};

          // 3. Mapeamos la respuesta asignando un color único por cada grupo de artículo con precios distintos
          this.existenciasBajas = res.map((item: any) => {
            const claveArticulo = item.descripcion ? item.descripcion.trim().toLowerCase() : '';
            const totalPrecios = mapaCostos[claveArticulo] ? mapaCostos[claveArticulo].size : 1;
            const tieneDiferenteCosto = totalPrecios > 1;

            let colorFondo = 'transparent';
            if (tieneDiferenteCosto) {
              if (!colorMap[claveArticulo]) {
                colorMap[claveArticulo] = pastelColors[colorIndex % pastelColors.length];
                colorIndex++;
              }
              colorFondo = colorMap[claveArticulo];
            }
            
            return {
              ...item,
              tieneDiferenteCosto,
              colorFondo
            };
          });

          console.log(this.existenciasBajas);
  
          this.dtTrigger.next(null);
        });     
    }catch(error){
      console.log(error);
    }
  }

}