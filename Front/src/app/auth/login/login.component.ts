import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario,RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  usuario: Usuario={
    email:'',
    nombre:'',
    password:'',
    cargo:0,
    numemp:0,   
  };

  recordarUsuario=false;
  anio:any;
  fecha:any;
  constructor( private router:Router,private registro:RegistroService ) { }

  ngOnInit(): void {

    let hoy = new Date();
    this.fecha=hoy.toLocaleDateString()
    this.anio=hoy.getFullYear();
    
    if(localStorage.getItem('token')){
      localStorage.clear();
     }
  }
 

  buscaUsuario(form:NgForm, email:any,password:any){

    if(form.invalid){
      console.log('Formulario Invalido');
      Swal.fire(
        'Error',
        '¡Complete todos los campos!',
        'error',
      )
      return;
}else{    
    this.registro.loginUsuario(email,password).subscribe(
      res=>{     
     
        localStorage.setItem('datos',JSON.stringify(res));
        let datos=JSON.parse(localStorage.getItem('datos')!);

        if(res=="NoEncontrado"){
          console.log('--- RESPUESTA EXACTA DEL SERVIDOR ---');
          console.log(typeof res, res); // Ver tipo de dato y contenido real
          
          Swal.fire(
                    '¡Error de autenticación!',
                    'Verifique sus datos',
                    'error'
                  )
        }else{

          localStorage.setItem('token',datos.token);
          localStorage.setItem('usuario',datos.correop);
          localStorage.setItem('area',datos.area);
          localStorage.setItem('numemp',datos.numemp);
          localStorage.setItem('nombre',datos.nombre);
          localStorage.setItem('departamento',datos.nom_departamento);
          localStorage.setItem('nombreArea',datos.nombreArea);
          localStorage.setItem('id_departamento',datos.id_departamento);
          localStorage.setItem('permiso',datos.tipo_usuario);
          localStorage.setItem('centro_trabajo',datos.centro_trabajo);

          this.router.navigateByUrl("/dashboard");
        
        }
       },  
         err=>console.log(err)
      );

  }

}


  login() {
    this.router.navigateByUrl('/');
  }

}