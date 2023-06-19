import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeseroRoutingModule } from './mesero-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { PlatilloComponent } from './platillo/platillo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriaComponent,
    PlatilloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MeseroRoutingModule
  ]
})
export class MeseroModule { }
