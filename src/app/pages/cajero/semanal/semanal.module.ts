import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemanalRoutingModule } from './semanal-routing.module';
import { DiagramaPastelComponent } from './diagrama-pastel/diagrama-pastel.component';
import { DiagramaBarrasComponent } from './diagrama-barras/diagrama-barras.component';


@NgModule({
  declarations: [
    DiagramaPastelComponent,
    DiagramaBarrasComponent
  ],
  imports: [
    CommonModule,
    SemanalRoutingModule
  ]
})
export class SemanalModule { }
