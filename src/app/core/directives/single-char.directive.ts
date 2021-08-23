import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {SingleCharInputComponent} from '@core/components/single-char-input/single-char-input.component';
import {ControlValueAccessor, NgModel} from '@angular/forms';
import {SingleCharValue} from '@core/models/single-char-value.model';

@Directive({
  selector: '[appSingleChar]',
  providers: [
    NgModel
  ]
})
export class SingleCharDirective implements OnInit {

  @Input()
  inputLength = 0;

  @Output()
  valueChange?: EventEmitter<string>;
  valueArray: string[];
  valueAccessor: ControlValueAccessor | null;

  constructor(private container: ViewContainerRef,
              private renderer: Renderer2,
              private resolver: ComponentFactoryResolver,
              private model: NgModel) {
    this.valueArray = [];
    this.valueAccessor = model.valueAccessor;
  }

  createInput(i: number): ComponentRef<SingleCharInputComponent> {
    const factory = this.resolver.resolveComponentFactory(SingleCharInputComponent);
    const ref = this.container.createComponent(factory);
    ref.instance.valueIndex = i;
    ref.instance.valueArray = this.valueArray;
    ref.instance.valueChange = new EventEmitter<SingleCharValue>();
    ref.instance.valueChange.subscribe(value => this.onValueChange(value));
    return ref;
  }

  onValueChange({array}: SingleCharValue) {
    this.valueChange?.emit(array.join(''));
  }

  ngOnInit() {
    for (let i = 0; i < this.inputLength; i++) {
      this.createInput(i);
    }
  }

}
