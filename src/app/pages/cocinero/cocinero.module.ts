import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocineroRoutingModule } from './cocinero-routing.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ComidasCalientesModule } from './comidas_calientes/comidas-calientes.module';
import { ComidasFriasModule } from './comidas_frias/comidas-frias.module';


@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    CocineroRoutingModule,
    ComidasCalientesModule,
    ComidasFriasModule
  ]
})
export class CocineroModule { }
