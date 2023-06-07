import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaApprovalAndTrackingComponent } from './visa-approval-and-tracking.component';

describe('VisaApprovalAndTrackingComponent', () => {
  let component: VisaApprovalAndTrackingComponent;
  let fixture: ComponentFixture<VisaApprovalAndTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisaApprovalAndTrackingComponent]
    });
    fixture = TestBed.createComponent(VisaApprovalAndTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
