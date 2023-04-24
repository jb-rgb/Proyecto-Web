import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { ComunicationService } from 'src/app/services/comunication.service';
import { ExcelService } from 'src/app/services/excel.service';
import * as XLSX from 'xlsx';

declare var $: any;

@Component({
  selector: 'app-pagina-empleados',
  templateUrl: './pagina-empleados.component.html',
  styleUrls: ['./pagina-empleados.component.css']
})
export class PaginaEmpleadosComponent implements OnInit {
  empleados: any;
  empleado = new Empleado();
  rolA = 'Administrador';
  rolV = 'Vendedor';
  fileToUpload: any;
  file: any;
  uploadEvent: any;
  arrayBuffer: any;
  exceljsondata: any;
  pageSize = 5;
  p = 1;
  constructor (
    private empleadoService: EmpleadoService,
    private comunicationService: ComunicationService,
    private excelService: ExcelService,
    private router: Router
  ) { 
    this.comunicationService.observador$.subscribe(
      (msg) => {
        if (msg.componente == 2) 
          this.listar();
      }
    )
    this.listar(); 
  }
  ngOnInit(): void {
    this.empleadoService.list().subscribe(
      (resEmpleado: any) => {
        this.empleados = resEmpleado;
      },
      (err: any) => console.error(err)
    );
    $(document).ready(function () {
      $(".modal").modal();
      $(".dropdown-trigger").dropdown();
      $(".select").formSelect();
    })
  }
  listar() {
    this.empleadoService.list().subscribe(
      (resEmpleado: any) => {
        this.empleados = resEmpleado;
      },
      (err: any) => console.error(err)
    );
  }
  eliminarEmpleado(id: any) {
    this.empleadoService.delete(id).subscribe(
      (resEmpleado: any) => {
        this.empleadoService.list().subscribe(
          (resEmpleado: any) => {
            this.empleados = resEmpleado;
          },
          (err: any) => console.error(err)
        );
      },
      (err: any) => console.error(err)
    );
  }

  mostrarAdministrador() {
    this.empleadoService.mostrarRol(this.rolA).subscribe(
      (resEmpleado: any) => {
        this.empleados = resEmpleado;
      },
      (err: any) => console.error(err)
    );
  }

  mostrarVendedor() {
    this.empleadoService.mostrarRol(this.rolV).subscribe(
      (resEmpledo: any) => {
        this.empleados = resEmpledo;
      },
      (err: any) => console.error(err)
    );
  }

  visualizarModificarEmpleado(id: number) {
    this.empleadoService.listOne(id).subscribe(
      (resEmpleado: any) => {
        this.empleado = resEmpleado;
        $("#modalModificarEmpleado").modal();
        $("#modalModificarEmpleado").modal("open");
      },
      (err: any) => console.error(err)
    );
  }

  agregarEmpleado() {
    delete this.empleado.id_empleado;
    this.empleadoService.create(this.empleado).subscribe(
      (resEmpleado: any) => {
        
      },
      (err: any) => console.error(err)
    );
  }
  
  modificarEmpleado() {
    this.empleadoService.update(this.empleado).subscribe(
      (resEmpleado: any) => {
        this.empleadoService.list().subscribe(
          (resEmpleado: any) => {
            this.empleados = resEmpleado;
          },
          (err: any) => console.error(err)
        );
      },
      (err: any) => console.error(err)
    );
  }

  exportAsXLSX() {
    let element = document.getElementById('tabla-1');
    this.excelService.exportAsExcelFile(element, 'empleados');
  }
  cargarExcelEmpleado(event: any) {
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
      this.exceljsondata = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    }
  }
  migrarEmpleado2DB() {
    this.exceljsondata.map((empleado: any) => {
      this.empleadoService.create(empleado).subscribe(
        (resCliente: any) => {
          this.listar();
        },
        (err: any) => console.error(err)
      );
    })
  }
}
