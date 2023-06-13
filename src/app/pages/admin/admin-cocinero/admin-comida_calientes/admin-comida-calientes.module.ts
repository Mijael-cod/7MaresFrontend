import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComidaCalientesRoutingModule } from './admin-comida-calientes-routing.module';
import { AdminListosComponent } from './admin-listos/admin-listos.component';
import { AdminRecibidosComponent } from './admin-recibidos/admin-recibidos.component';


@NgModule({
  declarations: [
    AdminListosComponent,
    AdminRecibidosComponent
  ],
  imports: [
    CommonModule,
    AdminComidaCalientesRoutingModule
  ]
})
export class AdminComidaCalientesModule { }
