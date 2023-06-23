import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInqueryViewComponent } from './user-inquery-view.component';

describe('UserInqueryViewComponent', () => {
  let component: UserInqueryViewComponent;
  let fixture: ComponentFixture<UserInqueryViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInqueryViewComponent]
    });
    fixture = TestBed.createComponent(UserInqueryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
