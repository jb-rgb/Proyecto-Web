import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/ventas`);
  }
  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/api/ventas/${id}`);
  }
  create(venta: Venta) {
    return this.http.post(`${environment.API_URI}/api/ventas/`, venta);
  }
  update(venta: Venta) {
    return this.http.put(`${environment.API_URI}/api/ventas/update/${venta.id_venta}`, venta);
  }
  delete(id: any) {
    return this.http.delete(`${environment.API_URI}/api/ventas/delete/${id}`);
  }
  listInfo() {
    return this.http.get(`${environment.API_URI}/api/ventas/venta/info`);
  }
  totalVenta() {
    return this.http.get(`${environment.API_URI}/api/ventas/venta/total/sum`);
  }
}
