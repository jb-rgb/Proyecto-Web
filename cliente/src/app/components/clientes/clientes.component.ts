import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ExcelService } from 'src/app/services/excel.service';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any;
  clienteActual: any;
  fileToUpload: any;
  file: any;
  uploadEvent: any;
  arrayBuffer: any;
  exceljsondata: any;
  pageSize = 5;
  p = 1;
  constructor(
    private clienteService: ClienteService,
    private excelService: ExcelService,
    router: Router
  ) { }
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
  cargarExcelCliente(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadEvent = event;
    }
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.exceljsondata = XLSX.utils.sheet_to_json(worksheet, { raw: true })
      console.log(this.exceljsondata);
    }
  }
  migrarCliente2DB() {
    this.exceljsondata.map((cliente: any) => {
      console.log(cliente);
      this.clienteService.registrarCliente(cliente).subscribe(
        (resCliente: any) => {
          console.log(resCliente);
          this.listar();
        },
        (err: any) => console.error(err)
      );
    })
  }
}
