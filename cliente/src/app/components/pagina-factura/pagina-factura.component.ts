import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';
import { DetalleVenta } from 'src/app/models/detalleVenta';
import { DetalleVentaService } from 'src/app/services/detalle-venta.service'; 

declare var $: any

@Component({
  selector: 'app-pagina-factura',
  templateUrl: './pagina-factura.component.html',
  styleUrls: ['./pagina-factura.component.css']
})
export class PaginaFacturaComponent implements OnInit {
  nombreCliente: string;
  id_cliente: number;
  total: number;
  cliente = new Cliente();
  venta = new Venta();
  detalleVenta = new DetalleVenta();
  constructor(
    private clienteService: ClienteService,
    private ventaService: VentaService,
    private detalleVentas: DetalleVentaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.nombreCliente = String(localStorage.getItem("nombreCliente"));
    this.id_cliente = Number(localStorage.getItem("idCliente"));
    this.total = Number(localStorage.getItem("total"));
  }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['id']) {
      this.clienteService.listOne(params['id']).subscribe(
        (resCliente: any) => {
          this.cliente = resCliente;
        },
        (err: any) => console.error(err)
      );
    }
    $(document).ready(function () {
      $(".modal").modal();
      $('.dropdown-trigger').dropdown();
      $('.select').formSelect();
    })
  }
  actualizarCliente() {
    this.clienteService.update(this.cliente).subscribe(
      (resCliente: any) => {
        
      },
      (err: any) => console.error(err)
    );
  }
  insertarVenta() {
    this.venta.id_cliente = Number(localStorage.getItem("idCliente"));
    this.ventaService.create(this.venta).subscribe(
      (resVenta: any) => {

      },
      (err: any) => console.error(err)
    );
  }
  viuslizarTarjeta() {
    $('#modalTarjeta').modal();
    $('#modalTarjeta').modal("open");
  }
  visualizarDeposito() {
    $('#modalDeposito').modal();
    $('#modalDeposito').modal("open");
  }
  visualizarTransferencia() {
    $('#modalTransferencia').modal();
    $('#modalTransferencia').modal("open");
  }
}
