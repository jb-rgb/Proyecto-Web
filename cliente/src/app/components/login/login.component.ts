import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { CorreoService } from 'src/app/services/correo.service';
import Swal from 'sweetalert2';

declare var $: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  empleado = new Empleado();
  cliente = new Cliente();
  constructor(
    private clienteService: ClienteService,
    private empleadoService: EmpleadoService,
    private correoService: CorreoService,
    private router: Router
  ) { }

    ngOnInit(): void {
      $(document).ready(function () {
        $(".modal").modal();
        $(".dropdown-trigger").dropdown();
        $(".select").formSelect();
      })
    }

  verificarUsuario() {
    this.empleadoService.verificarEmpleado(this.empleado.correo, this.empleado.password).subscribe((resEmpleado: any) => {
      if (resEmpleado == null) {
        this.clienteService.verificarCliente(this.empleado.correo, this.empleado.password).subscribe((resCliente: any) => {
          if (resCliente == null) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Correo o contraseña incorrectos',
              showConfirmButton: true
            })
          } else {
            localStorage.setItem("nombreCliente", resCliente.nombre);
            localStorage.setItem("idCliente", resCliente.id_cliente);
            this.router.navigate(['pagina-principal']);
          }
        },
          (err: any) => console.error(err));
      } else {
        this.router.navigate(['pagina-administrador']);
      }
    },
      (err: any) => console.error(err));
  }
  modalCambiarContrasenya() {
    $('#modalCambiarContrasenya').modal({ dismissible: false });
    $('#modalCambiarContrasenya').modal('open');
  }
  cambiarContrasenya() {
    this.correoService.enviarCorreoRecuperarContrasenya(this.cliente).subscribe((resUsuario: any) => {
      
    }, (err: any) => console.error(err));
  }
}