import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './pages/admin/admin.module';
import { OAuthModule } from 'angular-oauth2-oidc';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    PagesModule,
    RouterModule,
    AuthModule,
    AdminModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }