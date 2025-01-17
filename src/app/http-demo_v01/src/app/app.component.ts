import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpTestComponent } from './http-test/http-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-demo';
}
