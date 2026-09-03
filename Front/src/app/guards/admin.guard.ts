import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistroService } from '../services/registro.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private registro: RegistroService,
    private router: Router
  ) {}

  canActivate(): boolean {

    // Primero comprobamos que esté autenticado
    if (!this.registro.estaAutenticado()) {

      Swal.fire(
        'No estás autorizado',
        'Escriba sus credenciales',
        'error'
      );

      this.router.navigateByUrl('/login');

      return false;
    }

    // Obtenemos el permiso guardado en localStorage
    const permisoRaw = localStorage.getItem('permiso');
    const permiso = parseInt(permisoRaw || '-1');

    // Solo permiso 0 = Administrador
    if (permiso === 0) {
      return true;
    }

    // Si tiene otro permiso, no puede entrar
    Swal.fire(
      'Acceso restringido',
      'No tienes permisos de administrador para acceder a este módulo.',
      'warning'
    );

    this.router.navigateByUrl('/dashboard');

    return false;
  }
}