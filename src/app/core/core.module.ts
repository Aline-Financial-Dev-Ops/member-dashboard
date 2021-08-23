import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandlerModule} from '@error-handler/error-handler.module';
import {SingleCharDirective} from '@core/directives/single-char.directive';


@NgModule({
  declarations: [
    SingleCharDirective
  ],
  imports: [
    HttpClientModule,
    ErrorHandlerModule,
  ],
    exports: [
        HttpClientModule,
        SingleCharDirective
    ]
})
export class CoreModule { }
