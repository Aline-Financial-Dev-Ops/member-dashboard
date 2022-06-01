import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorFunctions} from '@core/validators/validator-functions';

@Component({
  selector: 'app-activate-card-form',
  templateUrl: './activate-card-form.component.html',
  styleUrls: ['./activate-card-form.component.sass']
})
export class ActivateCardFormComponent implements OnInit {

  activateCardForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const {cardNumberValidator} = ValidatorFunctions;
    this.activateCardForm = new FormGroup({
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        cardNumberValidator()
      ]),
      securityCode: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ]),
      expirationDate: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{2}\/\d{2}$/g)
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/g)
      ]),
      lastFourOfSSN: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ])
    });
  }

  activateCard() {
    console.log("Activating card...");
  }

}
