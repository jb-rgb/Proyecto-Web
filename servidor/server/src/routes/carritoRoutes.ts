import { Router } from "express";
import { carritoController } from "../controllers/carritoController";
import { validarToken } from "../middleware/auth";

class CarritoRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', validarToken, carritoController.list);
        this.router.get('/:id1', validarToken, carritoController.listOne);
        this.router.get('/carrito/:idCliente', validarToken, carritoController.mostrarCarrito);
        this.router.get('/carrito/total/:idCliente', validarToken, carritoController.totalCarrito);
        this.router.post('/', validarToken, carritoController.create);
        this.router.put('/update/:idCarrito', validarToken, carritoController.update);
        this.router.delete('/delete/:idCarrito', validarToken, carritoController.delete);
    }
}

export const carritoRoutes = new CarritoRoutes();
export default carritoRoutes.router;