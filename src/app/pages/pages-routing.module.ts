import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAdministradorComponent } from '../shared/panel-administrador/panel-administrador.component';
import { CajeroModule } from './cajero/cajero.module';
import { MeseroModule } from './mesero/mesero.module';
import { MeseroPanelComponent } from '../shared/mesero-panel/mesero-panel.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegistrarComponent } from '../auth/registrar/registrar.component';


const routes: Routes = [
  {
    path: 'principal-panel',
    title: 'principal Panel | 7 mares',
    children: [
      /*  { path: 'login', canActivate: [LoginGuard], component: LoginComponent, title: 'Login' }, */
      /*  { path: 'recuperar-contrasenia', component: RecuperarContraseniaComponent, title: 'Recuperando Contraseña' }, */
      { path: '', loadChildren: () => import('./vistas/vistas.module').then(m => m.VistasModule) },
    ]
  },

  {
    path: 'admin-panel',
    // canActivate: [AdminPanelGuard],
    component: PanelAdministradorComponent,
    title: 'Admin Panel | 7 Mares',
    children: [
      // { path: 'dashboard', component: VistaUsuariosLogeadosComponent, title: 'Dashboard' },
      // { path: '', loadChildren: () => import('./admin').then(m => m.AdminModule) },
      { path: '', loadChildren: () => import('./cajero/cajero.module').then(m => m.CajeroModule) },
      { path: '', loadChildren: () => import('./cocinero/cocinero.module').then(m => m.CocineroModule) }
    ]
  },

  {
    path: 'navbar-panel',
    component: MeseroPanelComponent,
    title: 'Admin Panel | 7 Mares',
    children: [
      { path: '', loadChildren: () => import('./mesero/mesero.module').then(m => m.MeseroModule) },
      { path: 'login', component: LoginComponent, title: 'Login'},
      { path: 'registrar', component: RegistrarComponent, title: 'Registrar'}

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
