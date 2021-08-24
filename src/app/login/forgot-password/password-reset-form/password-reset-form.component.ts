import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordResetService} from '@core/services/password-reset.service';
import {ResetPasswordAuthentication} from '@core/models/reset-password-authentication.model';
import {ValidatorFunctions} from '@core/validators/validator-functions';
import {OtpAuthentication} from '@core/models/otp-authentication.model';
import {ResetPasswordRequest} from '@core/models/reset-password-request.model';

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

  @ViewChild('resetPasswordTemp', {read: TemplateRef})
  resetPasswordTemp!: TemplateRef<any>;

  @ViewChild('resetSuccess', {read: TemplateRef})
  resetSuccess!: TemplateRef<any>;

  @ViewChild('formContainer', {read: ViewContainerRef})
  formContainer!: ViewContainerRef;

  templates!: TemplateRef<any>[];

  currentTemplate = 0;

  createOtpForm: FormGroup;
  resetPasswordForm: FormGroup;

  sendingOtp = false;
  verifyingOtp = false;
  resettingPassword = false;

  otp = '';
  verificationError?: string;
  resetPasswordError?: string;
  username = '';

  constructor(private service: PasswordResetService) {
    this.createOtpForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        ValidatorFunctions.usernameValidator()
      ]),
      'contactMethod': new FormControl('phone', [
        Validators.required
      ])
    });
    this.resetPasswordForm = new FormGroup({
      'newPassword': new FormControl('', [
        Validators.required,
        ValidatorFunctions.passwordValidator()
      ])
    });
    this.resetPasswordForm.addControl('confirmNewPassword',
      new FormControl('', [
        Validators.required,
        ValidatorFunctions.confirmValues(this.resetPasswordForm.get('newPassword')!)
      ]));
  }

  ngAfterViewInit(): void {
    this.templates = [
      this.sendOtp,
      this.verification,
      this.resetPasswordTemp,
      this.resetSuccess
    ];
    this.setCurrentTemplate();
  }

  setCurrentTemplate() {
    this.formContainer.clear();
    this.formContainer.createEmbeddedView(this.templates[this.currentTemplate]).detectChanges();
  }

  sendOtpCode() {
    const auth: ResetPasswordAuthentication = {...this.createOtpForm.value};
    this.username = auth.username;
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
    if (this.currentTemplate < this.templates.length - 1) {
      this.currentTemplate++;
      this.setCurrentTemplate();
    }
  }

  disableOtpForm() {
    this.createOtpForm.disable();
  }

  enableOtpForm() {
    this.createOtpForm.enable();
  }

  updateOtp(event: string) {
    this.otp = event;
  }

  verifyOtp() {
    this.verifyingOtp = true;
    const auth: OtpAuthentication = {
      username: this.createOtpForm.value.username,
      otp: this.otp
    };

    this.service.verifyOtp(auth)
      .subscribe(
        res => {
          if (res.status === 200) {
            this.nextTemplate();
            this.verifyingOtp = false;
          }
        },
        error => {
          this.verificationError = error;
          this.verifyingOtp = false;
        }
      );
  }

  otpIncorrectLength(): boolean {
    return this.otp.length < 6;
  }

  resetPassword() {
    this.resettingPassword = true;

    const request: ResetPasswordRequest = {
      username: this.username,
      newPassword: this.resetPasswordForm.value.newPassword,
      otp: this.otp
    };

    this.service.resetPassword(request)
      .subscribe(
        res => {
          if (res.status === 200) {
            this.nextTemplate();
            this.resettingPassword = false;
          }
        },
        err => {
          this.resetPasswordError = err;
          this.resettingPassword = false;
        });
  }

}
