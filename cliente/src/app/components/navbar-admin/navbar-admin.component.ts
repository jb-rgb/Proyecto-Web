import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Producto } from 'src/app/models/producto';
import { Empleado } from 'src/app/models/empleado';
import { ComunicationService } from 'src/app/services/comunication.service';

declare var $: any

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  edit: boolean = false;
  productos: any;
  producto = new Producto();
  empleados: any;
  empleado = new Empleado();

  constructor(
    private productoService: ProductoService,
    private empleadoService: EmpleadoService,
    private comunicationService: ComunicationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { this.listar(); }

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
    $(document).ready(function () {
      $(".modal").modal();
      $(".dropdown-trigger").dropdown();
      $(".select").formSelect();
    })
  }

  /* enviarMensaje(componente: number) {
    let opciones = { "componente": componente };
    console.log(opciones);
    this.comunicationService.enviar(opciones);
    producto : 1
    empleado : 2
  } */

  enviarMensaje(componente: number) {
    let opciones = { "componente": componente };
    this.comunicationService.enviar(opciones);
  }

  visualizarAgregarProducto() {
    $("#modalAgregarProducto").modal();
    $("#modalAgregarProducto").modal("open");
  }

  visualizarAgregarEmpleado() {
    $("#modalAgregarEmpleado").modal();
    $("#modalAgregarEmpleado").modal("open");
  }

  agregarProducto() {
    delete this.producto.id_producto;
    this.productoService.create(this.producto).subscribe(
      (resProducto: any) => {
        this.enviarMensaje(1);
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

  agregarEmpleado() {
    delete this.empleado.id_empleado;
    this.empleadoService.create(this.empleado).subscribe(
      (resEmpleado: any) => {
        this.enviarMensaje(2);
      },
      (err: any) => console.error(err)
    );
  }

  modificarEmpleado() {
    this.empleadoService.update(this.empleado).subscribe(
      (resEmpleado: any) => {
        this.empleadoService.list().subscribe(
          (resEmpleado: any) => {
            this.empleados = resEmpleado;
          },
          (err: any) => console.error(err)
        );
      },
      (err: any) => console.error(err)
    );
  }
}
