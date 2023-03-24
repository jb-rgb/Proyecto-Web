import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { RecuperarComponent } from './components/recuperar/recuperar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pagina-principal',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrar',
    component: RegistrarComponent,
  },
  {
    path: 'pagina-principal',
    component: PaginaPrincipalComponent,
  },
  {
    path: 'pagina-videojuegos',
    component: PaginaVideojuegosComponent,
  },
  {
    path: 'pagina-consolas',
    component: PaginaConsolasComponent,
  },
  {
    path: 'pagina-componentes-pc',
    component: PaginaComponentesPCComponent,
  },
  {
    path: 'pagina-producto',
    component: PaginaProductoComponent,
  },
  {
    path: 'pagina-carrito',
    component: PaginaCarritoComponent,
  },
  {
    path: 'pagina-factura/:id',
    component: PaginaFacturaComponent,
  },
  {
    path: 'pagina-administrador',
    component: PaginaAdministradorComponent,
  },
  {
    path: 'pagina-agregar-producto',
    component: PaginaModificarProductoComponent,
  },
  {
    path: 'pagina-modificar-producto/:id',
    component: PaginaModificarProductoComponent,
  },
  {
    path: 'pagina-agregar-admin',
    component: PaginaModificarEmpleadoComponent,
  },
  {
    path: 'pagina-empleados',
    component: PaginaEmpleadosComponent,
  },
  {
    path: 'pagina-modificar-empleado/:id',
    component: PaginaModificarEmpleadoComponent,
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'modificar-clientes/:id',
    component: ModificarClienteComponent
  },
  {
    path: 'pagina-facturas',
    component: PaginaFacturasComponent
  },
  {
    path: 'pagina-ventas',
    component: PaginaVentasComponent
  },
  {
    path: 'recuperar/:token',
    component: RecuperarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
