import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegistroComponent } from './admin-registro/admin-registro.component';

const routes: Routes = [
  { path: 'admin-registro', component:AdminRegistroComponent , title: 'Registro de usuarios' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
