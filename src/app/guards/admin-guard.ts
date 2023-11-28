import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { async } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { esAdmin } from 'src/app/interfaces/user';

export const AdminGuard: CanActivateFn = async (ruta, estado) => {
  const servicioApi = inject(ApiService);

  // // Se omite la declaración no utilizada "const router = inject(Router);"
  // var esAdmin = await servicioApi.EsAdmin();
  // console.log(await esAdmin);

  // if (esAdmin) {
  //   // Si el usuario es un administrador, redirige a la página de inicio de sesión
  //   const enrutador = inject(Router);
  //   enrutador.navigate(['convertir']);
  //   return false;
  // }

  // Si el usuario no es un administrador, permite la activación de la ruta
  return true;
};

