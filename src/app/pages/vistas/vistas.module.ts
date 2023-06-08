import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistasRoutingModule } from './vistas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VPrincipalComponent } from './v-principal/v-principal.component';


@NgModule({
  declarations: [
    VPrincipalComponent
  ],
  imports: [
    CommonModule,
    VistasRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule
  ]
})
export class VistasModule { }
