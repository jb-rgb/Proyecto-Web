import { Component } from '@angular/core';
import { environment } from 'src/app/environments/enviroments';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {
  liga: string = environment.API_URI_IMAGENES;

}
