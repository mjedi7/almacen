import { Component, OnInit } from '@angular/core';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { Requisiciones } from 'src/app/models/nuevoDocumento';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-genera-requisicion',
  templateUrl: './genera-requisicion.component.html',
  styleUrls: ['./genera-requisicion.component.css']
})
export class GeneraRequisicionComponent implements OnInit {


  requisicion: Requisiciones={
        
        plantel:null,
        partida: null,
        idcosto:'',
        fecha:null,
        cantidadSolicitar:null,
        consecutivo:null,
        nombreProducto:''
      
      };

      //variables para el buscador de los productos
      productosfiltrados: any [] = [];
      productoBuscado: string = '';

       dtOptions: any={};
      dtTrigger= new Subject;

         API_URL = environment.uri_api;

     articulosRequisicion:any=[];     

    //Lista (arreglos) para lenar los deplegables (selects) del forulario
    planteles:any=[];
    partidas:any=[];
    productos:any=[];

    fechaResgistro:string;

    mostrarBotonTransferir:boolean=false;

  constructor(private traer:TraerDatosService) { }

  ngOnInit(): void {

    this.traerPlanteles();
    this.traerPartidas();
    this.TraerConsecutivo();

    this.fechaResgistro = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
    this.requisicion.fecha=this.fechaResgistro;

  }

  filtrarProductos(){
    const texto = this.productoBuscado.toLowerCase();
    this.productosfiltrados = this.productos.filter(p => //se guarda el reultado en productosfiltrados
      p.nombre_producto.toLowerCase().includes(texto)
    );
  }

  seleccionarProducto(producto: any){
    this.requisicion.idcosto = producto.id_costos;
    this.productoBuscado = producto.nombre_producto;
    this.productosfiltrados = [];
  }

    traerPlanteles(){

      var id_plantel=localStorage.getItem('centro_trabajo');

      //Peticón GET al servidor enviando el ID del plantel guardado en el navegador
      this.traer.http.get( this.API_URL+`/traerPlantelRequisicion/${id_plantel}`)
      .subscribe((res:any)=>{
      this.planteles=res;//Guarda la respuesta del servidor en la lista planteles
      console.log(this.planteles);
      
    });

  }

  plantelSeleccionado(){

    console.log(this.requisicion.plantel)

  }

   traerPartidas(){
  
    this.traer.http.get( this.API_URL+`/traerPartidas`)
    .subscribe((res:any)=>{
      this.partidas=res;
      console.log(this.partidas);
      
    });
    
  }

      opcionSeleccionadaX(){

    console.log(this.requisicion.partida);

      //Cuando el usuario elige una partida del menú desplegable, trae los productos de esa partida
      this.traer.http.get( this.API_URL+`/traerProductosDesdeTransferir/${this.requisicion.partida}`)
    .subscribe((res:any)=>{
      this.productos=res;
      this.productosfiltrados = res; 
      console.log(this.productos);


      //Reinicia la selección del producto previo
      this.requisicion.idcosto=null;
      this.requisicion.nombreProducto = ''; 
      
    });

  }


      agregarArticulo(form:NgForm){
        //Si el formulario tiene todos los campos requeridos...
        if(form.valid==true){

                //La cantidad que se solicita es un número entero y mayor a 0
                  if(this.requisicion.cantidadSolicitar <= 0 || Number.isInteger(this.requisicion.cantidadSolicitar)==false){
              
              //Si muestra alerta de advertencia
             Swal.fire({
  
            title:"Operación no realizada",
            text:"La cantidad a solicitar debe ser mayor a 0 y número entero",
            icon: "warning"
  
          });
  
  
        }else{
            
            //  Todo es válido, se envian los datos al servidor con una petición POST
            this.traer.http.post( this.API_URL+`/TramitarRequisicion`,this.requisicion)
                    .subscribe((res:any)=>{
                      
                      console.log(res);
                
                      //Se revisa si el servidooor del Back, respondio 
                      if(res=="Add"){
                         
                                    Swal.fire(
                                      'Ok',
                                      'Articulo agregado a la lista',
                                      'success'
                                    );  
  
                                     this.getListaArticulosRequisicion();

                      }else if(res=="Duplicado"){
                
                        Swal.fire({
                        title:"Artículo duplicado",
                        icon:'warning',
                        text:"Este artículo ya fue agregado a la lista"
                      });
                
                      }else if(res=="ErrorProducto"){

                        Swal.fire({
                        title:"Artículo no válido",
                        icon:'warning',
                        text:"Debe elegir un artículo de la lista"
                      });

                      }
                      
                    });        
        }

        }else{

            //Si el formulario no tiene todos los campos llenos

               Swal.fire({
          
                    title:"Operación no realizada",
                    text:"Complete todos los campos",
                    icon: "warning"
          
                  });

        }

     
      }

