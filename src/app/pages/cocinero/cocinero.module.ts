import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocineroRoutingModule } from './cocinero-routing.module';
import { PedidosComponent } from './pedidos/pedidos.component';


@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    CocineroRoutingModule
  ]
})
export class CocineroModule { }
