import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujKategorieComponent } from './edytuj-kategorie.component';

describe('EdytujKategorieComponent', () => {
  let component: EdytujKategorieComponent;
  let fixture: ComponentFixture<EdytujKategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdytujKategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdytujKategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
