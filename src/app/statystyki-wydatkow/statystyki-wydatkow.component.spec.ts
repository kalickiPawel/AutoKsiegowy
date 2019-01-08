import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatystykiWydatkowComponent } from './statystyki-wydatkow.component';

describe('StatystykiWydatkowComponent', () => {
  let component: StatystykiWydatkowComponent;
  let fixture: ComponentFixture<StatystykiWydatkowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatystykiWydatkowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatystykiWydatkowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
