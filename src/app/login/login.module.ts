import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {AppIconsModule} from '../app-icons.module';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppIconsModule
  ]
})
export class LoginModule { }
