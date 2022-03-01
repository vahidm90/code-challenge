import { TestBed } from '@angular/core/testing';

import { PoetryDbService } from './poetry-db.service';

describe('PoetryDbService', () => {
  let service: PoetryDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoetryDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
