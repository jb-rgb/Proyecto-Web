import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAgregarAdminComponent } from './pagina-agregar-admin.component';

describe('PaginaAgregarAdminComponent', () => {
  let component: PaginaAgregarAdminComponent;
  let fixture: ComponentFixture<PaginaAgregarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAgregarAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAgregarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
