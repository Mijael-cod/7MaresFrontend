import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListosComponent } from './listos/listos.component';
import { RecibidosComponent } from './recibidos/recibidos.component';

const routes: Routes = [
  { path: 'listos-frio', component:ListosComponent, title: "Platos Listos - Frio"},
  { path: 'recibidos-frio', component:RecibidosComponent, title: "Platos Recibidos - Frio"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComidasFriasRoutingModule { }
