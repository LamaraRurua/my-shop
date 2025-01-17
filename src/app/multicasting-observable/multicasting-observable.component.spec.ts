import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastingObservableComponent } from './multicasting-observable.component';

describe('MulticastingObservableComponent', () => {
  let component: MulticastingObservableComponent;
  let fixture: ComponentFixture<MulticastingObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulticastingObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticastingObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
