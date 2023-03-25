import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/enviroments';
import { Cliente } from '../models/cliente';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get(`${environment.API_URI}/api/clientes`, {headers: headers});
  }
  listOne(id: any) {
    return this.http.get(`${environment.API_URI}/api/clientes/${id}`, {headers: headers});
  }
  create(cliente: Cliente) {
    return this.http.post(`${environment.API_URI}/api/clientes/`, cliente, {headers: headers});
  }
  delete(id: any) {
    return this.http.delete(`${environment.API_URI}/api/clientes/delete/${id}`, {headers: headers});
  }
  update(cliente: Cliente) {
    return this.http.put(`${environment.API_URI}/api/clientes/update/${cliente.id_cliente}`, cliente, {headers: headers});
  }
  verificarCliente(correo: any, password: any) {
    let cliente = {
      'correo': correo,
      'password': password
    };
    console.log(cliente);
    return this.http.post(`${environment.API_URI}/api/clientes/verificarCliente`, cliente, {headers: headers});
  }
  registrarCliente(cliente: Cliente) {
    return this.http.post(`${environment.API_URI}/api/clientes/registrarCliente`, cliente, {headers: headers});
  }
  cambiarPassword(cliente: any) {
    return this.http.post(`${environment.API_URI}/api/clientes/cambiarPassword`, cliente);
  }
}
