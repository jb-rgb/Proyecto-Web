import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaVideojuegosComponent } from './components/pagina-videojuegos/pagina-videojuegos.component';
import { PaginaConsolasComponent } from './components/pagina-consolas/pagina-consolas.component';
import { PaginaComponentesPCComponent } from './components/pagina-componentes-pc/pagina-componentes-pc.component';
import { PaginaProductoComponent } from './components/pagina-producto/pagina-producto.component';
import { PaginaCarritoComponent } from './components/pagina-carrito/pagina-carrito.component';
import { PaginaFacturaComponent } from './components/pagina-factura/pagina-factura.component';
import { PaginaAdministradorComponent } from './components/pagina-administrador/pagina-administrador.component';
import { PaginaAgregarProductoComponent } from './components/pagina-agregar-producto/pagina-agregar-producto.component';
import { PaginaModificarProductoComponent } from './components/pagina-modificar-producto/pagina-modificar-producto.component';
import { PaginaAgregarAdminComponent } from './components/pagina-agregar-admin/pagina-agregar-admin.component';
import { PaginaEmpleadosComponent } from './components/pagina-empleados/pagina-empleados.component';
import { PaginaModificarEmpleadoComponent } from './components/pagina-modificar-empleado/pagina-modificar-empleado.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ModificarClienteComponent } from './components/modificar-cliente/modificar-cliente.component';
import { PaginaFacturasComponent } from './components/pagina-facturas/pagina-facturas.component';
import { PaginaVentasComponent } from './components/pagina-ventas/pagina-ventas.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    PaginaPrincipalComponent,
    PaginaVideojuegosComponent,
    PaginaConsolasComponent,
    PaginaComponentesPCComponent,
    PaginaProductoComponent,
    PaginaCarritoComponent,
    PaginaFacturaComponent,
    PaginaAdministradorComponent,
    PaginaAgregarProductoComponent,
    PaginaModificarProductoComponent,
    PaginaAgregarAdminComponent,
    PaginaEmpleadosComponent,
    PaginaModificarEmpleadoComponent,
    ClientesComponent,
    ModificarClienteComponent,
    PaginaFacturasComponent,
    PaginaVentasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
