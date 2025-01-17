import { Component } from '@angular/core';
import { interval, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  standalone: true,
  imports: [],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.css'
})
export class MergeComponent {
  ngOnInit() {
    const observable1$ = interval(2000).pipe(take(4));
    const observable2$ = interval(1000).pipe(take(4));

    const merged$ = merge(observable1$, observable2$);

    merged$.subscribe((value) => console.log(value));
  }
}
