import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
declare var $: any;

@Component({
  selector: 'app-pagina-administrador',
  templateUrl: './pagina-administrador.component.html',
  styleUrls: ['./pagina-administrador.component.css']
})
export class PaginaAdministradorComponent implements OnInit{
  productos:any;
  productoActual:any;
  tipoV = 'Videojuego';
  tipoC = 'Consola';
  tipoCo = 'Componente';
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {
    this.listar();
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
  
  listar() {
    this.productoService.list().subscribe(
      (resProducto:any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err:any) => console.error(err)
    );
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
}
