import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicTemplateFormComponent } from './basic-template-form/basic-template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicTemplateFormComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-forms';
}
