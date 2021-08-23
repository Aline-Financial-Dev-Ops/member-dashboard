import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter, Inject,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {SingleCharInputComponent} from '@core/components/single-char-input/single-char-input.component';
import {ControlValueAccessor, NgModel} from '@angular/forms';
import {SingleCharValue} from '@core/models/single-char-value.model';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appSingleChar]',
  providers: [
    NgModel
  ]
})
export class SingleCharDirective implements OnInit, AfterViewInit {

  @Input()
  inputLength = 0;

  @Output()
  valueChange?: EventEmitter<string>;
  valueArray: string[];
  valueAccessor: ControlValueAccessor | null;

  inputComponents: SingleCharInputComponent[] = [];

  constructor(private container: ViewContainerRef,
              private renderer: Renderer2,
              private resolver: ComponentFactoryResolver,
              private model: NgModel,
              @Inject(DOCUMENT) private document: Document) {
    this.valueArray = [];
    this.valueAccessor = model.valueAccessor;
  }

  createInput(i: number): ComponentRef<SingleCharInputComponent> {
    const factory = this.resolver.resolveComponentFactory(SingleCharInputComponent);
    const ref = this.container.createComponent(factory);
    ref.instance.valueIndex = i;
    ref.instance.valueArray = this.valueArray;
    ref.instance.valueChange = new EventEmitter<SingleCharValue>();
    ref.instance.keyupEvent = new EventEmitter<{event: any; valueEvent: SingleCharValue}>();
    ref.instance.valueChange.subscribe(value => this.onValueChange(value));
    ref.instance.keyupEvent.subscribe(
      ({event, valueEvent}) => {
        if (valueEvent.index < this.inputLength - 1 && !isNaN(event.key)) {
          this.inputComponents[valueEvent.index + 1].setFocus();
        }
      }
    );
    return ref;
  }

  onValueChange({array}: SingleCharValue) {
    this.valueChange?.emit(array.join(''));
  }

  ngOnInit() {
    for (let i = 0; i < this.inputLength; i++) {
      const ref = this.createInput(i);
      this.inputComponents.push(ref.instance);
    }
  }

  ngAfterViewInit() {
    this.inputComponents[0].setFocus();
  }

}
