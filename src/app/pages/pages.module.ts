import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MeseroModule } from './mesero/mesero.module';
import { CajeroModule } from './cajero/cajero.module';
import { CocineroModule } from './cocinero/cocinero.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
  ],
  imports: [
    //Aca se importa los modulos de cada rol (Admin, Cajero, Cocinero, Mesero, Vistas)
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MeseroModule,
    CajeroModule,
    CocineroModule,
    AdminModule
  ]
})
export class PagesModule { }
