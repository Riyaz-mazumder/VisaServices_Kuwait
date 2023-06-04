import { TestBed } from '@angular/core/testing';

import { PdfDataSenderService } from './pdf-data-sender.service';

describe('PdfDataSenderService', () => {
  let service: PdfDataSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfDataSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
