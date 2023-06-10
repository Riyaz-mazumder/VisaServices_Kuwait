import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVisaPdfComponent } from './edit-visa-pdf.component';

describe('EditVisaPdfComponent', () => {
  let component: EditVisaPdfComponent;
  let fixture: ComponentFixture<EditVisaPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVisaPdfComponent]
    });
    fixture = TestBed.createComponent(EditVisaPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
