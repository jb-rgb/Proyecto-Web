import { Component } from '@angular/core';
import { environment } from 'src/app/environments/enviroments';

@Component({
  selector: 'app-pagina-componentes-pc',
  templateUrl: './pagina-componentes-pc.component.html',
  styleUrls: ['./pagina-componentes-pc.component.css']
})
export class PaginaComponentesPCComponent {
  liga: string = environment.API_URI_IMAGENES;
}
