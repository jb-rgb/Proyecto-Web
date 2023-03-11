import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-empleados',
  templateUrl: './pagina-empleados.component.html',
  styleUrls: ['./pagina-empleados.component.css']
})
export class PaginaEmpleadosComponent implements OnInit {
  empleados: any;
  rolA = 'Administrador';
  rolV = 'Vendedor';
  constructor (
    private empleadoService: EmpleadoService,
    private router: Router
  ) { this.listar(); }
  ngOnInit(): void {
    this.empleadoService.list().subscribe(
      (resEmpleado: any) => {
        console.log(resEmpleado);
        this.empleados = resEmpleado;
        console.log(this.empleados);
      },
      (err: any) => console.error(err)
    );
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
}
