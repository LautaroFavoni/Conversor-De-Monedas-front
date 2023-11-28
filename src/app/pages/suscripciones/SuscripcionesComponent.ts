import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConvertirService } from 'src/app/services/api.convertir';


@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.scss']
})
export class SuscripcionesComponent {
  convertirService = inject(ConvertirService);
  router = inject(Router);


  CambiarCategoria(id: number) {
    this.convertirService.CambiarCategoria(id);
    this.router.navigate(["/convertir"]);

  }

}
