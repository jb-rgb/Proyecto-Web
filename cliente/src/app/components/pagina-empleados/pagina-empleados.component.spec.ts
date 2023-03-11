import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEmpleadosComponent } from './pagina-empleados.component';

describe('PaginaEmpleadosComponent', () => {
  let component: PaginaEmpleadosComponent;
  let fixture: ComponentFixture<PaginaEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
