import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensualRoutingModule } from './mensual-routing.module';
import { DiagramaBarrasComponent } from './diagrama-barras/diagrama-barras.component';
import { DiagramaPastelComponent } from './diagrama-pastel/diagrama-pastel.component';


@NgModule({
  declarations: [
    DiagramaBarrasComponent,
    DiagramaPastelComponent
  ],
  imports: [
    CommonModule,
    MensualRoutingModule
  ]
})
export class MensualModule { }
