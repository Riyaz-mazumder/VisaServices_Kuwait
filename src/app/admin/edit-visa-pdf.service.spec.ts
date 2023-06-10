import { TestBed } from '@angular/core/testing';

import { EditVisaPdfService } from './edit-visa-pdf.service';

describe('EditVisaPdfService', () => {
  let service: EditVisaPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditVisaPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
