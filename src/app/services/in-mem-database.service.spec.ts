import { TestBed, inject } from '@angular/core/testing';

import { InMemDatabaseService } from './in-mem-database.service';

describe('InMemDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemDatabaseService]
    });
  });

  it('should be created', inject([InMemDatabaseService], (service: InMemDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
