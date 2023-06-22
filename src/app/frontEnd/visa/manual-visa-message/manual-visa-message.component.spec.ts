import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualVisaMessageComponent } from './manual-visa-message.component';

describe('ManualVisaMessageComponent', () => {
  let component: ManualVisaMessageComponent;
  let fixture: ComponentFixture<ManualVisaMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualVisaMessageComponent]
    });
    fixture = TestBed.createComponent(ManualVisaMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
