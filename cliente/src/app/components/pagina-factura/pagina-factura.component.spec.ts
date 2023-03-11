import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFacturaComponent } from './pagina-factura.component';

describe('PaginaFacturaComponent', () => {
  let component: PaginaFacturaComponent;
  let fixture: ComponentFixture<PaginaFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
