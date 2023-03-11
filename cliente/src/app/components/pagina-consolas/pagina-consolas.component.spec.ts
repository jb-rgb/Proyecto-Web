import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConsolasComponent } from './pagina-consolas.component';

describe('PaginaConsolasComponent', () => {
  let component: PaginaConsolasComponent;
  let fixture: ComponentFixture<PaginaConsolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaConsolasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaConsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
