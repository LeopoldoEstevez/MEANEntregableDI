import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarLibrosComponent } from './insertar-libros.component';

describe('InsertarLibrosComponent', () => {
  let component: InsertarLibrosComponent;
  let fixture: ComponentFixture<InsertarLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
