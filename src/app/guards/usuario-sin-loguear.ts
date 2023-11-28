import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { async } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const usuarioSinLoguear: CanActivateFn = async (route, state) => {
    const auth = inject(AuthService);
      if(auth.token()){
      const router = inject(Router);
      router.navigate(['convertir']);
      return false;
    }
    return true;
  };