import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/carritos`);
  }
  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/api/carritos/${id}`);
  }
  create(carrito: Carrito) {
    return this.http.post(`${environment.API_URI}/api/carritos/`, carrito);
  }
  delete(id: any) {
    return this.http.delete(`${environment.API_URI}/api/carritos/delete/${id}`);
  }
  update(carrito: Carrito) {
    return this.http.put(`${environment.API_URI}/api/carritos/update/${carrito.id_carrito}`, carrito);
  }
  mostrarCarrito(id: any) {
    return this.http.get(`${environment.API_URI}/api/carritos/carrito/${id}`);
  }
  totalCarrito(id: any) {
    return this.http.get(`${environment.API_URI}/api/carritos/carrito/total/${id}`);
  }
}