      //AQUI SE OCUPA la tabla CONSECUTIVO REQUISICION...para obtener un num.folio 
      TraerConsecutivo(){

        var id_plantel=localStorage.getItem('centro_trabajo');


    this.traer.http.get( this.API_URL+`/traerConsecutivoRequisicion/${id_plantel}`)
    .subscribe((res:any)=>{

      var consecutivo=res;
      this.requisicion.consecutivo=consecutivo;  
      
    });

  }
         eliminarArticulo(idarticulo:number){

    console.log(idarticulo);


        this.traer.http.delete(this.API_URL+`/eliminarArticuloRequisicion/${idarticulo}`)
          .subscribe((res)=>{

            this.getListaArticulosRequisicion();
            
          });   

  }

    //Consulta la lista de productos agregados hasta el momento
    getListaArticulosRequisicion(){

    //Limpia y destruye la tabla DataTables previa si ya existía en pantalla
    $('#articulos').DataTable().clear();
    $('#articulos').DataTable().draw();
     $('#articulos').DataTable().destroy();
  
    try{

      //Configura las opciones visuales de la tabla 
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        searching:false,
        processing:true,
        destroy:true,
        language:{
          url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
        },
  
      };

         var folio=this.requisicion.consecutivo;
         var id=this.requisicion.plantel;

         //Consulta la lista de articulos guardados para este folio e id de plantel 
          this.traer.http.get(this.API_URL+`/getListaArticulosRequisicion/${folio}/${id}`)
          .subscribe((res)=>{
        
            this.articulosRequisicion=res;//  Se guarda la lista 
            console.log(this.articulosRequisicion);
    
            this.dtTrigger.next();

              //Muestra o oculta el botón de transferir segun si hay elementos
             if(this.articulosRequisicion.length>0){
              this.mostrarBotonTransferir=true;
            }else{
              this.mostrarBotonTransferir=false;
            }
            
          });    
    
    }catch(error){
      console.log(error)
    
    }

  }

  formatoRequisicion(){

    //Muestra la confirmación del usuario 
      Swal.fire({
      title: "¿Estas seguro de terminar la lista?",
      text: "Una vez terminada no podrá agregar nuevos artículos ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText:'Cancelar',
      confirmButtonText: "Si, terminar"
    }).then((result) => {
    
      if (result.isConfirmed) {

        if(this.requisicion.plantel>31){

            //Configuración de instrucciones para recibir un archivo Blob o apdf
              const httpOptions = {
        
            headers: new HttpHeaders({
              'Content-Type':  'application/json',        
            } ),responseType: 'blob' as 'arraybuffer'
        
          };        
  
         this.traer.http.get( this.API_URL+`/formatoRequisicionDG/${this.requisicion.plantel}/${this.requisicion.consecutivo}`,httpOptions)
        .subscribe((res:any)=>{
       
          var file=new Blob([res],{type:'application/pdf'});
          var fileURL=URL.createObjectURL(file); 


            const link = document.createElement('a');
            link.href = fileURL;
            link.download = 'Formato_Requisición';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

          // console.log(fileURL);
          // window.open(fileURL); 

          setTimeout(function(){ location.reload(); }, 3000);
        
      });

        }else{

              const httpOptions = {
        
            headers: new HttpHeaders({
              'Content-Type':  'application/json',        
            } ),responseType: 'blob' as 'arraybuffer'
        
          };        
  
         this.traer.http.get( this.API_URL+`/formatoRequisicion/${this.requisicion.plantel}/${this.requisicion.consecutivo}`,httpOptions)
        .subscribe((res:any)=>{
       
          var file=new Blob([res],{type:'application/pdf'});
          var fileURL=URL.createObjectURL(file); 


            const link = document.createElement('a');
            link.href = fileURL;
            link.download = 'Formato_Requisición';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

          // console.log(fileURL);
          // window.open(fileURL); 

          setTimeout(function(){ location.reload(); }, 3000);
        
      });

        }

    

      }else{

      }

      });
  
    }

}












// import { Component, OnInit } from '@angular/core';
// import { TraerDatosService } from 'src/app/services/traer-datos.service';
// import { Requisiciones } from 'src/app/models/nuevoDocumento';
// import { environment } from 'src/environments/environment';
// import Swal from 'sweetalert2';
// import { NgForm } from '@angular/forms';
// import { Subject } from 'rxjs';
// import { HttpHeaders } from '@angular/common/http';
// import { formatDate } from '@angular/common';

// @Component({
//   selector: 'app-genera-requisicion',
//   templateUrl: './genera-requisicion.component.html',
//   styleUrls: ['./genera-requisicion.component.css']
// })
// export class GeneraRequisicionComponent implements OnInit {



//   requisicion: Requisiciones={
        
//         plantel:null,
//         partida: null,
//         idcosto:'',
//         fecha:'',
//         cantidadSolicitar:null,
//         consecutivo:null,
//         nombreProducto:''
      
//       };

//       dtOptions: any={};
//       dtTrigger= new Subject;

//          API_URL = environment.uri_api;

//      articulosRequisicion:any=[];     

//     planteles:any=[];
//     partidas:any=[];
//     productos:any=[];
//     fechaResgistro:string;

//   constructor(private traer:TraerDatosService) { }

//   ngOnInit(): void {
//     this.traerPlanteles();
//     this.traerPartidas();
//     this.TraerConsecutivo();


