import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsarArticuloComponent } from './usar-articulo.component';

describe('UsarArticuloComponent', () => {
  let component: UsarArticuloComponent;
  let fixture: ComponentFixture<UsarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsarArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
