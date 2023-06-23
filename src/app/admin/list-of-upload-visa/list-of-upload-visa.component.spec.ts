import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUploadVisaComponent } from './list-of-upload-visa.component';

describe('ListOfUploadVisaComponent', () => {
  let component: ListOfUploadVisaComponent;
  let fixture: ComponentFixture<ListOfUploadVisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfUploadVisaComponent]
    });
    fixture = TestBed.createComponent(ListOfUploadVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