//     this.fechaResgistro = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
//     this.requisicion.fecha=this.fechaResgistro;

//   }


//     traerPlanteles(){

//       var id_plantel=localStorage.getItem('centro_trabajo');

//       this.traer.http.get( this.API_URL+`/traerPlantelRequisicion/${id_plantel}`)
//       .subscribe((res:any)=>{
//       this.planteles=res;
//       console.log(this.planteles);
      
//     });

//   }

//   plantelSeleccionado(){

//     console.log(this.requisicion.plantel)

//   }

//    traerPartidas(){
  
//     this.traer.http.get( this.API_URL+`/traerPartidas`)
//     .subscribe((res:any)=>{
//       this.partidas=res;
//       console.log(this.partidas);
      
//     });
    
//   }

//      opcionSeleccionadaX(){

//       this.traer.http.get( this.API_URL+`/traerProductosDesdeTransferir/${this.requisicion.partida}`)
//     .subscribe((res:any)=>{
//       this.productos=res;
//       console.log(this.productos);
      
//     });

//   }


//       agregarArticulo(form:NgForm){

  
//         if(this.requisicion.cantidadSolicitar <= 0){
  
//              Swal.fire({
  
//             title:"Operación no realizada",
//             text:"Debe transferir mínimo 1 artículo",
//             icon: "warning"
  
//           });
  
  
//         }else{
            
//                   this.traer.http.post( this.API_URL+`/TramitarRequisicion`,this.requisicion)
//                     .subscribe((res:any)=>{
                      
//                       console.log(res);
                
//                       if(res=="Add"){
                         
//                                         Swal.fire({
//                                           position: "top-end",
//                                           icon: "success",
//                                           showConfirmButton: false,
//                                           timer: 1400
//                                         }); 
                                          
//                                      this.getListaArticulosRequisicion();

//                       }else if(res=="Duplicado"){
                
//                         Swal.fire({
//                         title:"Artículo duplicado",
//                         icon:'warning',
//                         text:"Este artículo ya fue agregado a la lista"
//                       });
                
//                       }
                      
//                     });
            
//         }
    
//       }

//       TraerConsecutivo(){

//         var id_plantel=localStorage.getItem('centro_trabajo');


//     this.traer.http.get( this.API_URL+`/traerConsecutivoRequisicion/${id_plantel}`)
//     .subscribe((res:any)=>{

//       var consecutivo=res;
//       this.requisicion.consecutivo=consecutivo;  
      
//     });

//   }



//         // confirmarTranferencia(){
      
//         //   console.log("ID transferencia=" +this.requisicion.consecutivo);
      
//         //    this.traer.http.get(this.API_URL+`/confirmarTransferencia/${this.requisicion.consecutivo}`)
//         //         .subscribe((res)=>{
      
//         //           if(res=="ListaOk"){
      
//         //              Swal.fire({
      
//         //                 title:"Lista asignada",
//         //                 text:"Los artículos se asignaron correctamente",
//         //                 icon: "success"
      
//         //                 });
      
//         //              setTimeout(function(){ location.reload(); }, 3000);
      
//         //           }
                              
//         //         });  
      
//         // }


//     eliminarArticulo(idarticulo:number){

//     console.log(idarticulo);


//         this.traer.http.delete(this.API_URL+`/eliminarArticuloRequisicion/${idarticulo}`)
//           .subscribe((res)=>{

//             this.getListaArticulosRequisicion();
            
//           });   

//   }


//     getListaArticulosRequisicion(){

//     $('#articulos').DataTable().clear();
//     $('#articulos').DataTable().draw();
//      $('#articulos').DataTable().destroy();
  
//     try{

//       this.dtOptions = {
//         pagingType: 'full_numbers',
//         pageLength: 10,
//         searching:false,
//         processing:true,
//         destroy:true,
//         language:{
//           url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
//         },
  
//       };

//          var folio=this.requisicion.consecutivo;
//          var id=this.requisicion.plantel;

//           this.traer.http.get(this.API_URL+`/getListaArticulosRequisicion/${folio}/${id}`)
//           .subscribe((res)=>{
        
//             this.articulosRequisicion=res;
//             console.log(this.articulosRequisicion);
    
//             this.dtTrigger.next();
            
//           });    
    
//     }catch(error){
//       console.log(error)
    
//     }

//   }

//   formatoRequisicion(){
  
//         const httpOptions = {
        
//             headers: new HttpHeaders({
//               'Content-Type':  'application/json',        
//             } ),responseType: 'blob' as 'arraybuffer'
        
//           };        
  
//          this.traer.http.get( this.API_URL+`/formatoRequisicion/${this.requisicion.plantel}/${this.requisicion.consecutivo}`,httpOptions)
//         .subscribe((res:any)=>{
       
//           var file=new Blob([res],{type:'application/pdf'});
//           var fileURL=URL.createObjectURL(file); 
//           console.log(fileURL);
//           window.open(fileURL); 


//           setTimeout(function(){ location.reload(); }, 3000);
        
//       });

  
//     }
  

// }
