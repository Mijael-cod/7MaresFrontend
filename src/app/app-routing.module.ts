import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CajeroComponent } from './pages/cajero/cajero.component';
import { CocineroComponent } from './pages/cocinero/cocinero.component';
import { MeseroComponent } from './pages/mesero/mesero.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [

  {path: '', component:AppComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'cajero', component:CajeroComponent},
  {path: 'cocinero', component:CocineroComponent},
  {path: 'mesero', component:MeseroComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'sidebar', component:SidebarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
