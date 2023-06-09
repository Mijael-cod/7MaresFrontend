import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { PanelAdministradorComponent } from './panel-administrador/panel-administrador.component';
import { MeseroPanelComponent } from './mesero-panel/mesero-panel.component';
import { SidebarMeseroComponent } from './sidebar-mesero/sidebar-mesero.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PanelAdministradorComponent,
    MeseroPanelComponent,
    SidebarMeseroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PanelAdministradorComponent
  ]
})
export class SharedModule { }
