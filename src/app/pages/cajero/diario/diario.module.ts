import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiarioRoutingModule } from './diario-routing.module';
import { DiagramaPastelComponent } from './diagrama-pastel/diagrama-pastel.component';
import { DiagramaBarrasComponent } from './diagrama-barras/diagrama-barras.component';


@NgModule({
  declarations: [
    DiagramaPastelComponent,
    DiagramaBarrasComponent
  ],
  imports: [
    CommonModule,
    DiarioRoutingModule
  ]
})
export class DiarioModule { }
