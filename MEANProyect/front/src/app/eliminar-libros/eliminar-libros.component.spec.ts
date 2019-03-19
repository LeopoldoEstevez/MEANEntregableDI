import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLibrosComponent } from './eliminar-libros.component';

describe('EliminarLibrosComponent', () => {
  let component: EliminarLibrosComponent;
  let fixture: ComponentFixture<EliminarLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
