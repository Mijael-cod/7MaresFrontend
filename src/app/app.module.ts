import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 4560d4d0c012308a64d2f57d5022cfcc28403e0d
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MeseroComponent } from './pages/mesero/mesero.component';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

=======
import { VPrincipalComponent } from './pages/vistas/v-principal/v-principal.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { Mesero2Component } from './pages/mesero2/mesero2.component';
>>>>>>> 4560d4d0c012308a64d2f57d5022cfcc28403e0d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    AdminComponent,
    CajeroComponent,
    MeseroComponent,
    Mesero2Component,
    VPrincipalComponent,
    HeaderComponent,
    SidebarComponent,
>>>>>>> 4560d4d0c012308a64d2f57d5022cfcc28403e0d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    SharedModule,
    PagesModule,

=======
    RouterModule,
>>>>>>> 4560d4d0c012308a64d2f57d5022cfcc28403e0d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }