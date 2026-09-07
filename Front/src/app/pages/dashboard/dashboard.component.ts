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
      dtTrigger= new Subject;
    
      API_URL = environment.uri_api;

 existenciasBajas:any=[];


  constructor(private traer:TraerDatosService) { }

  ngOnInit(): void {

  this.getListaExistenciasBajas();
 
 
  }

     getListaExistenciasBajas(){

    $('#articulos').DataTable().clear();
    $('#articulos').DataTable().draw();
     $('#articulos').DataTable().destroy();
  
    try{

      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 20,
        searching:true,
        processing:true,
        destroy:true,
        language:{
          url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
        },
  
      };

      var idplantel=localStorage.getItem('centro_trabajo');

          this.traer.http.get(this.API_URL+`/getExistenciasBajas/${idplantel}`)
          .subscribe((res)=>{
        
            this.existenciasBajas=res;
            console.log(this.existenciasBajas);
    
            this.dtTrigger.next();
            
          });    
    
    }catch(error){
      console.log(error)
    
    }

  }

}
