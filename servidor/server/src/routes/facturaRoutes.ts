import { Router } from 'express';
import { facturaController } from '../controllers/facturaController';
import { validarToken } from '../middleware/auth';

class FacturaRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, facturaController.list);
        this.router.get('/:id1', validarToken, facturaController.listOne);
        this.router.get('/factura/info', validarToken, facturaController.info);
        this.router.get('/factura/total/sum', validarToken, facturaController.totalFactura);
        this.router.post('/', validarToken, facturaController.create);
        this.router.put('/update/:idFactura', validarToken, facturaController.update);
        this.router.delete('/delete/:idFactura', validarToken, facturaController.delete);
    }
}

export const facturaRoutes = new FacturaRoutes();
export default facturaRoutes.router;