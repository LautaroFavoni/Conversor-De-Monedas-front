import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonedasRoutingModule } from './monedas-routing.module';
import { MonedasComponent } from './monedas.component';
import { NuevaMonedaComponent } from "../../../components/nueva-moneda/nueva-moneda.component";


@NgModule({
    declarations: [
        MonedasComponent
    ],
    imports: [
        CommonModule,
        MonedasRoutingModule,
        NuevaMonedaComponent
    ]
})
export class MonedasModule { }
