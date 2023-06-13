import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMeseroRoutingModule } from './admin-mesero-routing.module';
import { AdminCategoriaComponent } from './admin-categoria/admin-categoria.component';
import { AdminPlatilloComponent } from './admin-platillo/admin-platillo.component';


@NgModule({
  declarations: [
    AdminCategoriaComponent,
    AdminPlatilloComponent
  ],
  imports: [
    CommonModule,
    AdminMeseroRoutingModule
  ]
})
export class AdminMeseroModule { }
