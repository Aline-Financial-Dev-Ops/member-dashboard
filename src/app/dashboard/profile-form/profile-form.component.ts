import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserProfile} from '@core/models/user-profile.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.sass']
})
export class ProfileFormComponent implements OnInit, OnChanges {

  @Input()
  userProfile?: UserProfile;

  contactInfoForm!: FormGroup;
  billingAddressForm!: FormGroup;
  mailingAddressForm!: FormGroup;

  constructor(fb: FormBuilder) {
    this.contactInfoForm = fb.group({
      phone: fb.control('', [
        Validators.required,
      ]),
      email: fb.control('', [
        Validators.required,
      ])
    });

    this.billingAddressForm = fb.group({
      address: fb.control('', [
        Validators.required,
      ]),
      city: fb.control('', [
        Validators.required,
      ]),
      state: fb.control('', [
        Validators.required,
      ]),
      zipcode: fb.control('', [
        Validators.required,
      ])
    });

    this.mailingAddressForm = fb.group({
      mailingAddress: fb.control('', [
        Validators.required,
      ]),
      mailingCity: fb.control('', [
        Validators.required,
      ]),
      mailingState: fb.control('', [
        Validators.required,
      ]),
      mailingZipcode: fb.control('', [
        Validators.required,
      ])
    });


  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setFormsToCurrentValues();
  }

  setFormsToCurrentValues() {
    if (this.userProfile) {
      const {contactInfo, billingAddress, mailingAddress} = this.userProfile;
      this.contactInfoForm.setValue({
        phone: contactInfo.phone,
        email: contactInfo.email
      });
      this.billingAddressForm.setValue({
        address: billingAddress.address,
        city: billingAddress.city,
        state: billingAddress.state,
        zipcode: billingAddress.zipcode
      });
      this.mailingAddressForm.setValue({
        mailingAddress: mailingAddress.address,
        mailingCity: mailingAddress.city,
        mailingState: mailingAddress.state,
        mailingZipcode: mailingAddress.zipcode
      });
    }
  }

}
