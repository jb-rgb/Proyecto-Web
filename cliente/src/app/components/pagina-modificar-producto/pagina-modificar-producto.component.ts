import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-pagina-modificar-producto',
  templateUrl: './pagina-modificar-producto.component.html',
  styleUrls: ['./pagina-modificar-producto.component.css']
})
export class PaginaModificarProductoComponent implements OnInit {
  edit:boolean = false;
  productos:any;
  producto = new Producto();
  constructor(
    private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { this.listar() }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['id']) {
      this.productoService.listOne(params['id']).subscribe(
        (res: any) => {
          this.producto = res;
          this.edit = true;
        },
        (err: any) => console.error(err)
      );
    }
  }
  agregarProducto() {
    delete this.producto.id_producto;
    this.productoService.create(this.producto).subscribe(
      (resProducto: any) => {
        
      },
      (err: any) => console.error(err)
    );
  }
  modificarProducto() {
    this.productoService.update(this.producto).subscribe(
      (res: any) => {
        this.productoService.list().subscribe(
          (resProducto:any) => {
            this.productos = resProducto;
          },
          (err:any) => console.error(err)
        );
      },
      (err: any) => console.error(err)
    );
  }
  listar() {
    this.productoService.list().subscribe(
      (resProducto:any) => {
        this.productos = resProducto;
      },
      (err:any) => console.error(err)
    );
  }
}
