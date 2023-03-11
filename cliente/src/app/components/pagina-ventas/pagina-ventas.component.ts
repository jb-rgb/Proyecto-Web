import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-pagina-ventas',
  templateUrl: './pagina-ventas.component.html',
  styleUrls: ['./pagina-ventas.component.css']
})
export class PaginaVentasComponent implements OnInit {
  ventas: any
  totalVentas: any;
  constructor(
    private ventaService: VentaService,
    private router: Router
  ) { this.listInfo(); }
  ngOnInit(): void {
    this.listInfo();
    this.totalVenta();
  }
  listInfo() {
    this.ventaService.listInfo().subscribe(
      (resVenta: any) => {
        console.log(resVenta);
        this.ventas = resVenta;
        console.log(this.ventas);
      },
      (err: any) => console.error(err)
    );
  }
  totalVenta() {
    this.ventaService.totalVenta().subscribe(
      (resVenta: any) => {
        console.log(resVenta);
        this.totalVentas = resVenta;
      },
      (err: any) => console.error(err)
    );
  }
}