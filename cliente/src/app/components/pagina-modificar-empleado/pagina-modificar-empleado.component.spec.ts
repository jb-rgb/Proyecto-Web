import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaModificarEmpleadoComponent } from './pagina-modificar-empleado.component';

describe('PaginaModificarEmpleadoComponent', () => {
  let component: PaginaModificarEmpleadoComponent;
  let fixture: ComponentFixture<PaginaModificarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaModificarEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaModificarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
