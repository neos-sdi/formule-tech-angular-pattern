import { TestBed } from '@angular/core/testing';

import { DevelopementLoggerService } from './developement-logger.service';

describe('DevelopementLoggerService', () => {
  let service: DevelopementLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopementLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
