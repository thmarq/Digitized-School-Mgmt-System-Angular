import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormModule } from './login-form/login-form.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminFormComponent,
    LoginFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LoginFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
