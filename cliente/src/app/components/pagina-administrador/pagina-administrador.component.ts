import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
import { ComunicationService } from 'src/app/services/comunication.service';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { ExcelService } from 'src/app/services/excel.service';
import { environment } from 'src/app/environments/enviroments';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-pagina-administrador',
  templateUrl: './pagina-administrador.component.html',
  styleUrls: ['./pagina-administrador.component.css']
})
export class PaginaAdministradorComponent implements OnInit {
  edit: boolean = false;
  producto = new Producto();
  productos: any;
  productoActual: any;
  tipoV = 'Videojuego';
  tipoC = 'Consola';
  tipoCo = 'Componente';
  liga: string = environment.API_URI_IMAGENES;
  imgPrincipal: any;
  fileToUpload: any;
  file: any;
  uploadEvent: any;
  arrayBuffer: any;
  exceljsondata: any;
  pageSize = 4;
  p = 1;
  constructor(
    private productoService: ProductoService,
    private comunicationService: ComunicationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private imagenesService: ImagenesService,
    private excelService: ExcelService
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
    if (params['id']) {
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
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
    $(document).ready(function () {
      $(".modal").modal();
      $(".dropdown-trigger").dropdown();
      $(".select").formSelect();
    })
  }

  listar() {
    this.productoService.list().subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productos = resProducto;
        console.log(this.productos);
      },
      (err: any) => console.error(err)
    );
  }

  eliminarProducto(id: any) {
    console.log('Eliminar producto ' + id);
    this.productoService.delete(id).subscribe(
      (resProducto: any) => {
        console.log(resProducto);
        this.productoService.list().subscribe(
          (resProducto: any) => {
            console.log(resProducto);
            this.productos = resProducto;
            console.log(this.productos);
          },
          (err: any) => console.error(err)
        );
      },
      (err: any) => console.log(err)
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
          (resProducto: any) => {
            console.log(resProducto);
            this.productos = resProducto;
            console.log(this.productos);
          },
          (err: any) => console.error(err)
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
    return this.liga + '/productos/' + id + '.jpg';
  }
  exportAsXLSX() {
    let element = document.getElementById('tabla-1');
    this.excelService.exportAsExcelFile(element, 'productos');
  }
  cargarExcelProducto(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadEvent = event;
    }
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.exceljsondata = XLSX.utils.sheet_to_json(worksheet, { raw: true })
      console.log(this.exceljsondata);
    }
  }
  migrarProducto2DB() {
    this.exceljsondata.map((producto: any) => {
      console.log(producto);
      this.productoService.create(producto).subscribe(
        (resProducto: any) => {
          console.log(resProducto);
          this.listar();
        },
        (err: any) => console.error(err)
      );
    })
  }
}
