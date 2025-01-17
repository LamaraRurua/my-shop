import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css'
})
export class AsyncSubjectComponent {
  ngOnInit() {
    const subject = new AsyncSubject<number>();

    subject.subscribe((value) => { console.log(`Subscriber 1: ${value}`); });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.complete();

    subject.subscribe((value) => { console.log(`Subscriber 2: ${value}`); });

  }
}
