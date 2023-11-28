import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonedaForAdmin, moneda } from 'src/app/interfaces/moneda';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nueva-moneda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nueva-moneda.component.html',
  styleUrls: ['./nueva-moneda.component.scss']
})
export class NuevaMonedaComponent {
  ApiService= inject(ApiService);
  @Output() cerrar = new EventEmitter();
  @Input() Moneda:MonedaForAdmin= {
    id: 0,
    name: '',
    sigla: '',
    valor: 0
  }

  async onSubmit(){
    if(this.Moneda.id) this.editarContacto();
    else this.agregarContacto()
  }
  
  async editarContacto()
  { 
    const res = await this.ApiService.editMoneda(this.Moneda)  
    this.cerrar.emit();
    if(res){ 
      console.log("Editado correctamente")
    }
    else{ 
      
      console.log("Error editando")

    }
  }

  async agregarContacto(){
    const res = await this.ApiService.createMoneda(this.Moneda)
    this.cerrar.emit();
    if(res){ 
      console.log("Contacto agregado")
    }
    else{ 
      console.log("Error creando contacto")

    }
  }


}
