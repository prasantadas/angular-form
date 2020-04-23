import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  minDob: boolean = false;
  maxDob: boolean = true;

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Fax' }
  ];
  sexList = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' }
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(f) {
    console.log(f);
  }
  checkAge(dob) {
    console.log(dob);
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 18) this.minDob = false;
    if (age > 100) this.maxDob = false;
  }
}
