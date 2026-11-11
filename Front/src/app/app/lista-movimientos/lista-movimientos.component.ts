import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TraerDatosService } from 'src/app/services/traer-datos.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})
export class ListaMovimientosComponent implements OnInit {

  planteles: any[] = [];
  plantelesFiltrados: any[] = [];
  plantelesLista: any[] = [];
  busquedaPlantelDropdown: string = '';
  menuPlantelesAbierto: boolean = false;
  opcionSeleccionado: number = 0;
  
  API_URL = environment.uri_api;

  dtOptions: any = {};
  dtTrigger = new Subject<any>();

  myFiles!: Array<any>;
  id: number;
  numidentificador: any;
  salidas: any[] = []; // Declarado para llenar la tabla del HTML

  constructor(private traer: TraerDatosService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      searching: true,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
      }
    };
    this.traerPlanteles();
  }

  // Getter para obtener el centro seleccionado actual
  get centroSeleccionado(): any {
    return this.planteles.find(
      (p: any) => Number(p.id) === Number(this.opcionSeleccionado)
    );
  }

  // Getters para filtrar las opciones en tiempo real
  get plantelesVisibles(): any[] {
    const texto = this.busquedaPlantelDropdown.trim().toLocaleLowerCase('es');
    if (!texto) return this.plantelesLista;

    if (/^\d+$/.test(texto)) {
      const codigoBuscado = Number(texto);
      return this.plantelesLista.filter((p: any) => Number(p.codigo) === codigoBuscado);
    }

    return this.plantelesLista.filter((p: any) =>
      String(p.descripcion || '').toLocaleLowerCase('es').includes(texto)
    );
  }

  // Control para abrir o cerrar menús
  toggleMenuPlantel(): void {
    this.menuPlantelesAbierto = !this.menuPlantelesAbierto;
  }

  // Seleccionar un centro de trabajo desde el menú desplegable
  seleccionarPlantelDropdown(centro: any): void {
    this.opcionSeleccionado = Number(centro.id);
    this.busquedaPlantelDropdown = '';
    this.menuPlantelesAbierto = false;

    // Ejecuta la función para cargar las salidas del plantel seleccionado
    this.plantelSeleccionado();
  }

  // Cargar planteles y ordenarlos por código numérico
  traerPlanteles() {
    this.traer.http.get(`${this.API_URL}/traerPlanteles`)
      .subscribe((res: any) => {
        this.planteles = res || [];
        this.plantelesLista = [...this.planteles].sort((a: any, b: any) => Number(a.codigo) - Number(b.codigo));
      });
  }

  // Método que se ejecuta al seleccionar un plantel (puedes adaptarlo a tu servicio de movimientos)
  // Se ejecuta cuando el usuario selecciona un plantel del buscador
  plantelSeleccionado() {
    if (!this.opcionSeleccionado) return;

    this.traer.http.get(`${this.API_URL}/getSalidas/${this.opcionSeleccionado}`)
      .subscribe({
        next: (res: any) => {
          this.salidas = res || [];
          
          // Usamos 'as any' para que TypeScript no marque error con isDataTable
          if (($.fn.DataTable as any).isDataTable('#articulos')) {
            $('#articulos').DataTable().clear();
            $('#articulos').DataTable().destroy();
            this.dtTrigger.next(null);
          }
        },
        error: (err) => {
          console.error('Error al cargar las salidas del plantel:', err);
          this.salidas = [];
        }
      });
  }

  // Se ejecuta cuando el usuario selecciona un archivo desde su computadora
  upload(event: any) {
    const file: File = event.target.files[0];
    
    if (event.target.files.length > 0) {
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        this.myFiles = event.target.files; 
        console.log(this.myFiles);
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Error en documento',
          text: 'Solo se permiten archivos .pdf'
        });
      } 
    } else {
      console.log("NO");    
    }
  }

  subirPDF(id: number) {
    this.id = id;

    if (this.myFiles == undefined) {
      Swal.fire({
        title: 'No ha seleccionado un documento',
        icon: 'warning'
      });
      return;
    }

    this.numidentificador = Date.now();
    const formdata = new FormData();

    for (var i = 0; i < this.myFiles.length; i++) { 
      formdata.append('files', this.myFiles[i]);
    }

    var areaAlmacenaDoc = parseInt(localStorage.getItem('centro_trabajo') || '0', 10);
    var areaDocumento = "direccion_general"; // Valor por defecto o ajusta según tu lógica de áreas

    // Mapeo de áreas (puedes conservar tu bloque largo de ifs si lo prefieres)
    if (areaAlmacenaDoc === 1) areaDocumento = "tres_valles";
    else if (areaAlmacenaDoc === 2) areaDocumento = "papantla";
    // ... (conserva el resto de tus ifs de áreas si los necesitas completos)

    this.traer.http.post(this.API_URL + `/SubirArchivoRequisicionPlantel/${this.numidentificador}/${areaDocumento}`, formdata).subscribe({
      next: (res) => {
        console.log(res);
        this.actualizarCampoRuta();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }

  actualizarCampoRuta() {
    var idPlantel = localStorage.getItem('centro_trabajo');

    this.traer.http.put(this.API_URL + `/actualizaRutaPlanteles/${this.numidentificador}/${this.id}/${idPlantel}`, null)
      .subscribe((res: any) => {
        if (res == "rutaActualizada") {
          // Acciones tras actualizar ruta
        }
      });
  }

  abrirPDF(ruta: number) {
    var a = ruta.toString();
    var url = (a.replaceAll('/', '-'));

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',       
      }),
      responseType: 'blob' as 'json'
    };

    this.traer.http.get(this.API_URL + `/abrirPDFRequisicionPlantel/${url}`, httpOptions).subscribe((res: any) => { 
      var file = new Blob([res], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL); 
    });
  }
}