import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/Forms';
import { ReactiveFormValidator } from './reactive-form-validation';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  maxDate: String;

  ngOnInit(): void {
    this.maxDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  }

  sexList = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
  ];

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Mobile' },
  ];
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]{1,}'),
    ]),
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', [
      Validators.required,
      ReactiveFormValidator.dateOfBirthValidator,
    ]),
    contactMethod: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    isSubscribed: new FormControl('', Validators.requiredTrue),
  });

  submit() {
    console.log('reactive form submitted');
  }

  get firstname() {
    return this.form.get('firstName');
  }

  get lastname() {
    return this.form.get('lastName');
  }

  get dateofbirth() {
    return this.form.get('dateOfBirth');
  }

  get contactmethod() {
    return this.form.get('contactMethod');
  }

  get sex() {
    return this.form.get('sex');
  }

  get issubscribed() {
    return this.form.get('isSubscribed');
  }
}
