import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandlerModule} from '@error-handler/error-handler.module';
import {SingleCharDirective} from '@core/directives/single-char.directive';
import {SingleCharInputComponent} from '@core/components/single-char-input/single-char-input.component';
import {AppMaskModule} from '@app/app-mask.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SingleCharDirective,
    SingleCharInputComponent
  ],
  imports: [
    HttpClientModule,
    ErrorHandlerModule,
    AppMaskModule,
    FormsModule,
  ],
    exports: [
        HttpClientModule,
        SingleCharDirective
    ]
})
export class CoreModule { }
