import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegistroService } from '../services/registro.service';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })

  export class AuthGuard implements CanActivate {
 
    constructor(private registro:RegistroService,private router:Router){}
   
    canActivate():boolean {
      if(this.registro.estaAutenticado()){
        return true;
      }else{
  
        Swal.fire(
          'No estas autorizado',
          'escriba sus credenciales',
          'error'
        )
  
      this.router.navigateByUrl('/login');
  
     return false;
      }
   
    }
    
  }
  