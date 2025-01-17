import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent {
  ngOnInit() {
    const subject = new BehaviorSubject<number>(0);

    subject.subscribe((value) => { console.log(`Subscriber 1: ${value}`); });

    subject.next(1);
    subject.next(2);

    subject.subscribe((value) => { console.log(`Subscriber 2: ${value}`); });

    subject.next(3);
  }
}
