import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFacturasComponent } from './pagina-facturas.component';

describe('PaginaFacturasComponent', () => {
  let component: PaginaFacturasComponent;
  let fixture: ComponentFixture<PaginaFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFacturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
