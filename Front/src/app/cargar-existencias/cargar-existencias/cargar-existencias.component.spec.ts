import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarExistenciasComponent } from './cargar-existencias.component';

describe('CargarExistenciasComponent', () => {
  let component: CargarExistenciasComponent;
  let fixture: ComponentFixture<CargarExistenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarExistenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarExistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
