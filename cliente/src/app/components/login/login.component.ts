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
      console.log(resEmpleado);
      if (resEmpleado == null) {
        console.log('El empleado no existe');
        this.clienteService.verificarCliente(this.empleado.correo, this.empleado.password).subscribe((resCliente: any) => {
          console.log(resCliente);
          if (resCliente == null) {
            console.log('El cliente no existe');
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Correo o contraseña incorrectos',
              showConfirmButton: true
            })
          } else {
            console.log('El cliente existe');
            localStorage.setItem("nombreCliente", resCliente.nombre);
            localStorage.setItem("idCliente", resCliente.id_cliente);
            this.router.navigate(['pagina-principal']);
          }
        },
          (err: any) => console.error(err));
      } else {
        console.log('El empleado existe');
        this.router.navigate(['pagina-administrador']);
      }
    },
      (err: any) => console.error(err));
  }
  modalCambiarContrasenya() {
    console.log("modalCambiarContrasenya");
    $('#modalCambiarContrasenya').modal({ dismissible: false });
    $('#modalCambiarContrasenya').modal('open');
  }
  cambiarContrasenya() {
    console.log(this.cliente);
    this.correoService.enviarCorreoRecuperarContrasenya(this.cliente).subscribe((resUsuario: any) => {
      console.log(resUsuario);
    }, (err: any) => console.error(err));
  }
}