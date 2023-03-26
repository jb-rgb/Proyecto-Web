import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorreoService } from 'src/app/services/correo.service';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { param } from 'jquery';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  passwordValidationMessage = '';
  showPasswordValidationMessage = false;
  passwordEqualMessage = '';
  showPasswordEqual = false;
  passwordNueva: any
  passwordCompara: any
  token: any
  cliente1 = new Cliente();
  cliente2 = new Cliente();
  constructor(private router: Router, private route: ActivatedRoute, private correoService: CorreoService, private clienteService: ClienteService) {
    this.route.paramMap.subscribe(
      params => {
        this.token = params.get('token');
        console.log(this.token);
        this.correoService.decodificarMail(this.token).subscribe(
          (resToken: any) => {
            console.log(resToken);
          }
        ),
        (err: any) => console.error(err)
      }, err => console.log(err)
    );
  }
  enviarContrasenia() {
    console.log(this.cliente1.password);
    console.log(this.cliente2.password);
  
    if (this.cliente1.password == this.cliente2.password) {
      console.log(this.cliente1.password.length);
  
      const regex = /^(?=.[A-Z])(?=.\d)(?=.[@$!%?&#<>~^])[A-Za-z\d@$!%*?&#<>~^]{8,}$/;
  
      if (regex.test(this.cliente1.password)) {
        this.clienteService.cambiarPassword(this.cliente1).subscribe((res:any) => {
          console.log(res);
        })
        this.router.navigate(['login'])
      }
      else {
        // Swal.fire({
        //   position: "center",
        //   icon: "error",
        //   title: "La contraseña no cumple con las condiciones establecidas",
        //   showConfirmButton: true
        // })
      }
    }
    else {
      // Swal.fire({
      //   position: "center",
      //   icon: "error",
      //   title: "Las contraseñas no coinciden",
      //   showConfirmButton: true
      // })
    }
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
  passwordEqual(event: any) {
    const password = event.target.value;
    let message = '';
    if(password.length > 0) {
      if(this.cliente1.password != this.cliente2.password) {
        message = 'Las contraseñas no son iguales. ';
      }
      this.showPasswordEqual = true;
    } else {
      this.showPasswordEqual = false;
    }
    this.passwordEqualMessage = message;
  }
}
