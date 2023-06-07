import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaInqueryAndPrintingComponent } from './visa-inquery-and-printing.component';

describe('VisaInqueryAndPrintingComponent', () => {
  let component: VisaInqueryAndPrintingComponent;
  let fixture: ComponentFixture<VisaInqueryAndPrintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisaInqueryAndPrintingComponent]
    });
    fixture = TestBed.createComponent(VisaInqueryAndPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
