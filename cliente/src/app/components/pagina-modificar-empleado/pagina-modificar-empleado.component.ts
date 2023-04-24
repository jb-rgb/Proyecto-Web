import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-pagina-modificar-empleado',
  templateUrl: './pagina-modificar-empleado.component.html',
  styleUrls: ['./pagina-modificar-empleado.component.css']
})
export class PaginaModificarEmpleadoComponent implements OnInit {
  edit: boolean = false;
  empleados: any;
  empleado = new Empleado();
  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { this.listar(); }
  /**
   * Estamos usando el servicio ActivatedRoute para obtener el parámetro id de la URL, y si existe,
   * estamos usando el EmpleadoService para obtener los datos del empleado desde la API
   */
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['id']) {
      this.empleadoService.listOne(params['id']).subscribe(
        (resEmpleado: any) => {
          this.empleado = resEmpleado;
          this.edit = true;
        },
        (err: any) => console.error(err)
      );
    }
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
  listar() {
    this.empleadoService.list().subscribe(
      (resEmpleado: any) => {
        this.empleados = resEmpleado;
      },
      (err: any) => console.error(err)
    );
  }
}
