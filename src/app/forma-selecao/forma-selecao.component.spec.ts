import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaSelecaoComponent } from './forma-selecao.component';

describe('FormaSelecaoComponent', () => {
  let component: FormaSelecaoComponent;
  let fixture: ComponentFixture<FormaSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
