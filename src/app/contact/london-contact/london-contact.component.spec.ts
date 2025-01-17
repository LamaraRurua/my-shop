import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonContactComponent } from './london-contact.component';

describe('LondonContactComponent', () => {
  let component: LondonContactComponent;
  let fixture: ComponentFixture<LondonContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LondonContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LondonContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
