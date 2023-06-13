import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoriaComponent } from './admin-categoria/admin-categoria.component';
import { AdminPlatilloComponent } from './admin-platillo/admin-platillo.component';

const routes: Routes = [
  {path: 'admin-categoria', component:AdminCategoriaComponent, title: 'Admin-Categoria'},
  {path: 'admin-platillo', component:AdminPlatilloComponent, title: 'Admin-Platillo'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMeseroRoutingModule { }
