import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuscripcionesComponent } from './SuscripcionesComponent';

const routes: Routes = [
  {
    path: "",
    component: SuscripcionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuscripcionesRoutingModule { }
