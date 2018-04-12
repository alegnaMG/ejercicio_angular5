import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAComponent } from './contenedor-a.component';

describe('ContenedorAComponent', () => {
  let component: ContenedorAComponent;
  let fixture: ComponentFixture<ContenedorAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
