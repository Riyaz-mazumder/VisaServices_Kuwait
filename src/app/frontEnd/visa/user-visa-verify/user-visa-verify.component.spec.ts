import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVisaVerifyComponent } from './user-visa-verify.component';

describe('UserVisaVerifyComponent', () => {
  let component: UserVisaVerifyComponent;
  let fixture: ComponentFixture<UserVisaVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserVisaVerifyComponent]
    });
    fixture = TestBed.createComponent(UserVisaVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
