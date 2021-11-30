import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form.component';



@NgModule({
  // declarations: [LoginFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  
  // bootstrap: [LoginFormComponent]
})

export class LoginFormModule { }
