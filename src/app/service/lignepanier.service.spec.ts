import { TestBed } from '@angular/core/testing';

import { LignepanierService } from './lignepanier.service';

describe('LignepanierService', () => {
  let service: LignepanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignepanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
