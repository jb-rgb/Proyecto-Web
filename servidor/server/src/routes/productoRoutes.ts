import { Router } from 'express';
import { productoController } from '../controllers/productoController';
import { validarToken } from '../middleware/auth';

class ProductoRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, productoController.list);
        this.router.get('/:id1', validarToken, productoController.listOne);
        this.router.get('/mostrarTipo/:tipo', validarToken, productoController.mostrarTipo);
        this.router.get('/mostrarConsola/:consola', validarToken, productoController.mostrarConsola);
        this.router.get('/mostrarValoracion/:valoracion', validarToken, productoController.mostrarValoracion);
        this.router.post('/', validarToken, productoController.create);
        this.router.put('/update/:idProducto', validarToken, productoController.update);
        this.router.delete('/delete/:idProducto', validarToken, productoController.delete);
    }
}

export const productoRoutes = new ProductoRoutes();
export default productoRoutes.router;