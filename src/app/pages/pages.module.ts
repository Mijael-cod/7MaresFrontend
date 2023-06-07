import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocineroComponent } from './cocinero/cocinero.component';
import { CocineroPrincipalComponent } from './cocinero/cocinero-principal/cocinero-principal.component';



@NgModule({
  declarations: [
    CocineroComponent,
    CocineroPrincipalComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PagesModule { }
