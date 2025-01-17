import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent {
  ngOnInit() {
    const subject = new ReplaySubject<number>(2);

    subject.subscribe((value) => { console.log(`Subscriber 1: ${value}`); });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe((value) => { console.log(`Subscriber 2: ${value}`); });

    subject.next(5);
  }
}
