import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMonedaComponent } from './info-moneda.component';

describe('InfoMonedaComponent', () => {
  let component: InfoMonedaComponent;
  let fixture: ComponentFixture<InfoMonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
