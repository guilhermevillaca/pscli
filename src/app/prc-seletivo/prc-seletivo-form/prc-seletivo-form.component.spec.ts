import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcSeletivoFormComponent } from './prc-seletivo-form.component';

describe('PrcSeletivoFormComponent', () => {
  let component: PrcSeletivoFormComponent;
  let fixture: ComponentFixture<PrcSeletivoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrcSeletivoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrcSeletivoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
