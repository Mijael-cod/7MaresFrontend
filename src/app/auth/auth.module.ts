import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { PincodeComponent } from './pincode/pincode.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    PincodeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
