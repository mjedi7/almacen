import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicionesPendientesComponent } from './requisiciones-pendientes.component';

describe('RequisicionesPendientesComponent', () => {
  let component: RequisicionesPendientesComponent;
  let fixture: ComponentFixture<RequisicionesPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisicionesPendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisicionesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
