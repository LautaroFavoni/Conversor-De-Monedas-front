import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MonedaForAdmin } from 'src/app/interfaces/moneda';
import { esAdmin } from 'src/app/interfaces/user';
import { ConvertirService } from 'src/app/services/api.convertir';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.scss']
})
export class MonedasComponent implements OnInit {
  convertirService = inject(ConvertirService)
  monedas:MonedaForAdmin[] = []
  router = inject(Router)

  ingreso : esAdmin = {
    esadmin : true
  }

  async ngOnInit(): Promise<void> {
    try {
      // Espera a que se resuelva la promesa
      this.ingreso = await this.convertirService.EsAdmin();
      console.log(this.ingreso);
  
      // Ahora puedes realizar acciones basadas en this.ingreso
      if (this.ingreso.esadmin === false) {
        this.router.navigate(["/convertir"]);
      }
    } catch (error) {
      console.error("Error en ngOnInit:", error);
      // Manejar el error según tus necesidades
    }
    
    this.convertirService.GetMonedasForAdmin().then(respuesta=> {this.monedas = respuesta})

  }
}

