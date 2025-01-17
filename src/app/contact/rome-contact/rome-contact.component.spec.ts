import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomeContactComponent } from './rome-contact.component';

describe('RomeContactComponent', () => {
  let component: RomeContactComponent;
  let fixture: ComponentFixture<RomeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomeContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
