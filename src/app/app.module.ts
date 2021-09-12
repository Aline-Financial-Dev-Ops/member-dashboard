import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from '@login/login.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RegistrationModule} from '@registration/registration.module';
import {CoreModule} from '@core/core.module';
import {GlobalModalModule} from '@app/global-modal/global-modal.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    FontAwesomeModule,
    GlobalModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
