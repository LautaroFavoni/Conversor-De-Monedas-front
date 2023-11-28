import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertirRoutingModule } from './convertir-routing.module';
import { ConvertirComponent } from './convertir.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConvertirComponent
  ],
  imports: [
    CommonModule,
    ConvertirRoutingModule,
    FormsModule
  ]
})
export class ConvertirModule { }
