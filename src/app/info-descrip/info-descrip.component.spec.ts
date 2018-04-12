import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDescripComponent } from './info-descrip.component';

describe('InfoDescripComponent', () => {
  let component: InfoDescripComponent;
  let fixture: ComponentFixture<InfoDescripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDescripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
