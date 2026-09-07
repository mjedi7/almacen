import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteExistenciaXPartidaComponent } from './reporte-existencia-x-partida.component';

describe('ReporteExistenciaXPartidaComponent', () => {
  let component: ReporteExistenciaXPartidaComponent;
  let fixture: ComponentFixture<ReporteExistenciaXPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteExistenciaXPartidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteExistenciaXPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
