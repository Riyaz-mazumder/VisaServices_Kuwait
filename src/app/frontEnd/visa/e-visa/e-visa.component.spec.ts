import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVisaComponent } from './e-visa.component';

describe('EVisaComponent', () => {
  let component: EVisaComponent;
  let fixture: ComponentFixture<EVisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EVisaComponent]
    });
    fixture = TestBed.createComponent(EVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
