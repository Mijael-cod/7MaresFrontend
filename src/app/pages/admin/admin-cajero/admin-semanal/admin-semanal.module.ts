import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSemanalRoutingModule } from './admin-semanal-routing.module';
import { AdminDiagramaBarrasComponent } from './admin-diagrama-barras/admin-diagrama-barras.component';
import { AdminDiagramaPastelComponent } from './admin-diagrama-pastel/admin-diagrama-pastel.component';


@NgModule({
  declarations: [
    AdminDiagramaBarrasComponent,
    AdminDiagramaPastelComponent
  ],
  imports: [
    CommonModule,
    AdminSemanalRoutingModule
  ]
})
export class AdminSemanalModule { }
