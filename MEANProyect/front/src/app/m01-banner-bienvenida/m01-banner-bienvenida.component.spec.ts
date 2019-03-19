import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M01BannerBienvenidaComponent } from './m01-banner-bienvenida.component';

describe('M01BannerBienvenidaComponent', () => {
  let component: M01BannerBienvenidaComponent;
  let fixture: ComponentFixture<M01BannerBienvenidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M01BannerBienvenidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M01BannerBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
