import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { API } from '../constants/api';
import { MonedaForAdmin } from '../interfaces/moneda';
import { esAdmin } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  auth = inject(AuthService);
  constructor() { }

  async getAuth(endpoint:string){
    const res = await fetch(API+endpoint,{
      headers: {
        Authorization: "Bearer "+this.auth.token()
      }
    });
    if(res.status === 401){
      this.auth.logOut();
    }
    return res;
  }
  async editMoneda(moneda:MonedaForAdmin):Promise<boolean>{
    if(!moneda.id) return false;
    const res = await fetch(API+"Moneda?MonedaId="+moneda.id,{
      method:'PUT',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      },
      body: JSON.stringify(moneda)
    })
    return res.ok
  };

  async createMoneda(moneda:MonedaForAdmin):Promise<boolean>{
    if(moneda.id) return false;
    const res = await fetch(API+'Moneda/',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      },
      body: JSON.stringify(moneda)
    })
    return res.ok
  };

  async EsAdmin(): Promise<esAdmin> {
  
      await Boolean;
      const res = await fetch(API + "autentic", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + this.auth.token(),
        },
      });
  
      const data = await res.json();
      
      
      // Devuelve el valor obtenido de la respuesta de la API
      return data;
    
  
  
  
    }

  }