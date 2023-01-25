import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Gender {
  value: string;
  viewValue: string;
}

interface Payment {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      idNumber: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      payment: ['', Validators.required],
    });
  }

  genders: Gender[] = [
    { value: 'male-0', viewValue: 'Male' },
    { value: 'female-1', viewValue: 'Female' },
    { value: 'prefernotsay-2', viewValue: 'I prefer not to say' },
  ];

  payments: Payment[] = [
    { value: 'cash-0', viewValue: 'Cash' },
    { value: 'credit-1', viewValue: 'Credit Card' },
    { value: 'paypal-2', viewValue: 'Paypal' },
  ];
}
