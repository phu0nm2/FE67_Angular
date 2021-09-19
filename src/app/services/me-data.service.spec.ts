import { TestBed } from '@angular/core/testing';

import { MeDataService } from './me-data.service';

describe('MeDataService', () => {
  let service: MeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
