import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosRegistradosComponent } from './articulos-registrados.component';

describe('ArticulosRegistradosComponent', () => {
  let component: ArticulosRegistradosComponent;
  let fixture: ComponentFixture<ArticulosRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosRegistradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
