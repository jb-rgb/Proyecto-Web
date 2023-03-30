import { Component } from '@angular/core';
import { environment } from 'src/app/environments/enviroments';

@Component({
  selector: 'app-pagina-consolas',
  templateUrl: './pagina-consolas.component.html',
  styleUrls: ['./pagina-consolas.component.css']
})
export class PaginaConsolasComponent {
  liga: string = environment.API_URI_IMAGENES;
}
