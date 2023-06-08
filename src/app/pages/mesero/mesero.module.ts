import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeseroRoutingModule } from './mesero-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { PlatilloComponent } from './platillo/platillo.component';


@NgModule({
  declarations: [
    CategoriaComponent,
    PlatilloComponent
  ],
  imports: [
    CommonModule,
    MeseroRoutingModule
  ]
})
export class MeseroModule { }
