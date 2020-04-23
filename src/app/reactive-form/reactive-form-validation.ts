import { AbstractControl, ValidationErrors } from '@angular/Forms';

export class ReactiveFormValidator {
  static dateOfBirthValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const dob = control.value as Date;

    console.log(dob);
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(age);
    if (age < 18 || age > 100) {
      console.log('date of birth is not eligible');
      return {
        ageNotEligible: {
          minAge: 18,
          maxAge: 100,
        },
      };
    }

    return null;
  }
}
