import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVentasComponent } from './pagina-ventas.component';

describe('PaginaVentasComponent', () => {
  let component: PaginaVentasComponent;
  let fixture: ComponentFixture<PaginaVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
