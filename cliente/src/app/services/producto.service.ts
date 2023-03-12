import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Producto } from '../models/producto';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/productos`, {headers: headers});
  }
  listOne(id:any) {
    return this.http.get(`${environment.API_URI}/api/productos/${id}`, {headers: headers});
  }
  create(producto:Producto) {
    return this.http.post(`${environment.API_URI}/api/productos/`, producto, {headers: headers});
  }
  delete(id:any) {
    return this.http.delete(`${environment.API_URI}/api/productos/delete/${id}`, {headers: headers});
  }
  update(producto:Producto) {
    return this.http.put(`${environment.API_URI}/api/productos/update/${producto.id_producto}`, producto, {headers: headers});
  }
  mostrarTipo(tipo: any) {
    return this.http.get(`${environment.API_URI}/api/productos/mostrarTipo/${tipo}`, {headers: headers});
  }
  mostrarTipoConsola(tipo: any, consola: any) {
    return this.http.get(`${environment.API_URI}/api/productos/mostrarConsola/${consola}`, {headers: headers});
  }
  mostrarValoracion(valoracion: any) {
    return this.http.get(`${environment.API_URI}/api/productos/mostrarValoracion/${valoracion}`, {headers: headers});
  }
}
