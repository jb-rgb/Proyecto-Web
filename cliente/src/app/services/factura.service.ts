import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/facturas`);
  }
  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/api/facturas/${id}`);
  }
  create(factura: Factura) {
    return this.http.post(`${environment.API_URI}/api/facturas/`, factura);
  }
  update(factura: Factura) {
    return this.http.put(`${environment.API_URI}/api/facturas/update/${factura.id_factura}`, factura);
  }
  delete(id: any) {
    return this.http.delete(`${environment.API_URI}/api/facturas/delete/${id}`);
  }
  listInfo() {
    return this.http.get(`${environment.API_URI}/api/facturas/factura/info`);
  }
  totalFactura() {
    return this.http.get(`${environment.API_URI}/api/facturas/factura/total/sum`);
  }
}
