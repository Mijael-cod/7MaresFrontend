import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
