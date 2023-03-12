import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Carrito } from '../models/carrito';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/carritos`, {headers: headers});
  }
  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/api/carritos/${id}`, {headers: headers});
  }
  create(carrito: Carrito) {
    return this.http.post(`${environment.API_URI}/api/carritos/`, carrito, {headers: headers});
  }
  delete(id: any) {
    return this.http.delete(`${environment.API_URI}/api/carritos/delete/${id}`, {headers: headers});
  }
  update(carrito: Carrito) {
    return this.http.put(`${environment.API_URI}/api/carritos/update/${carrito.id_carrito}`, carrito, {headers: headers});
  }
  mostrarCarrito(id: any) {
    return this.http.get(`${environment.API_URI}/api/carritos/carrito/${id}`, {headers: headers});
  }
  totalCarrito(id: any) {
    return this.http.get(`${environment.API_URI}/api/carritos/carrito/total/${id}`, {headers: headers});
  }
}
