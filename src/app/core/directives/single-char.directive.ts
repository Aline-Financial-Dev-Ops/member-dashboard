import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appSingleChar]'
})
export class SingleCharDirective {

  constructor(el: ElementRef) {

  }

}
