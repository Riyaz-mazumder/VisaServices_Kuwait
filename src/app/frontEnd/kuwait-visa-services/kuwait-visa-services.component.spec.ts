import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuwaitVisaServicesComponent } from './kuwait-visa-services.component';

describe('KuwaitVisaServicesComponent', () => {
  let component: KuwaitVisaServicesComponent;
  let fixture: ComponentFixture<KuwaitVisaServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KuwaitVisaServicesComponent]
    });
    fixture = TestBed.createComponent(KuwaitVisaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
