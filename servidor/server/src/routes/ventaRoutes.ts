import { Router } from 'express';
import { ventaController } from '../controllers/ventaController';
import { validarToken } from '../middleware/auth';

class VentaRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, ventaController.list);
        this.router.get('/:id1', validarToken, ventaController.listOne);
        this.router.get('/venta/info', validarToken, ventaController.ventaInfo);
        this.router.get('/venta/total/sum', validarToken, ventaController.totalVenta);
        this.router.post('/', validarToken, ventaController.create);
        this.router.put('/update/:idVenta', validarToken, ventaController.update);
        this.router.delete('/delete/:idVenta', validarToken, ventaController.delete);
    }
}

export const ventaRoutes = new VentaRoutes();
export default ventaRoutes.router;