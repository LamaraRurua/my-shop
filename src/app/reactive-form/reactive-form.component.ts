import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ageValidator, usernameAvailableValidator } from '../helpers/validators';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, ageValidator(21)]],
      languages: this.fb.array([this.createLanguageControl()]),
      username: ['', [Validators.required], [usernameAvailableValidator()]],
    });
  }

  get languages(): FormArray {
    return this.myForm.get('languages') as FormArray;
  }

  createLanguageControl(): FormControl {
    return this.fb.control('', [Validators.required]);
  }

  addLanguage() {
    this.languages.push(this.createLanguageControl());
  }

  removeLanguage(index: number) {
    this.languages.removeAt(index);
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log("Form Data: ", this.myForm.value);
      this.myForm.reset();
    }
  }
}
