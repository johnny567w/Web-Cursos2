import { TestBed } from '@angular/core/testing';

import { ManejoCursosService } from './manejo-cursos.service';

describe('ManejoCursosService', () => {
  let service: ManejoCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
