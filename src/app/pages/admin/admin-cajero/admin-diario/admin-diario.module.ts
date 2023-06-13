import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDiarioRoutingModule } from './admin-diario-routing.module';
import { AdminDiagramaBarrasComponent } from './admin-diagrama-barras/admin-diagrama-barras.component';
import { AdminDiagramaPastelComponent } from './admin-diagrama-pastel/admin-diagrama-pastel.component';


@NgModule({
  declarations: [
    AdminDiagramaBarrasComponent,
    AdminDiagramaPastelComponent
  ],
  imports: [
    CommonModule,
    AdminDiarioRoutingModule
  ]
})
export class AdminDiarioModule { }
