import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNoticiasComponent } from './info-noticias.component';

describe('InfoNoticiasComponent', () => {
  let component: InfoNoticiasComponent;
  let fixture: ComponentFixture<InfoNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
