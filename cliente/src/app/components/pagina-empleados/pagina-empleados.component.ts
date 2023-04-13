import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { ComunicationService } from 'src/app/services/comunication.service';
import { ExcelService } from 'src/app/services/excel.service';

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
  constructor (
    private empleadoService: EmpleadoService,
    private comunicationService: ComunicationService,
    private excelService: ExcelService,
    private router: Router
  ) { 
    this.comunicationService.observador$.subscribe(
      (msg) => {
        console.log(msg);
        if (msg.componente == 2) 
          this.listar();
      }
    )
    this.listar(); 
  }
  ngOnInit(): void {
    this.empleadoService.list().subscribe(
      (resEmpleado: any) => {
        console.log(resEmpleado);
        this.empleados = resEmpleado;
        console.log(this.empleados);
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
        console.log(resEmpleado);
        this.empleados = resEmpleado;
        console.log(this.empleados);
      },
      (err: any) => console.error(err)
    );
  }
  eliminarEmpleado(id: any) {
    console.log('Eliminar empleado ' + id);
    this.empleadoService.delete(id).subscribe(
      (resEmpleado: any) => {
        console.log(resEmpleado);
        this.empleadoService.list().subscribe(
          (resEmpleado: any) => {
            console.log(resEmpleado);
            this.empleados = resEmpleado;
            console.log(this.empleados);
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
        console.log(resEmpleado);
        this.empleados = resEmpleado;
        console.log(this.empleados);
      },
      (err: any) => console.error(err)
    );
  }

  mostrarVendedor() {
    this.empleadoService.mostrarRol(this.rolV).subscribe(
      (resEmpledo: any) => {
        console.log(resEmpledo);
        this.empleados = resEmpledo;
        console.log(this.empleados);
      },
      (err: any) => console.error(err)
    );
  }

  visualizarModificarEmpleado(id: number) {
    console.log(this.empleado);
    this.empleadoService.listOne(id).subscribe(
      (resEmpleado: any) => {
        console.log(resEmpleado);
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
        console.log(resEmpleado);
        console.log('Empleado ingresado con exito');
      },
      (err: any) => console.error(err)
    );
  }
  
  modificarEmpleado() {
    this.empleadoService.update(this.empleado).subscribe(
      (resEmpleado: any) => {
        console.log('Empleado modificado con exito');
        this.empleadoService.list().subscribe(
          (resEmpleado: any) => {
            console.log(resEmpleado);
            this.empleados = resEmpleado;
            console.log(this.empleados);
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
}
