import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuscripcionesRoutingModule } from './suscripciones-routing.module';
import { SuscripcionesComponent } from './SuscripcionesComponent';


@NgModule({
  declarations: [
    SuscripcionesComponent
  ],
  imports: [
    CommonModule,
    SuscripcionesRoutingModule
  ]
})
export class SuscripcionesModule { }
