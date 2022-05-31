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

  onSuggestUserNameClick() {
    this.signUpForm.form.patchValue({
      userDataInputs: {
        username: 'Suggested name',
      },
    });
  }

  onSubmit() {
    console.log('form', this.signUpForm);
  }
}
