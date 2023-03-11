import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComponentesPCComponent } from './pagina-componentes-pc.component';

describe('PaginaComponentesPCComponent', () => {
  let component: PaginaComponentesPCComponent;
  let fixture: ComponentFixture<PaginaComponentesPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaComponentesPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaComponentesPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
