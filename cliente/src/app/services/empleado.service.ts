import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Empleado } from '../models/empleado';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/empleados`, {headers: headers});
  }
  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/api/empleados/${id}`, {headers: headers});
  }
  create(empleado: Empleado) {
    return this.http.post(`${environment.API_URI}/api/empleados/`, empleado, {headers: headers});
  }
  delete(id: any) {
    return this.http.delete(`${environment.API_URI}/api/empleados/delete/${id}`, {headers: headers});
  }
  update(empleado: Empleado) {
    return this.http.put(`${environment.API_URI}/api/empleados/update/${empleado.id_empleado}`, empleado, {headers: headers});
  }
  verificarEmpleado(correo: any, password: any) {
    let empleado = {
      'correo': correo,
      'password': password
    };
    return this.http.post(`${environment.API_URI}/api/empleados/verificarEmpleado`, empleado, {headers: headers});
  }
  mostrarRol(rol: any) {
    return this.http.get(`${environment.API_URI}/api/empleados/mostrarRol/${rol}`, {headers: headers});
  }
}
