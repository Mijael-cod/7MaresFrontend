import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComidasFriasRoutingModule } from './comidas-frias-routing.module';
import { ListosComponent } from './listos/listos.component';
import { RecibidosComponent } from './recibidos/recibidos.component';


@NgModule({
  declarations: [
    ListosComponent,
    RecibidosComponent
  ],
  imports: [
    CommonModule,
    ComidasFriasRoutingModule
  ]
})
export class ComidasFriasModule { }
