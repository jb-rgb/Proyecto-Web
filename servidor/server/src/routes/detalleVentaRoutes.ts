import { Router } from 'express';
import { detalleVentaController } from '../controllers/detalleVentaController';
import { validarToken } from '../middleware/auth';

class DetalleVentaRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, detalleVentaController.list);
        this.router.get('/:id1', validarToken, detalleVentaController.listOne);
        this.router.post('/', detalleVentaController.create);
        this.router.put('/update/:idDetalleVenta', detalleVentaController.update);
        this.router.delete('/delete/:idDetalleVenta', detalleVentaController.delete);
    }
}

export const detalleVentaRoutes = new DetalleVentaRoutes();
export default detalleVentaRoutes.router;