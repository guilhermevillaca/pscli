import { TestBed, inject } from '@angular/core/testing';

import { PrcSeletivoService } from './prc-seletivo.service';

describe('PrcSeletivoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrcSeletivoService]
    });
  });

  it('should be created', inject([PrcSeletivoService], (service: PrcSeletivoService) => {
    expect(service).toBeTruthy();
  }));
});
