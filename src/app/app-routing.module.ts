import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CocineroComponent } from './pages/cocinero/cocinero.component';
import { MeseroComponent } from './pages/mesero/mesero.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { PincodeComponent } from './auth/pincode/pincode.component';
import { RecuperarcontraComponent } from './auth/recuperarcontra/recuperarcontra.component';
import { ActualizacontraComponent } from './auth/actualizacontra/actualizacontra.component';
import { VPrincipalComponent } from './pages/vistas/v-principal/v-principal.component';
<<<<<<< HEAD
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'principal-panel/vista-publica', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'cocinero', component: CocineroComponent },
  { path: 'mesero', component: MeseroComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'pin-code', component: PincodeComponent },
  { path: 'recuperarcontra', component: RecuperarcontraComponent },
  { path: 'actualizarcontra', component: ActualizacontraComponent },
=======
import { Mesero2Component } from './pages/mesero2/mesero2.component';

const routes: Routes = [

  {path: '', component:AppComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'cajero', component:CajeroComponent},
  {path: 'cocinero', component:CocineroComponent},
  {path: 'mesero', component:MeseroComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'sidebar', component:SidebarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registrar', component:RegistrarComponent},
  {path: 'pin-code', component:PincodeComponent},
  {path: 'recuperarcontra', component:RecuperarcontraComponent},
  {path: 'actualizarcontra', component:ActualizacontraComponent},
  {path: 'v-principal', component:VPrincipalComponent},
  {path: 'mesero2', component:Mesero2Component},
>>>>>>> 4560d4d0c012308a64d2f57d5022cfcc28403e0d

];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
