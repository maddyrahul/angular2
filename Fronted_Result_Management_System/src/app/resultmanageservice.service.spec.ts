import { TestBed } from '@angular/core/testing';

import { ResultmanageserviceService } from './resultmanageservice.service';

describe('ResultmanageserviceService', () => {
  let service: ResultmanageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultmanageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
