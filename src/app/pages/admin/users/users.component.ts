import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserForAdmin, esAdmin } from 'src/app/interfaces/user';
import { ConvertirService } from 'src/app/services/api.convertir';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  convertirService = inject(ConvertirService)

  UserForAdmin : UserForAdmin = {
    userName : "",
    email : "",
    role: "",
    categoriaId: 0
  }

  Users:UserForAdmin[] = []
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
    this.convertirService.GetUsersForAdmin().then(respuesta=> {this.Users = respuesta})
  }
    

}

