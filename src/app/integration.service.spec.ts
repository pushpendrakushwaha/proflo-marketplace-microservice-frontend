import { TestBed } from '@angular/core/testing';

import { Integration } from './integration.service';

describe('IntegrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Integration = TestBed.get(Integration);
    expect(service).toBeTruthy();
  });
});
