import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

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

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {  }
  mostrarTipoConsolaXbox() {
    this.productoService.mostrarTipoConsola(this.tipoV, this.consolaX).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      }
    )
  }
  mostrarTipoConsolaPS() {
    this.productoService.mostrarTipoConsola(this.tipoV, this.consolaP).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      }
    )
  }
  mostrarTipoConsolaNintendo() {
    this.productoService.mostrarTipoConsola(this.tipoV, this.consolaN).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      }
    )
  }
}
