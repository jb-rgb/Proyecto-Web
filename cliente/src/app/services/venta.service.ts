import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Venta } from '../models/venta';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/ventas`, {headers: headers});
  }
  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/api/ventas/${id}`, {headers: headers});
  }
  create(venta: Venta) {
    return this.http.post(`${environment.API_URI}/api/ventas/`, venta, {headers: headers});
  }
  update(venta: Venta) {
    return this.http.put(`${environment.API_URI}/api/ventas/update/${venta.id_venta}`, venta, {headers: headers});
  }
  delete(id: any) {
    return this.http.delete(`${environment.API_URI}/api/ventas/delete/${id}`, {headers: headers});
  }
  listInfo() {
    return this.http.get(`${environment.API_URI}/api/ventas/venta/info`, {headers: headers});
  }
  totalVenta() {
    return this.http.get(`${environment.API_URI}/api/ventas/venta/total/sum`, {headers: headers});
  }
}
