import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-template-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './basic-template-form.component.html',
  styleUrl: './basic-template-form.component.css'
})
export class BasicTemplateFormComponent {
  name: string = "";
  email: string = "";
  
  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
    form.reset();
  }
}
