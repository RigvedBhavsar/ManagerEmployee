import { TestBed } from '@angular/core/testing';

import { ConnetService } from './connet.service';

describe('ConnetService', () => {
  let service: ConnetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
