import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagramaBarrasComponent } from './diagrama-barras/diagrama-barras.component';
import { DiagramaPastelComponent } from './diagrama-pastel/diagrama-pastel.component';

const routes: Routes = [
  { path: 'diagra-barras-mensual', component: DiagramaBarrasComponent, title: 'Diagramas de Barras Mensual' },
  { path: 'diagra-pastel-mensual', component: DiagramaPastelComponent, title: 'Diagramas de Pastel Mensual' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensualRoutingModule { }
