import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorBComponent } from './contenedor-b.component';

describe('ContenedorBComponent', () => {
  let component: ContenedorBComponent;
  let fixture: ComponentFixture<ContenedorBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
