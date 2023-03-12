import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  private observador = new BehaviorSubject<any>('');
  observador$ = this.observador.asObservable();

  enviar(mensaje: any) {
    this.observador.next(mensaje);
  }

  constructor() { }
}
