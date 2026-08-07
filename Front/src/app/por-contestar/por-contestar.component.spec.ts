import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorContestarComponent } from './por-contestar.component';

describe('PorContestarComponent', () => {
  let component: PorContestarComponent;
  let fixture: ComponentFixture<PorContestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorContestarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorContestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
