import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PincodeComponent } from './pincode/pincode.component';
import { RecuperarcontraComponent } from './recuperarcontra/recuperarcontra.component';
import { ActualizacontraComponent } from './actualizacontra/actualizacontra.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    PincodeComponent,
    RecuperarcontraComponent,
    ActualizacontraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
