import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {SingleCharValue} from '@core/models/single-char-value.model';

@Component({
  template: `
    <input type="text"
           #thisInput
           mask="\\d{1}"
           [(ngModel)]="valueArray[valueIndex]"
           (ngModelChange)="onValueChange()"
           (keyup)="onKeyup($event)"
           inputmode="numeric"
           class="single-char-input"
           maxlength="1"/>
  `,
  styleUrls: ['single-char-input.component.sass']
})
export class SingleCharInputComponent {

  @ViewChild('thisInput')
  inputEl!: ElementRef;

  @Output()
  valueChange!: EventEmitter<SingleCharValue>;

  @Output()
  keyupEvent!: EventEmitter<{event: any, valueEvent: SingleCharValue}>;

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

  onKeyup(event: any) {
    this.keyupEvent.emit({event, valueEvent: {
        value: this.valueArray[this.valueIndex],
        array: this.valueArray,
        index: this.valueIndex
      }});
  }

  setFocus() {
    this.inputEl.nativeElement.focus();
  }

}
