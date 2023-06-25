import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadVisaFileComponent } from './upload-visa-file.component';

describe('UploadVisaFileComponent', () => {
  let component: UploadVisaFileComponent;
  let fixture: ComponentFixture<UploadVisaFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadVisaFileComponent]
    });
    fixture = TestBed.createComponent(UploadVisaFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
