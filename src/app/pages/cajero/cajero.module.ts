import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajeroRoutingModule } from './cajero-routing.module';
import { PagosComponent } from './pagos/pagos.component';


@NgModule({
  declarations: [
    PagosComponent
  ],
  imports: [
    CommonModule,
    CajeroRoutingModule
  ]
})
export class CajeroModule { }
