import { Router } from 'express';
import { pagoController } from '../controllers/pagoController';
import { validarToken } from '../middleware/auth';

class PagoRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, pagoController.list);
        this.router.get('/:id1', validarToken, pagoController.listOne);
        this.router.post('/', validarToken, pagoController.create);
        this.router.put('/update/:idPago', validarToken, pagoController.update);
        this.router.delete('/delete/:idPago', validarToken, pagoController.delete);
    }
}

export const pagoRoutes = new PagoRoutes();
export default pagoRoutes.router;