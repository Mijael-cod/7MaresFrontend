import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComidasCalientesRoutingModule } from './comidas-calientes-routing.module';
import { RecibidosComponent } from './recibidos/recibidos.component';
import { ListosComponent } from './listos/listos.component';


@NgModule({
  declarations: [
    RecibidosComponent,
    ListosComponent
  ],
  imports: [
    CommonModule,
    ComidasCalientesRoutingModule
  ]
})
export class ComidasCalientesModule { }
