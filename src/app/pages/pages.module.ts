import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { CocineroComponent } from './cocinero/cocinero.component';
import { CocineroPrincipalComponent } from './cocinero/cocinero-principal/cocinero-principal.component';
>>>>>>> 4560d4d0c012308a64d2f57d5022cfcc28403e0d

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
<<<<<<< HEAD
  declarations: [],
=======
  declarations: [
    CocineroComponent,
    CocineroPrincipalComponent
  ],
>>>>>>> 4560d4d0c012308a64d2f57d5022cfcc28403e0d
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    
  ]
})
export class PagesModule { }
