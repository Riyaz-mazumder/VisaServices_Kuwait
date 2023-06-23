import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadVisaComponent } from './upload-visa.component';

describe('UploadVisaComponent', () => {
  let component: UploadVisaComponent;
  let fixture: ComponentFixture<UploadVisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadVisaComponent]
    });
    fixture = TestBed.createComponent(UploadVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
