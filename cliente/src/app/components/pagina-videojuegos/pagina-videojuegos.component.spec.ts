import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVideojuegosComponent } from './pagina-videojuegos.component';

describe('PaginaVideojuegosComponent', () => {
  let component: PaginaVideojuegosComponent;
  let fixture: ComponentFixture<PaginaVideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaVideojuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
