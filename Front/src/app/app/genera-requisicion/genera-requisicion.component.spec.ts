import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraRequisicionComponent } from './genera-requisicion.component';

describe('GeneraRequisicionComponent', () => {
  let component: GeneraRequisicionComponent;
  let fixture: ComponentFixture<GeneraRequisicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraRequisicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneraRequisicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
