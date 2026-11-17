import { TestBed } from '@angular/core/testing';

import { ReporteExistenciasSaldosService } from './reporte-existencias-saldos.service';

describe('ReporteExistenciasSaldosService', () => {
  let service: ReporteExistenciasSaldosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteExistenciasSaldosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
