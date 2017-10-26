import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcSeletivoComponent } from './prc-seletivo.component';

describe('PrcSeletivoComponent', () => {
  let component: PrcSeletivoComponent;
  let fixture: ComponentFixture<PrcSeletivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrcSeletivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrcSeletivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
