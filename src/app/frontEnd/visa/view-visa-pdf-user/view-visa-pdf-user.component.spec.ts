import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisaPdfUserComponent } from './view-visa-pdf-user.component';

describe('ViewVisaPdfUserComponent', () => {
  let component: ViewVisaPdfUserComponent;
  let fixture: ComponentFixture<ViewVisaPdfUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVisaPdfUserComponent]
    });
    fixture = TestBed.createComponent(ViewVisaPdfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
