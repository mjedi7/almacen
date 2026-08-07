import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticoGeneralComponent } from './estadistico-general.component';

describe('EstadisticoGeneralComponent', () => {
  let component: EstadisticoGeneralComponent;
  let fixture: ComponentFixture<EstadisticoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
