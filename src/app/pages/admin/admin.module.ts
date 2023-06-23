import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCajeroModule } from './admin-cajero/admin-cajero.module';
import { AdminCocineroModule } from './admin-cocinero/admin-cocinero.module';
import { AdminMeseroModule } from './admin-mesero/admin-mesero.module';
import { AdminRegistroComponent } from './admin-registro/admin-registro.component';


@NgModule({
  declarations: [
    AdminRegistroComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCajeroModule,
    AdminCocineroModule,
    AdminMeseroModule
  ]
})
export class AdminModule { }
