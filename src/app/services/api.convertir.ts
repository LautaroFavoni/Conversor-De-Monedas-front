import { Injectable, inject } from '@angular/core';

import { API } from '../constants/api';
import { ConvertirData, ResultadoData } from '../interfaces/conversion';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { Suscripcion } from '../interfaces/suscripcion';
import { User, UserForAdmin } from '../interfaces/user';
import { MonedaForAdmin } from '../interfaces/moneda';

@Injectable({
    providedIn: 'root'
})
export class ConvertirService extends ApiService {
    

    async Convertir(convertirData: ConvertirData):Promise<ResultadoData>{
        const url = API + "Moneda/Conversion";
        const token = this.auth.token();
    
        const opcionesDeSolicitud: RequestInit = {
        method: "PUT",
        headers: {
            Authorization: "Bearer " + token,
            "Content-type":"application/json",
            // otras cabeceras si es necesario
        },
        body: JSON.stringify(convertirData)
        };
        
        const res = await fetch(url, opcionesDeSolicitud);
        console.log("BuscandoNombre", res);
    
          // Asegúrate de manejar la respuesta de manera adecuada.
          // Por ejemplo, puedes convertir la respuesta a formato JSON.
        const data = await res.json();

        console.log(data)
    
          // Devuelve el nombre de la suscripción (o lo que sea que estés esperando).
        return await data;
        
        
    }
        // const res = await fetch(API+"User", {
        // method: "POST",
        // headers:{
        //     "Content-type":"application/json",
        // },
        // body: JSON.stringify(convertirData)
    
        // });
        // console.log("REGISTRANDO",res)
        
        // return resultado 
    

    async GetNombreSuscripcion(): Promise<Suscripcion> {
        const url = API + "User/Get-Nombre-Categoria";
        const token = this.auth.token();
    
        const opcionesDeSolicitud: RequestInit = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            // otras cabeceras si es necesario
        },
        };

        
        const res = await fetch(url, opcionesDeSolicitud);
        console.log("BuscandoNombre", res);
    
          // Asegúrate de manejar la respuesta de manera adecuada.
          // Por ejemplo, puedes convertir la respuesta a formato JSON.
        const data = await res.json();

        console.log(data)
    
          // Devuelve el nombre de la suscripción (o lo que sea que estés esperando).
        return await data;
        
        
    }
    
    async GetUserLogged(){
        const url = API + "User/Get-Usuario-Logged";
        const token = this.auth.token();
    
        const opcionesDeSolicitud: RequestInit = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            // otras cabeceras si es necesario
        },
        };

        
        const res = await fetch(url, opcionesDeSolicitud);
        console.log("BuscandoNombre", res);
    
          // Asegúrate de manejar la respuesta de manera adecuada.
          // Por ejemplo, puedes convertir la respuesta a formato JSON.
        const data = await res.json();

        console.log(data)
    
          // Devuelve el nombre de la suscripción (o lo que sea que estés esperando).
        return await data;
        
        
    }



async GetMoneda(){
    const url = API + "Moneda/Get-Lista-Monedas";
    const token = this.auth.token();

    const opcionesDeSolicitud: RequestInit = {
    method: "GET",
    headers: {
        Authorization: "Bearer " + token,
        // otras cabeceras si es necesario
    },
    };

    
    const res = await fetch(url, opcionesDeSolicitud);
    console.log("BuscandoMonedas", res);

      // Asegúrate de manejar la respuesta de manera adecuada.
      // Por ejemplo, puedes convertir la respuesta a formato JSON.
    const data = await res.json();

    console.log(data)

      // Devuelve el nombre de la suscripción (o lo que sea que estés esperando).
    return await data;
    
    
}
async CambiarCategoria(id:number): Promise<User> {
  const url = API + "User/Cambiar-Categoria?IdCategoria=" + id;
  const token = this.auth.token();

  const opcionesDeSolicitud: RequestInit = {
  method: "PUT",
  headers: {
      Authorization: "Bearer " + token,
      // otras cabeceras si es necesario
  },
  };

  
  const res = await fetch(url, opcionesDeSolicitud);
  console.log("Cambiando Categoria", res);

    // Asegúrate de manejar la respuesta de manera adecuada.
    // Por ejemplo, puedes convertir la respuesta a formato JSON.

    const data = await res.json();

    console.log(data)

      // Devuelve el nombre de la suscripción (o lo que sea que estés esperando).
    return await data;
  
  
}
async GetUsersForAdmin() : Promise<Array<UserForAdmin>>{
  const url = API + "User/Get-User-For-Admin";
  const token = this.auth.token();

  const opcionesDeSolicitud: RequestInit = {
  method: "GET",
  headers: {
      Authorization: "Bearer " + token,
      // otras cabeceras si es necesario
  },
  };

  
  const res = await fetch(url, opcionesDeSolicitud);
  console.log("BuscandoMonedas", res);

    // Asegúrate de manejar la respuesta de manera adecuada.
    // Por ejemplo, puedes convertir la respuesta a formato JSON.
  const data = await res.json();

  console.log(data)

    // Devuelve el nombre de la suscripción (o lo que sea que estés esperando).
  return await data;

}



async GetMonedasForAdmin() : Promise<Array<MonedaForAdmin>>{
  const url = API + "Moneda/Get-Monedas-For-Admin";
  const token = this.auth.token();

  const opcionesDeSolicitud: RequestInit = {
  method: "GET",
  headers: {
      Authorization: "Bearer " + token,
      // otras cabeceras si es necesario
  },
  };

  
  const res = await fetch(url, opcionesDeSolicitud);
  console.log("BuscandoMonedas", res);

    // Asegúrate de manejar la respuesta de manera adecuada.
    // Por ejemplo, puedes convertir la respuesta a formato JSON.
  const data = await res.json();

  console.log(data)

    // Devuelve el nombre de la suscripción (o lo que sea que estés esperando).
  return await data;

}

}



