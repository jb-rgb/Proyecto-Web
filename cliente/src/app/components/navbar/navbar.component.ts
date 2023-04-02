import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { environment } from 'src/app/environments/enviroments';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nombre: string;
  id_cliente: number;
  cliente = new Cliente();
  liga: string = environment.API_URI_IMAGENES;
  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) {
    this.nombre = String(localStorage.getItem("nombreCliente"));
    this.id_cliente = Number(localStorage.getItem("idCliente"));
    console.log(this.nombre, this.id_cliente);
  }
  ngOnInit(): void {
    $(document).ready(function () {
      $(".modal").modal();
      $(".dropdown-trigger").dropdown();
      $(".select").formSelect();
    })
  }
  salir() {
    localStorage.removeItem("nombreCliente");
    localStorage.removeItem("idCliente");
    this.router.navigate(['pagina-principal']);
    console.log("Se cerro la sesion");
    console.log(this.nombre, this.id_cliente);
  }
  mostrarInfoCliente() {
    console.log("Agregar Producto");
    $("#modalAgregarEmpleado").modal();
    $("#modalAgregarEmpleado").modal("open");
  }
  obtenerInfoCliente() {
    this.clienteService.listOne(this.id_cliente).subscribe(
      (resCliente: any) => {
        console.log(resCliente);
        this.cliente = resCliente;
        console.log(this.cliente);
      },
      (err: any) => console.error(err)
    );
  }
  noFoundImage(event: any) {
    event.target.src = this.liga+"/clientes/0.png"
  }
}
