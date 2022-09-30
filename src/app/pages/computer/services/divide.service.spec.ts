import { TestBed } from '@angular/core/testing';

import { DivideService } from './divide.service';

describe('DivideService', () => {
  let service: DivideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
