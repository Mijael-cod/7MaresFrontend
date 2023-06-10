import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';


const routes: Routes = [
  {path: 'pedidos', component:PedidosComponent, title:"Pedidos" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocineroRoutingModule { }
