import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';
import { ExcelService } from 'src/app/services/excel.service';

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
    private excelService: ExcelService,
    private router: Router
  ) { this.listInfo(); }
  ngOnInit(): void {
    this.listInfo();
    this.totalVenta();
  }
  listInfo() {
    this.ventaService.listInfo().subscribe(
      (resVenta: any) => {
        this.ventas = resVenta;
      },
      (err: any) => console.error(err)
    );
  }
  totalVenta() {
    this.ventaService.totalVenta().subscribe(
      (resVenta: any) => {
        this.totalVentas = resVenta;
      },
      (err: any) => console.error(err)
    );
  }
  exportAsXLSX() {
    let element = document.getElementById('tabla-1');
    this.excelService.exportAsExcelFile(element, 'ventas');
  }
}
