import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajWydatekComponent } from './dodaj-wydatek.component';

describe('DodajWydatekComponent', () => {
  let component: DodajWydatekComponent;
  let fixture: ComponentFixture<DodajWydatekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajWydatekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajWydatekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
