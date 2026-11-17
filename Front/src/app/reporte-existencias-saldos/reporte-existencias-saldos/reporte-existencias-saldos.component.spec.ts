import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteExistenciasSaldosComponent } from './reporte-existencias-saldos.component';

describe('ReporteExistenciasSaldosComponent', () => {
  let component: ReporteExistenciasSaldosComponent;
  let fixture: ComponentFixture<ReporteExistenciasSaldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteExistenciasSaldosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteExistenciasSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
