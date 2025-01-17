import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css'
})
export class ObservableDemoComponent {
  simpleObservable$: Observable<string>;
  messages: string[] = [];
  subscription!: Subscription;

  constructor() {
    this.simpleObservable$ = new Observable((observer) => {
      observer.next('Hello');
      observer.next('World');
      observer.complete();
    });
  }

  ngOnInit() {
    const button: any = document.getElementById('click-button');

    const buttonClick$ = fromEvent(button, "click");

    this.subscription = buttonClick$.subscribe(() => {
      this.startObservable();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startObservable(): void {
    this.simpleObservable$.subscribe({
      next: (value) => { 
        console.log(value);
        this.messages.push(value);
      },
      //error: (error) => { console.log(error); },
      complete: () => { 
        console.log("Completed!");
        this.messages.push("Completed!");
      }
    });
  }
}
