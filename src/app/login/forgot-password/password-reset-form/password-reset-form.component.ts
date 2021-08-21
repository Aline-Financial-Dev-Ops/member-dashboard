import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.sass']
})
export class PasswordResetFormComponent implements AfterViewInit {

  @ViewChild('sendOtp', {read: TemplateRef})
  sendOtp!: TemplateRef<any>;

  @ViewChild('formContainer', {read: ViewContainerRef})
  formContainer!: ViewContainerRef;

  templates!: TemplateRef<any>[];

  currentTemplate = 0;

  createOtpForm: FormGroup;

  constructor() {
    this.createOtpForm = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl('')
    });
  }

  ngAfterViewInit(): void {
    this.templates = [
      this.sendOtp
    ];
    this.formContainer.createEmbeddedView(this.templates[this.currentTemplate]);
  }



}
