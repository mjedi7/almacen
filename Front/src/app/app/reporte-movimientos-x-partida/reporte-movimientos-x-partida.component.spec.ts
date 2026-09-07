import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteMovimientosXPartidaComponent } from './reporte-movimientos-x-partida.component';

describe('ReporteMovimientosXPartidaComponent', () => {
  let component: ReporteMovimientosXPartidaComponent;
  let fixture: ComponentFixture<ReporteMovimientosXPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteMovimientosXPartidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteMovimientosXPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
