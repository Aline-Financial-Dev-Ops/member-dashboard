import {Directive, ElementRef, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appSingleChar]'
})
export class SingleCharDirective implements OnInit {

  @Input()
  inputLength = 0;

  currentIndex = 0;

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document) {
    this.renderer.addClass(this.el.nativeElement, 'otp-input');
  }

  createInput(index: number): any {
    const input = this.document.createElement('input');
    input.maxLength = 1;
    input.setAttribute('mask', '\\d*');
    input.setAttribute('pattern', '[0-9]*');
    input.setAttribute('data-index', String(index));
    this.renderer.addClass(input, 'single-char-input');
    this.renderer.addClass(input, 'fw-bold');
    this.renderer.addClass(input, 'text-primary');
    input.addEventListener('keyup', this.goNext.bind(this));
    input.addEventListener('focus', this.setIndex.bind(this));
    input.value='';
    return input;
  }

  setIndex(e: any) {
    this.currentIndex = parseInt(e.target.getAttribute('data-index'));
  }

  goNext(e: any) {
    const index = parseInt(e.target.getAttribute('data-index'));
    if (index < this.inputLength - 1
      && e.target.value.length > 0
      && !isNaN(e.key)) {
      const nextInput = this.el.nativeElement
        .querySelector(`input.single-char-input[data-index='${index + 1}']`);
        nextInput.focus();
    }
  }

  ngOnInit() {
    console.log('Initialize input.');
    console.log(this.inputLength);
    for (let i = 0; i < this.inputLength; i++) {
      this.renderer.appendChild(this.el.nativeElement, this.createInput(i));
    }
  }

}
