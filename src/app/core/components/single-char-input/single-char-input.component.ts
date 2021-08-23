import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SingleCharValue} from '@core/models/single-char-value.model';

@Component({
  template: `
    <input type="text"
           mask="\\d{1}"
           [(ngModel)]="valueArray[valueIndex]"
           (ngModelChange)="onValueChange()"
           inputmode="numeric"
           class="single-char-input"
           maxlength="1"/>
  `,
  styleUrls: ['single-char-input.component.sass']
})
export class SingleCharInputComponent {

  @Output()
  valueChange!: EventEmitter<SingleCharValue>;

  @Input()
  valueArray!: string[];

  @Input()
  valueIndex = 0;

  constructor() {
  }

  onValueChange() {
    this.valueChange.emit(
      {
        value: this.valueArray[this.valueIndex],
        array: this.valueArray,
        index: this.valueIndex
      }
    );
  }

}
