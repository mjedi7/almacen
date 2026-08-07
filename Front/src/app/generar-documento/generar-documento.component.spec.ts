import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarDocumentoComponent } from './generar-documento.component';

describe('GenerarDocumentoComponent', () => {
  let component: GenerarDocumentoComponent;
  let fixture: ComponentFixture<GenerarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
