import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaModificarProductoComponent } from './pagina-modificar-producto.component';

describe('PaginaModificarProductoComponent', () => {
  let component: PaginaModificarProductoComponent;
  let fixture: ComponentFixture<PaginaModificarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaModificarProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaModificarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
