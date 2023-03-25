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
  enviarContrasenia(){
    console.log(this.cliente1.password);
    console.log(this.cliente2.password);
    if (this.cliente1.password == this.cliente2.password){
    //  this.router.navigate(['login'])
      console.log(this.cliente1.password.length);
      var countMayus=0;
      var countDigitos=0;
      var countEspecial = 0;
      for(var i=0; i<this.cliente1.password.length; i++){
        if(this.cliente1.password[i]>='A'&& this.cliente1.password[i]<='Z')
          {countMayus++;
            console.log(this.cliente1.password[i])
          }
          else if(this.cliente1.password[i]>='0'&& this.cliente1.password[i]<='9')
          {countDigitos++;
          }
        else if((this.cliente1.password[i]>='a'&& this.cliente1.password[i]<='z') || this.cliente1.password[i]<=' '){
          
        }
        else{
          countEspecial++;
        }
          
      }
      
      console.log("Mayusculas: "+countMayus);
      console.log("Digitos:" ,countDigitos);
      console.log("Especial: "+countEspecial);



      if(countDigitos > 0 && countEspecial > 0 && countMayus > 0){
        this.clienteService.cambiarPassword(this.cliente1).subscribe((res:any) =>{
           console.log(res);
        })
        this.router.navigate(['login'])

      }
      else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "La contraseña no cumple con las condiciones establecidas",
          showConfirmButton: true
        })
      }

    }else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Las contraseñas no coinciden",
        showConfirmButton: true
      })
    }
  }
}
