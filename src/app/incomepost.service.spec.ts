import { TestBed } from '@angular/core/testing';

import { IncomepostService } from './incomepost.service';

describe('IncomepostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomepostService = TestBed.get(IncomepostService);
    expect(service).toBeTruthy();
  });
});
