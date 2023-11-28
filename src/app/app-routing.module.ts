import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioSinLoguear } from './guards/usuario-sin-loguear';
import { usuarioLogueadoGuard } from './guards/usuario-logueado.guard';
import { AdminGuard } from './guards/admin-guard';

const routes: Routes = [
  {
    path:"login",
    canActivate : [usuarioSinLoguear],
    loadChildren: ()=> import("./pages/login/login.module").then(m => m.LoginModule)
  },
  {
  path:"register",
    canActivate : [usuarioSinLoguear],
    loadChildren: ()=> import("./pages/register/register.module").then(m => m.RegisterModule)
  },
  {
    path:"convertir",
    canActivate : [usuarioLogueadoGuard],
    loadChildren: ()=> import("./pages/convertir/convertir.module").then(m => m.ConvertirModule)
  },
  {
    path:"suscripciones",
    canActivate : [usuarioLogueadoGuard],
    loadChildren: ()=> import("./pages/suscripciones/suscripciones.module").then(m => m.SuscripcionesModule)
  },
  {
    path:"admin/users",
    canActivate : [AdminGuard],
    loadChildren: ()=> import("./pages/admin/users/users.module").then(m => m.UsersModule)
  },
  {
    path:"admin/Monedas",
    canActivate : [AdminGuard],
    loadChildren: ()=> import("./pages/admin/monedas/monedas.module").then(m => m.MonedasModule)
  },

  {  path: "",
  redirectTo:"login" ,
  pathMatch: "full"
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
