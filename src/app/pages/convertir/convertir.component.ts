import { Component, OnInit, inject, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvertirData, ResultadoData } from 'src/app/interfaces/conversion';
import { Suscripcion } from 'src/app/interfaces/suscripcion';
import { UserForConversion } from 'src/app/interfaces/user';
import { ConvertirService } from 'src/app/services/api.convertir';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-convertir',
  templateUrl: './convertir.component.html',
  styleUrls: ['./convertir.component.scss']
})
export class ConvertirComponent implements OnInit {
  
  convertirService = inject(ConvertirService)
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

    ConvertirData : ConvertirData = {
    monedaOrigenName:"",
    monedaDestinoName: "",
    cantidad: 0,
    
    
  }

  ResultadoData : ResultadoData = {
    monedaOrigenName:"",
    monedaDestinoName: "",
    cantidad: 0,
    resultado: 0,
    
    
  }

  
  UserLogged : UserForConversion = {
    userName: "",
    tiros: 2,
    role : "",
    
  }
  
  SuscripcionActiva: Suscripcion = {
    name: "",
    id: 0,
    tirosMax: 0
  };

  tirosRestantes = 0
  
  listaDeMonedas = []
  
  // ngOnInit(): void {
    // this.convertirService.GetNombreSuscripcion().then(valor => {
    //   if(valor) {
    //     // Asumiendo que valor es un objeto con propiedades Name, id, y TirosMax
    //     this.SuscripcionActiva = valor;
    //     console.log(this.SuscripcionActiva);}
        
    //   });
    // this.convertirService.GetUserLogged().then(Usuario => {
    //   if(Usuario ) {
    //   // Asumiendo que valor es un objeto con propiedades Name, id, y TirosMax
    //   this.UserLogged = Usuario;
    //   console.log(this.UserLogged);}
      
      
    // });
    ngOnInit(): void {
      // Utilizar Promise.all para esperar a que ambas promesas se resuelvan
      Promise.all([
        this.convertirService.GetNombreSuscripcion(),
        this.convertirService.GetUserLogged(),
      ]).then(([valor, Usuario]) => {
        if (valor) {
          this.SuscripcionActiva = valor;
          console.log(this.SuscripcionActiva);
        }
        if (Usuario) {
          this.UserLogged= Usuario;

          console.log(this.UserLogged);
        }
    console.log(this.SuscripcionActiva.tirosMax , this.UserLogged.tiros)
    this.tirosRestantes =  (this.SuscripcionActiva.tirosMax - this.UserLogged.tiros)
      
    this.convertirService.GetMoneda().then(lista => {
      this.listaDeMonedas = lista.monedas;
      console.log(this.listaDeMonedas);
    });
    
  }
      )  
  // ngOnInit(): void {
  //   this.convertirService.GetNombreSuscripcion()
  //     .then(valor => {
  //       if (valor) {
  //         this.SuscripcionActiva = valor;
  //         console.log(this.SuscripcionActiva);
  //       }
  //       return this.convertirService.GetUserLogged();
  //     })
  //     .then(Usuario => {
  //       if (Usuario) {
  //         this.UserLogged = Usuario;
  //         console.log(this.UserLogged);
    
  //         // Ahora, calcula tirosRestantes después de obtener ambas propiedades
  //         this.tirosRestantes = this.SuscripcionActiva.TirosMax - this.UserLogged.Tiros;
  //         console.log(this.tirosRestantes, this.UserLogged.Tiros, this.SuscripcionActiva.TirosMax);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener datos:', error);
  //     });
  // }
  

  

  
  
}
  Convertir(){
    this.convertirService.Convertir(this.ConvertirData).then(respuesta => this.ResultadoData = respuesta)
    Promise.all([
      this.convertirService.GetNombreSuscripcion(),
      this.convertirService.GetUserLogged(),
    ]).then(([valor, Usuario]) => {
      if (valor) {
        this.SuscripcionActiva = valor;
        console.log(this.SuscripcionActiva);
      }
      if (Usuario) {
        this.UserLogged= Usuario;

        console.log(this.UserLogged);
      }
  console.log(this.SuscripcionActiva.tirosMax , this.UserLogged.tiros)
  this.tirosRestantes =  (this.SuscripcionActiva.tirosMax - this.UserLogged.tiros)
    
  this.convertirService.GetMoneda().then(lista => {
    this.listaDeMonedas = lista.monedas;
    console.log(this.listaDeMonedas);
  });
  
}
    )  
  }
}
