import { Router } from 'express';
import { detalleFacturaController } from '../controllers/detalleFacturaController';
import { validarToken } from '../middleware/auth';

class DetalleFacturaRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, detalleFacturaController.list);
        this.router.get('/:id1/:id2', validarToken, detalleFacturaController.listOne);
        this.router.post('/', validarToken, detalleFacturaController.create);
        this.router.put('/update/:idProducto/:idVenta', validarToken, detalleFacturaController.update);
        this.router.delete('/delete/:idProducto/:idVenta', validarToken, detalleFacturaController.delete);
    } 
}

export const detalleFacturaRoutes = new DetalleFacturaRoutes();
export default detalleFacturaRoutes.router;