import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajeroRoutingModule } from './cajero-routing.module';
import { PagosComponent } from './pagos/pagos.component';
import { DiarioModule } from './diario/diario.module';
import { SemanalModule } from './semanal/semanal.module';
import { MensualModule } from './mensual/mensual.module';


@NgModule({
  declarations: [
    PagosComponent
  ],
  imports: [
    CommonModule,
    CajeroRoutingModule,
    DiarioModule,
    SemanalModule,
    MensualModule
  ]
})
export class CajeroModule { }
