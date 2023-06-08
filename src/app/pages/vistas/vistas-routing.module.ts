import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VPrincipalComponent } from './v-principal/v-principal.component';

const routes: Routes = [
  { path: 'vista-publica', component: VPrincipalComponent, title: 'Vista Publica'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistasRoutingModule { }
