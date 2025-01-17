import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  ngOnInit() {
    const subject = new Subject<number>();

    subject.subscribe((value) => { console.log(`Subscriber 1: ${value}`); });

    subject.next(1);
    subject.next(2);

    subject.subscribe((value) => { console.log(`Subscriber 2: ${value}`); });

    subject.next(3);
  }
}
