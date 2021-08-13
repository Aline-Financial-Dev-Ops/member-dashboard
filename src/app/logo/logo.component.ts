import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="d-flex flex-row justify-content-center font-noto-sans">
      <div class="fs-1 text-primary" [ngClass]="{'animate__animated animate__flipInX': animate}">Aline</div>
      <img src="../../assets/images/logo.svg"
           class="logo"
           [ngClass]="{'animate__animated animate__flipInY animate__delay-half-second': animate}"
           draggable="false"
           alt="$"/>
      <div class="fs-1 text-light" [ngClass]="{'animate__animated animate__flipInX': animate}">Financial</div>
    </div>
  `,
  styleUrls: [
    './logo.component.sass'
  ]
})
export class LogoComponent {
  @Input()
  animate = false;
}
