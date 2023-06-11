import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagramaBarrasComponent } from './diagrama-barras/diagrama-barras.component';
import { DiagramaPastelComponent } from './diagrama-pastel/diagrama-pastel.component';

const routes: Routes = [
  { path: 'diagra-barras-semanal', component: DiagramaBarrasComponent, title: 'Diagramas de Barras Semanal' },
  { path: 'diagra-pastel-semanal', component: DiagramaPastelComponent, title: 'Diagramas de Pastel Semanal' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemanalRoutingModule { }
