import {Component} from '@angular/core';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.sass']
})
export class OtpInputComponent {

  value = '';

  constructor() {
  }

  printValue(event: any) {
    console.log(event);
  }

}
