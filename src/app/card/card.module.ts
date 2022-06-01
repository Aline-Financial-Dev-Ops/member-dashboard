import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivateCardComponent } from './activate-card/activate-card.component';
import { ActivateCardFormComponent } from './activate-card/activate-card-form/activate-card-form.component';



@NgModule({
  declarations: [
    ActivateCardComponent,
    ActivateCardFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
