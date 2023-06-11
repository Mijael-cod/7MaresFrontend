import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { PlatilloComponent } from './platillo/platillo.component';

const routes: Routes = [
  {path: 'categoria', component:CategoriaComponent, title: "Categoria - Mesero"},
  {path: 'platillo', component:PlatilloComponent, title: "Platillo - Mesero"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeseroRoutingModule { }
