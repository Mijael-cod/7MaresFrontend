import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagosComponent } from './pagos/pagos.component';
import { DiarioRoutingModule } from './diario/diario-routing.module';
import { MensualRoutingModule } from './mensual/mensual-routing.module';
import { SemanalRoutingModule } from './semanal/semanal-routing.module';

const routes: Routes = [
  { path: 'pagos-total', component: PagosComponent, title: 'Pagos total Venta' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), DiarioRoutingModule, MensualRoutingModule, SemanalRoutingModule],
  exports: [RouterModule]
})
export class CajeroRoutingModule { }
