import { Injectable } from '@angular/core';
import { environment } from '../environments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http: HttpClient) { }

  guardarImagen(id: any, src: any, folder: any) {
    console.log(id, src, folder);
    return this.http.post(`${environment.API_URI_IMAGENES}/uploadImagen`, { "id": id, "src": src, "folder": folder });
  }
}
