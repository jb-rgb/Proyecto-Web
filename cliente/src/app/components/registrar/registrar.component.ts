import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  cliente = new Cliente;
  passwordValidationMessage = '';
  showPasswordValidationMessage = false;
  passwordEqualMessage = '';
  showPasswordEqual = false;
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}
  registrarCliente() {
    delete this.cliente.id_cliente;
    this.clienteService.registrarCliente(this.cliente).subscribe(
      (resCliente: any) => {
        console.log(resCliente);
      },
      (err: any) => console.error(err) 
    );
  }
  onPasswordChange(event: any) {
    const password = event.target.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[@$!%?&#<>~^]/.test(password);

    let message = '';
    if(password.length > 0) {
      if(!hasUpperCase) {
        message = 'La contraseña debe de tener al menos una letra mayúscula. ';
      } else if(!hasLowerCase) {
        message = 'La contraseña debe de tener al menos una letra minúscula. ';
      } else if(!hasNumber) {
        message = 'La contraseña debe de tener al menos un número. ';
      } else if(!hasSpecialChar) {
        message = 'La contraseña debe de tener al menos un carácter especial. ';
      }
      this.showPasswordValidationMessage = true;
    } else {
      this.showPasswordValidationMessage = false;
    }
    this.passwordValidationMessage = message;
  }
}
