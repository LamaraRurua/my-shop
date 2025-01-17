import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisContactComponent } from './paris-contact.component';

describe('ParisContactComponent', () => {
  let component: ParisContactComponent;
  let fixture: ComponentFixture<ParisContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParisContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParisContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
