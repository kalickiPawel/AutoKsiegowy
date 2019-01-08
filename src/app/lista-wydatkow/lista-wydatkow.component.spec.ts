import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaWydatkowComponent } from './lista-wydatkow.component';

describe('ListaWydatkowComponent', () => {
  let component: ListaWydatkowComponent;
  let fixture: ComponentFixture<ListaWydatkowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaWydatkowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaWydatkowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
