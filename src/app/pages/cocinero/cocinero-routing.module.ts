import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ComidasCalientesRoutingModule } from './comidas_calientes/comidas-calientes-routing.module';
import { ComidasFriasRoutingModule } from './comidas_frias/comidas-frias-routing.module';


const routes: Routes = [
  {path: 'pedidos', component:PedidosComponent, title:"Pedidos" },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComidasCalientesRoutingModule, ComidasFriasRoutingModule],
  exports: [RouterModule]
})
export class CocineroRoutingModule { }
