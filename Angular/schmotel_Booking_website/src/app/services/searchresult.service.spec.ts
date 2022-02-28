import { TestBed } from '@angular/core/testing';

import { SearchresultService } from './searchresult.service';

describe('SearchresultService', () => {
  let service: SearchresultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
