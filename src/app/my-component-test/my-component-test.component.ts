import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-component-test',
  standalone: true,
  imports: [],
  templateUrl: './my-component-test.component.html',
  styleUrl: './my-component-test.component.css'
})
export class MyComponentTestComponent {
  @Input() childMessage: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  message: string = "Hello, Angular!";
  isButtonDisabled: boolean = false;
  counter: number = 0;

  constructor() {
    console.log('Hello from the test component constructor');
  }
 
  incrementCounter() {
    this.counter++;
  }

  sendMessage() {
    this.messageEvent.emit("Hello from Child!");
  }
}
