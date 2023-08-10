import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStatusManualComponent } from './change-status-manual.component';

describe('ChangeStatusManualComponent', () => {
  let component: ChangeStatusManualComponent;
  let fixture: ComponentFixture<ChangeStatusManualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeStatusManualComponent]
    });
    fixture = TestBed.createComponent(ChangeStatusManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
