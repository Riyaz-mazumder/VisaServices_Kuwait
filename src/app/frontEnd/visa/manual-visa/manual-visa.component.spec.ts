import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualVisaComponent } from './manual-visa.component';

describe('ManualVisaComponent', () => {
  let component: ManualVisaComponent;
  let fixture: ComponentFixture<ManualVisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualVisaComponent]
    });
    fixture = TestBed.createComponent(ManualVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
