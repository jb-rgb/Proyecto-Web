import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carrito } from 'src/app/models/carrito';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.component.html',
  styleUrls: ['./pagina-carrito.component.css']
})
export class PaginaCarritoComponent implements OnInit{
  id_cliente: number;
  totalCarritos: any;
  carritos: any;
  carritoActual = new Carrito();
  constructor(
    private carritoService: CarritoService,
    private router: Router
  ) {
    this.id_cliente = Number(localStorage.getItem("idCliente"));
    console.log(this.carritoActual);
    this.mostrarCarrito();
    this.totalCarrito();
  }
  ngOnInit(): void {
    this.mostrarCarrito();
    this.totalCarrito();
  }
  mostrarCarrito() {
    this.carritoService.mostrarCarrito(this.id_cliente).subscribe(
      (resCarrito: any) => {
        console.log(resCarrito);
        this.carritos = resCarrito;
        console.log(this.carritos);
      },
      (err: any) => console.error(err)
    );
  }

  eliminarCarrito(id: any) {
    console.log('Eliminar carrio ' + id);
    this.carritoService.delete(id).subscribe(
      (resCarrito: any) => {
        console.log(resCarrito);
        this.carritoService.mostrarCarrito(this.id_cliente).subscribe(
          (resCarrito: any) => {
            console.log(resCarrito);
            this.carritos = resCarrito;
            console.log(this.carritos);
          },
          (err: any) => console.error(err)
        );
      },
      (err: any) => console.error(err)
    );
  }

  totalCarrito() {
    this.carritoService.totalCarrito(this.id_cliente).subscribe(
      (resCarrito: any) => {
        console.log(resCarrito);
        this.totalCarritos = resCarrito;
        localStorage.setItem("total", resCarrito[0].total_carrito);
        this.carritoService.mostrarCarrito(this.id_cliente).subscribe(
          (resCarrito: any) => {
            console.log(resCarrito);
            this.carritos = resCarrito;
            console.log(this.carritos);
          },
          (err: any) => console.error(err)
        );
      },
      (err: any) => console.error(err)
    );
  }
}
