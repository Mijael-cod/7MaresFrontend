import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MeseroModule } from './mesero/mesero.module';


@NgModule({
  declarations: [
  ],
  imports: [
    //Aca se importa los modulos de cada rol (Admin, Cajero, Cocinero, Mesero, Vistas)
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MeseroModule
  ]
})
export class PagesModule { }
