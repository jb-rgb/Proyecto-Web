import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/productos`);
  }
  listOne(id:any) {
    return this.http.get(`${environment.API_URI}/api/productos/${id}`);
  }
  create(producto:Producto) {
    return this.http.post(`${environment.API_URI}/api/productos/`, producto);
  }
  delete(id:any) {
    return this.http.delete(`${environment.API_URI}/api/productos/delete/${id}`);
  }
  update(producto:Producto) {
    return this.http.put(`${environment.API_URI}/api/productos/update/${producto.id_producto}`, producto);
  }
  mostrarTipo(tipo: any) {
    return this.http.get(`${environment.API_URI}/api/productos/mostrarTipo/${tipo}`);
  }
  mostrarTipoConsola(tipo: any, consola: any) {
    return this.http.get(`${environment.API_URI}/api/productos/mostrarConsola/${consola}`);
  }
  mostrarValoracion(valoracion: any) {
    return this.http.get(`${environment.API_URI}/api/productos/mostrarValoracion/${valoracion}`);
  }
}
