import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any;
  clienteActual: any;
  constructor(
    private clienteService: ClienteService,
    private excelService: ExcelService,
    router: Router
  ) {  }
  ngOnInit(): void {
    this.clienteService.list().subscribe(
      (resCliente: any) => {
        console.log(resCliente);
        this.clientes = resCliente;
        console.log(this.clientes);
      },
      (err: any) => console.error(err)
    );
  }
  listar() {
    this.clienteService.list().subscribe(
      (resCliente: any) => {
        console.log(resCliente);
        this.clientes = resCliente;
        console.log(this.clientes);
      },
      (err: any) => console.error(err)
    );
  }
  eliminarCliente(id: any) {
    console.log('Eliminar cliente ' + id);
    this.clienteService.delete(id).subscribe(
      (resCliente: any) => {
        console.log(resCliente);
        this.clienteService.list().subscribe(
          (resCliente: any) => {
            console.log(resCliente);
            this.clientes = resCliente;
            console.log(this.clientes);
          },
          (err: any) => console.error(err)
        );
      },
      (err: any) => console.error(err)
    );
  }
  exportAsXLSX() {
    let element = document.getElementById('tabla-1');
    this.excelService.exportAsExcelFile(element, 'clientes');
  }
}
