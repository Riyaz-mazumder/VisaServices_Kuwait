import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisaPdfComponent } from './view-visa-pdf.component';

describe('ViewVisaPdfComponent', () => {
  let component: ViewVisaPdfComponent;
  let fixture: ComponentFixture<ViewVisaPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVisaPdfComponent]
    });
    fixture = TestBed.createComponent(ViewVisaPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
