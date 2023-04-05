import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carrito } from 'src/app/models/carrito';
import { environment } from 'src/app/environments/enviroments';

@Component({
  selector: 'app-pagina-producto',
  templateUrl: './pagina-producto.component.html',
  styleUrls: ['./pagina-producto.component.css']
})
export class PaginaProductoComponent implements OnInit {
  id_cliente: number;
  productos:any;
  productoActual:any;
  tipoV = 'Videojuego';
  tipoC = 'Consola';
  tipoCo = 'Componente';
  consolaX = 'Xbox';
  consolaP = 'PS';
  consolaN = 'Nintendo';
  valoracion = [.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  carrito: any;
  carritoActual = new Carrito();
  liga: string = environment.API_URI_IMAGENES;
  imgPrincipal: any;
  fileToUpload: any;
  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private router: Router
  ) { 
    this.imgPrincipal = null;
    this.id_cliente = Number(localStorage.getItem("idCliente")); 
  }
  ngOnInit(): void {
    this.productoService.list().subscribe(
      (resProducto:any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err:any) => console.error(err)
    );
  }
  agregarProducto() {
    console.log(this.productoActual);
    this.productoService.create(this.productoActual).subscribe((resProductos:any) => {
      console.log(resProductos);
    },
    (err:any) => {
      console.error(err);
    });
  }
  eliminarProducto(id:any) {
    console.log('Eliminar producto ' + id);
    this.productoService.delete(id).subscribe(
      (resProducto:any) => {
        console.log(resProducto);
        this.productoService.list().subscribe(
          (resProducto:any) => {
            console.log(resProducto);
            this.productos = resProducto;
            console.log(this.productos);
          },
          (err:any) => console.error(err)
        );
      },
      (err:any) => console.log(err)
    );
  }
  agregarCarrito(idProducto: any, idPrecioProducto: any) {
    this.carritoActual.id_cliente = Number(localStorage.getItem("idCliente"));
    this.carritoActual.id_producto = idProducto;
    this.carritoActual.total = idPrecioProducto;
    this.carritoService.create(this.carritoActual).subscribe(
      (resCarrito: any) => {
        console.log(resCarrito);
      },
      (err: any) => console.error(err)
    );
  }
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
  mostrarVideojuego() {
    this.productoService.mostrarTipo(this.tipoV).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err) 
    );
  }
  mostrarConsola() {
    this.productoService.mostrarTipo(this.tipoC).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err) 
    );
  }
  mostrarComponente() {
    this.productoService.mostrarTipo(this.tipoCo).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err) 
    );
  }
  mostrarValoracion1() {
    this.productoService.mostrarValoracion(this.valoracion[0]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  mostrarValoracion2() {
    this.productoService.mostrarValoracion(this.valoracion[1]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  mostrarValoracion3() {
    this.productoService.mostrarValoracion(this.valoracion[2]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  mostrarValoracion4() {
    this.productoService.mostrarValoracion(this.valoracion[3]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  mostrarValoracion5() {
    this.productoService.mostrarValoracion(this.valoracion[4]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  mostrarValoracion6() {
    this.productoService.mostrarValoracion(this.valoracion[5]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  mostrarValoracion7() {
    this.productoService.mostrarValoracion(this.valoracion[6]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  mostrarValoracion8() {
    this.productoService.mostrarValoracion(this.valoracion[7]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  mostrarValoracion9() {
    this.productoService.mostrarValoracion(this.valoracion[8]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  mostrarValoracion10() {
    this.productoService.mostrarValoracion(this.valoracion[9]).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }
  dameNombre(id: any) {
    console.log('hola');
    return this.liga + '/productos/' + id + '.jpg';
  }
}
