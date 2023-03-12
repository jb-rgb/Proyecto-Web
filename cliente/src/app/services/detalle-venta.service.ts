import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { DetalleVenta } from '../models/detalleVenta';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {
  constructor(private http: HttpClient) {  }
  list() {
    return this.http.get(`${environment.API_URI}/api/detalleVentas`, {headers: headers});
  }
  listOne(id1: any, id2: any) {
    return this.http.get(`${environment.API_URI}/api/detalleVentas/${id1}/${id2}`, {headers: headers});
  }
  create(detalleVenta: DetalleVenta) {
    return this.http.post(`${environment.API_URI}/api/detalleVentas/`, detalleVenta, {headers: headers});
  }
  update(detalleVenta: DetalleVenta) {
    return this.http.put(`${environment.API_URI}/api/detalleVentas/update/${detalleVenta.id_producto}/${detalleVenta.id_venta}`, detalleVenta, {headers: headers});
  }
  delete(id1: any, id2: any) {
    return this.http.delete(`${environment.API_URI}/api/detalleVentas/delete/${id1}/${id2}`, {headers: headers});
  }
}
