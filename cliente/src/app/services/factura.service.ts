import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Factura } from '../models/factura';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/facturas`, {headers: headers});
  }
  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/api/facturas/${id}`, {headers: headers});
  }
  create(factura: Factura) {
    return this.http.post(`${environment.API_URI}/api/facturas/`, factura, {headers: headers});
  }
  update(factura: Factura) {
    return this.http.put(`${environment.API_URI}/api/facturas/update/${factura.id_factura}`, factura, {headers: headers});
  }
  delete(id: any) {
    return this.http.delete(`${environment.API_URI}/api/facturas/delete/${id}`, {headers: headers});
  }
  listInfo() {
    return this.http.get(`${environment.API_URI}/api/facturas/factura/info`, {headers: headers});
  }
  totalFactura() {
    return this.http.get(`${environment.API_URI}/api/facturas/factura/total/sum`, {headers: headers});
  }
}
