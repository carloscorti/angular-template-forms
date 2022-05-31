import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('formRef') signUpForm!: NgForm;
  title = 'angular-forms';
  defaulfUsernameValue = 'Enter your User Name';
  defaulfEmailValue = 'enter-your@email.here';
  defaulfSelectValue = 'pet';
  colorsRadio = ['blue', 'red'];
  defaulfColorsRadioChecked = 'blue';

  selectedUsernameValue = '';
  selectedEmailValue = '';
  selectedSecretValue = '';
  selectedColorsRadioChecked = '';

  submitted = false;

  onSuggestUserNameClick() {
    this.signUpForm.form.patchValue({
      userDataInputs: {
        username: 'Suggested name',
      },
    });
  }

  setCompeteFormFieldsValues() {
    this.signUpForm.setValue({
      colorRadioButtons: {
        color: 'red',
      },
      secret: 'teacher',
      userDataInputs: {
        email: 'new-email@value.set',
        username: 'Other suggested name',
      },
    });
  }

  setDefaultFormValues() {
    this.signUpForm.setValue({
      colorRadioButtons: {
        color: this.defaulfColorsRadioChecked,
      },
      secret: this.defaulfSelectValue,
      userDataInputs: {
        email: this.defaulfEmailValue,
        username: this.defaulfUsernameValue,
      },
    });
  }

  onSubmit() {
    this.selectedUsernameValue = this.signUpForm.value.userDataInputs.username;
    this.selectedEmailValue = this.signUpForm.value.userDataInputs.email;
    this.selectedSecretValue = this.signUpForm.value.secret;
    this.selectedColorsRadioChecked =
      this.signUpForm.value.colorRadioButtons.color;
    this.submitted = true;
    console.log('form', this.signUpForm);
  }
}
