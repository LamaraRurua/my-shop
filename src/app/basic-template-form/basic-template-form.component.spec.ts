import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTemplateFormComponent } from './basic-template-form.component';

describe('BasicTemplateFormComponent', () => {
  let component: BasicTemplateFormComponent;
  let fixture: ComponentFixture<BasicTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTemplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
