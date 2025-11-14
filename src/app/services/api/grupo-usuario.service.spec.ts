import { TestBed } from '@angular/core/testing';

import { GrupoUsuarioService } from './grupo-usuario.service';

describe('GrupoUsuarioService', () => {
  let service: GrupoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
