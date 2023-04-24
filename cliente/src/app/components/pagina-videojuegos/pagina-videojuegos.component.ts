import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import { environment } from 'src/app/environments/enviroments';

@Component({
  selector: 'app-pagina-videojuegos',
  templateUrl: './pagina-videojuegos.component.html',
  styleUrls: ['./pagina-videojuegos.component.css']
})
export class PaginaVideojuegosComponent {
  productos: any
  tipoV = 'Videojuego';
  consolaX = 'Xbox';
  consolaP = 'PS';
  consolaN = 'Nintendo';
  liga: string = environment.API_URI_IMAGENES;

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {  }
  mostrarTipoConsolaXbox() {
    this.productoService.mostrarTipoConsola(this.tipoV, this.consolaX).subscribe(
      (resProducto: any) => {
        this.productos = resProducto;
      }
    )
  }
  mostrarTipoConsolaPS() {
    this.productoService.mostrarTipoConsola(this.tipoV, this.consolaP).subscribe(
      (resProducto: any) => {
        this.productos = resProducto;
      }
    )
  }
  mostrarTipoConsolaNintendo() {
    this.productoService.mostrarTipoConsola(this.tipoV, this.consolaN).subscribe(
      (resProducto: any) => {
        this.productos = resProducto;
      }
    )
  }
}
