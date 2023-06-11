import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagramaBarrasComponent } from './diagrama-barras/diagrama-barras.component';
import { DiagramaPastelComponent } from './diagrama-pastel/diagrama-pastel.component';

const routes: Routes = [
  { path: 'diagra-barras-diario', component: DiagramaBarrasComponent, title: 'Diagramas de Barras Diario' },
  { path: 'diagra-pastel-diario', component: DiagramaPastelComponent, title: 'Diagramas de Barras Diario' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiarioRoutingModule { }
