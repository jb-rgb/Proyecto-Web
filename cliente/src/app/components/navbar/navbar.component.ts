import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { environment } from 'src/app/environments/enviroments';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  nombre: string;
  id_cliente: number;
  cliente = new Cliente();
  liga: string = environment.API_URI_IMAGENES;
  imgPrincipal: any;
  fileToUpload: any;
  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private imagenesService: ImagenesService
  ) {
    this.nombre = String(localStorage.getItem('nombreCliente'));
    this.id_cliente = Number(localStorage.getItem('idCliente'));
  }
  ngOnInit(): void {
    $(document).ready(function () {
      $('.modal').modal();
      $('.dropdown-trigger').dropdown();
      $('.select').formSelect();
    });
  }
  salir() {
    localStorage.removeItem('nombreCliente');
    localStorage.removeItem('idCliente');
    this.router.navigate(['pagina-principal']);
  }
  mostrarInfoCliente() {
    $('#modalAgregarEmpleado').modal();
    $('#modalAgregarEmpleado').modal('open');
  }
  obtenerInfoCliente() {
    this.clienteService.listOne(this.id_cliente).subscribe(
      (resCliente: any) => {
        this.cliente = resCliente;
      },
      (err: any) => console.error(err)
    );
  }
  cargandoImagen(files: any, carpeta: any) {
    this.imgPrincipal = null;
    this.fileToUpload = files.files[0];
    let imgPromise = this.getFileBlob(this.fileToUpload);
    imgPromise.then((blob) => {
      this.imagenesService.guardarImagen(this.id_cliente, blob, 'perfil').subscribe(
        (res: any) => {
          this.imgPrincipal = blob;
        },
        (err) => console.error(err)
      );
    });
  }
  getFileBlob(file: any) {
    var reader = new FileReader();
    return new Promise(function (resolve, reject) {
      reader.onload = (function (thefile) {
        return function (e: any) {
          resolve(e.target.result);
        };
      })(file);
      reader.readAsDataURL(file);
    });
  }
  noFoundImage(event: any) {
    event.target.src = this.liga + '/perfil/0.png';
  }
  dameNombre(id: any) {
    return this.liga + '/perfil/' + id + '.jpg';
  }
}
