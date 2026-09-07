import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSeguimientosComponent } from './mis-seguimientos.component';

describe('MisSeguimientosComponent', () => {
  let component: MisSeguimientosComponent;
  let fixture: ComponentFixture<MisSeguimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisSeguimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisSeguimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
