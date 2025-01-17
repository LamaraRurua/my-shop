import { Component } from '@angular/core';
import { interval, share, take } from 'rxjs';

@Component({
  selector: 'app-multicasting-observable',
  standalone: true,
  imports: [],
  templateUrl: './multicasting-observable.component.html',
  styleUrl: './multicasting-observable.component.css'
})
export class MulticastingObservableComponent {
  ngOnInit() {
    const source$ = interval(1000).pipe(take(5), share());

    source$.subscribe((value) => console.log(`Subscriber 1: ${value}`));
    setTimeout(() => {
      source$.subscribe((value) => console.log(`Subscriber 2: ${value}`));
    }, 2000);
  }
}
