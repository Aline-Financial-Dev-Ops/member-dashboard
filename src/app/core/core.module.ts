import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandlerModule} from '@error-handler/error-handler.module';


@NgModule({
  imports: [
    HttpClientModule,
    ErrorHandlerModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
