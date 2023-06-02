import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisaFormComponent } from './add-visa-form.component';

describe('AddVisaFormComponent', () => {
  let component: AddVisaFormComponent;
  let fixture: ComponentFixture<AddVisaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVisaFormComponent]
    });
    fixture = TestBed.createComponent(AddVisaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
