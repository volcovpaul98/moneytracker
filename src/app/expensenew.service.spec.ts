import { TestBed } from '@angular/core/testing';

import { ExpensenewService } from './expensenew.service';

describe('ExpensenewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensenewService = TestBed.get(ExpensenewService);
    expect(service).toBeTruthy();
  });
});
