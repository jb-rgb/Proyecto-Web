import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import { ComunicationService } from 'src/app/services/comunication.service';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { environment } from 'src/app/environments/enviroments';

declare var $: any;

@Component({
  selector: 'app-pagina-administrador',
  templateUrl: './pagina-administrador.component.html',
  styleUrls: ['./pagina-administrador.component.css']
})
export class PaginaAdministradorComponent implements OnInit{
  edit: boolean = false;
  producto = new Producto();
  productos:any;
  productoActual:any;
  tipoV = 'Videojuego';
  tipoC = 'Consola';
  tipoCo = 'Componente';
  liga: string = environment.API_URI_IMAGENES;
  imgPrincipal: any;
  fileToUpload: any;
  constructor(
    private productoService: ProductoService,
    private comunicationService: ComunicationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private imagenesService: ImagenesService
  ) {
    this.imgPrincipal = null;
    this.comunicationService.observador$.subscribe(
      (msg) => {
        console.log(msg);
        if (msg.componente == 1)
          this.listar();
      }
    )
    this.listar();
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['id']) {
      this.productoService.listOne(params['id']).subscribe(
        (res: any) => {
          console.log(res);
          this.producto = res;
          this.edit = true;
        },
        (err: any) => console.error(err)
      );
    }
    this.productoService.list().subscribe(
      (resProducto:any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err:any) => console.error(err)
    );
    $(document).ready(function () {
      $(".modal").modal();
      $(".dropdown-trigger").dropdown();
      $(".select").formSelect();
    })
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

  visualizarModificarProducto(id_producto: number) {
    console.log(this.producto);
    this.productoService.listOne(id_producto).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.producto = resProducto;
        $("#modalModificarProducto").modal();
        $("#modalModificarProducto").modal("open");
      },
      (err: any) => console.error(err)
    );
  }

  agregarProducto() {
    delete this.producto.id_producto;
    this.productoService.create(this.producto).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        console.log('Producto ingresado con exito');
      },
      (err: any) => console.error(err)
    );
  }

  modificarProducto() {
    this.productoService.update(this.producto).subscribe(
      (res: any) => {
        console.log('Paciente modificado con exito');
        this.productoService.list().subscribe(
          (resProducto:any) => {
            console.log(resProducto);
            this.productos = resProducto;
            console.log(this.productos);
          },
          (err:any) => console.error(err)
        );
      },
      (err: any) => console.error(err)
    );
  }
  cargandoImagen(files: any, carpeta: any) {
    console.log(files.files[0]);

    this.imgPrincipal = null;
    this.fileToUpload = files.files[0];
    let imgPromise = this.getFileBlob(this.fileToUpload);
    imgPromise.then((blob) => {
      console.log(blob);

      this.imagenesService.guardarImagen(this.producto.id_producto, blob, carpeta).subscribe(
        (res: any) => {
          this.imgPrincipal = blob;
        },
        (err) => console.error(err)
      );
    });
  }
  getFileBlob(file: any) {
    var reader = new FileReader();
    return new Promise(function (resolve, reject) {
      reader.onload = (function (thefile) {
        return function (e: any) {
          resolve(e.target.result);
        };
      })(file);
      reader.readAsDataURL(file);
    });
  }
  noFoundImage(event: any) {
    event.target.src = this.liga + '/productos/0.png';
  }
  dameNombre(id: any) {
    console.log('hola');
    return this.liga + '/productos/' + id + '.jpg';
  }
}
