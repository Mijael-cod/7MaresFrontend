import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizacontraComponent } from './actualizacontra/actualizacontra.component';
import { LoginComponent } from './login/login.component';
import { PincodeComponent } from './pincode/pincode.component';
import { RecuperarcontraComponent } from './recuperarcontra/recuperarcontra.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [

  {path: 'actualizar-contra', component:ActualizacontraComponent, title: 'Actualizar Contraseña'},
  {path: 'login', component:LoginComponent, title: 'Login'},
  {path: 'pin-code', component:PincodeComponent, title:'Pin Code'},
  {path: 'recuperar-contra', component:RecuperarcontraComponent,title: 'Recuperar Contraseña'},
  {path: 'registrar', component:RegistrarComponent, title: 'Registrar'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
