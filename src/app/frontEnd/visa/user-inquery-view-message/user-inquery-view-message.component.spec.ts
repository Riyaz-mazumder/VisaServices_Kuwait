import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInqueryViewMessageComponent } from './user-inquery-view-message.component';

describe('UserInqueryViewMessageComponent', () => {
  let component: UserInqueryViewMessageComponent;
  let fixture: ComponentFixture<UserInqueryViewMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInqueryViewMessageComponent]
    });
    fixture = TestBed.createComponent(UserInqueryViewMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
