import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/services/factura.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-pagina-facturas',
  templateUrl: './pagina-facturas.component.html',
  styleUrls: ['./pagina-facturas.component.css']
})
export class PaginaFacturasComponent implements OnInit {
  facturas: any;
  totalFacturas: any;
  constructor(
    private facturaService: FacturaService,
    private excelService: ExcelService,
    private router: Router
  ) { this.listInfo(); }
  ngOnInit(): void {
      this.listInfo();
      this.totalFactura();
  }
  listInfo() {
    this.facturaService.listInfo().subscribe(
      (resFactura: any) => {
        console.log(resFactura);
        this.facturas = resFactura;
        console.log(this.facturas);
      },
      (err: any) => console.error(err)
    );
  }
  totalFactura() {
    this.facturaService.totalFactura().subscribe(
      (resFactura: any) => {
        console.log(resFactura);
        this.totalFacturas = resFactura;
      },
      (err: any) => console.error(err)
    );
  }
  exportAsXLSX() {
    let element = document.getElementById('tabla-1');
    this.excelService.exportAsExcelFile(element, 'facturas');
  }
}
