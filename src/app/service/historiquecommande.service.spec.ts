import { TestBed } from '@angular/core/testing';

import { HistoriquecommandeService } from './historiquecommande.service';

describe('HistoriquecommandeService', () => {
  let service: HistoriquecommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriquecommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
