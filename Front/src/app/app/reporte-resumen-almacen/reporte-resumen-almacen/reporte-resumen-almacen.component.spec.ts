import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteResumenAlmacenComponent } from './reporte-resumen-almacen.component';

describe('ReporteResumenAlmacenComponent', () => {
  let component: ReporteResumenAlmacenComponent;
  let fixture: ComponentFixture<ReporteResumenAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteResumenAlmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteResumenAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
