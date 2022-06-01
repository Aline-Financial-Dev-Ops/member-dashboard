import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivateCardComponent} from './activate-card/activate-card.component';
import {ActivateCardFormComponent} from './activate-card/activate-card-form/activate-card-form.component';
import {AppMaskModule} from '@app/app-mask.module';
import {CoreModule} from '@core/core.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ActivateCardComponent,
    ActivateCardFormComponent
  ],
  imports: [
    CommonModule,
    AppMaskModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class CardModule { }
