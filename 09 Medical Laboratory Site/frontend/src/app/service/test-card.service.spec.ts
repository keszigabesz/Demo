import { TestBed } from '@angular/core/testing';

import { TestCardService } from './test-card.service';

describe('TestCardService', () => {
  let service: TestCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
