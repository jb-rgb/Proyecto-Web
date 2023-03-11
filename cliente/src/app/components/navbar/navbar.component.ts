import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  nombre: string;
  id_cliente: number;
  constructor(
    private router: Router
  ) {
    this.nombre = String(localStorage.getItem("nombreCliente"));
    this.id_cliente = Number(localStorage.getItem("idCliente"));
    console.log(this.nombre, this.id_cliente);
  }
  salir() {
    localStorage.removeItem("nombreCliente");
    localStorage.removeItem("idCliente");
    this.router.navigate(['pagina-principal']);
    console.log("Se cerro la sesion");
    console.log(this.nombre, this.id_cliente);
  }
}
