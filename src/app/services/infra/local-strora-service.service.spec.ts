import { TestBed } from '@angular/core/testing';

import { LocalStroraServiceService } from './local-strora-service.service';

describe('LocalStroraServiceService', () => {
  let service: LocalStroraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStroraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
