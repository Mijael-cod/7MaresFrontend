import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ActualizacontraComponent } from './actualizacontra/actualizacontra.component';
import { PincodeComponent } from './pincode/pincode.component';
import { RecuperarcontraComponent } from './recuperarcontra/recuperarcontra.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    LoginComponent,
    ActualizacontraComponent,
    PincodeComponent,
    RecuperarcontraComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }


