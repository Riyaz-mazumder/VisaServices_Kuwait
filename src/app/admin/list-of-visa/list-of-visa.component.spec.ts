import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfVisaComponent } from './list-of-visa.component';

describe('ListOfVisaComponent', () => {
  let component: ListOfVisaComponent;
  let fixture: ComponentFixture<ListOfVisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfVisaComponent]
    });
    fixture = TestBed.createComponent(ListOfVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
