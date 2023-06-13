import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCajeroRoutingModule } from './admin-cajero-routing.module';
import { AdminPagosComponent } from './admin-pagos/admin-pagos.component';


@NgModule({
  declarations: [
    AdminPagosComponent
  ],
  imports: [
    CommonModule,
    AdminCajeroRoutingModule
  ]
})
export class AdminCajeroModule { }
