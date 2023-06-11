import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListosComponent } from './listos/listos.component';
import { RecibidosComponent } from './recibidos/recibidos.component';

const routes: Routes = [
  { path: 'listos-caliente', component:ListosComponent, title: "Platos listos - Caliente"},
  { path: 'recibidos-caliente', component:RecibidosComponent, title: "Platos Recibido - Caliente"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComidasCalientesRoutingModule { }
