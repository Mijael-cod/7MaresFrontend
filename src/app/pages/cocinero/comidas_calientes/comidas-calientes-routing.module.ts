import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListosComponent } from './listos/listos.component';
import { RecibidosComponent } from './recibidos/recibidos.component';

const routes: Routes = [
  { path: 'listos-caliente', component:ListosComponent, title: "Listos Caliente"},
  { path: 'recibidos-caliente', component:RecibidosComponent, title: "Recibido Caliente"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComidasCalientesRoutingModule { }
