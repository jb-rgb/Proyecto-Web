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
}
