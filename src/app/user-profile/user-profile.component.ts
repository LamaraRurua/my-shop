import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight.directive';
import { RepeatDirective } from '../directives/repeat.directive';
import { PhonePipe } from '../pipes/phone.pipe';
import { FilterItemsPipe } from '../pipes/filter-items.pipe';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, HighlightDirective, RepeatDirective, PhonePipe, FilterItemsPipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  username: string = 'John Doe';
  isActive: boolean = true;
  phoneNumber = '1234567890';
  items = ['Apple', 'Banana', 'Orange', 'Pineapple'];
  searchTerm = '';

  //counterService: CounterService = new CounterService();
  constructor(private counterService: CounterService) {}

  incrementCounter() {
    this.counterService.increment();
  }
}
