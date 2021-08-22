import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordResetService} from '@core/services/password-reset.service';
import {ResetPasswordAuthentication} from '@core/models/reset-password-authentication.model';
import {catchError} from 'rxjs/operators';
import {ValidatorFunctions} from '@core/validators/validator-functions';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.sass']
})
export class PasswordResetFormComponent implements AfterViewInit {

  @ViewChild('sendOtp', {read: TemplateRef})
  sendOtp!: TemplateRef<any>;

  @ViewChild('verification', {read: TemplateRef})
  verification!: TemplateRef<any>;

  @ViewChild('formContainer', {read: ViewContainerRef})
  formContainer!: ViewContainerRef;

  templates!: TemplateRef<any>[];

  currentTemplate = 1;

  createOtpForm: FormGroup;
  sendingOtp = false;

  constructor(private service: PasswordResetService) {
    this.createOtpForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        ValidatorFunctions.usernameValidator()
      ]),
      'email': new FormControl('', [
        Validators.email,
        Validators.required
      ])
    });
  }

  ngAfterViewInit(): void {
    this.templates = [
      this.sendOtp,
      this.verification
    ];
    this.setCurrentTemplate();
  }

  setCurrentTemplate() {
    this.formContainer.clear();
    this.formContainer.createEmbeddedView(this.templates[this.currentTemplate]).detectChanges();
  }

  sendOtpCode() {
    const auth: ResetPasswordAuthentication = {...this.createOtpForm.value};
    this.sendingOtp = true;
    this.disableOtpForm();
    this.service.authenticatePasswordReset(auth).subscribe(
      () => {
        this.nextTemplate();
        this.enableOtpForm();
        this.sendingOtp = false;
      },
      () => {
        this.nextTemplate();
        this.enableOtpForm();
        this.sendingOtp = false;
      }
    );
  }

  nextTemplate() {
    if (this.currentTemplate < this.templates.length) {
      this.currentTemplate++;
      this.setCurrentTemplate();
    }
  }

  prevTemplate() {
    if (this.currentTemplate > 0) {
      this.currentTemplate--;
      this.setCurrentTemplate();
    }
  }

  disableOtpForm() {
    this.createOtpForm.disable();
  }

  enableOtpForm() {
    this.createOtpForm.enable();
  }

}
