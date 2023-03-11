import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  empleado = new Empleado();
  cliente = new Cliente();
  constructor(
    private clienteService: ClienteService,
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}
  verificarUsuario() {
    console.log(this.empleado.correo);
    console.log(this.empleado.password);
    this.empleadoService.verificarEmpleado(this.empleado.correo, this.empleado.password).subscribe((resEmpleado: any) => {
      console.log(resEmpleado);
      if(resEmpleado == null) {
        console.log('El empleado no existe');
        this.clienteService.verificarCliente(this.empleado.correo, this.empleado.password).subscribe((resCliente: any) => {
          console.log(resCliente);
          if(resCliente == null) {
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
}