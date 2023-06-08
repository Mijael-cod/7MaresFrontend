import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrarComponent } from './auth/registrar/registrar.component';
import { PincodeComponent } from './auth/pincode/pincode.component';
import { RecuperarcontraComponent } from './auth/recuperarcontra/recuperarcontra.component';
import { ActualizacontraComponent } from './auth/actualizacontra/actualizacontra.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'principal-panel/vista-publica', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'pin-code', component: PincodeComponent },
  { path: 'recuperarcontra', component: RecuperarcontraComponent },
  { path: 'actualizarcontra', component: ActualizacontraComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
