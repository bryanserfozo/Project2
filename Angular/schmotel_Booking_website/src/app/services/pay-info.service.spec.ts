import { TestBed } from '@angular/core/testing';

import { PayInfoService } from './pay-info.service';

describe('PayInfoService', () => {
  let service: PayInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
