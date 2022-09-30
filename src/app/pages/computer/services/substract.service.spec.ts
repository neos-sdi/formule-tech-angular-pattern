import { TestBed } from '@angular/core/testing';

import { SubstractService } from './substract.service';

describe('SubstractService', () => {
  let service: SubstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
