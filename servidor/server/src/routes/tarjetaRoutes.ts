import { Router } from 'express';
import { tarjetaController } from '../controllers/tarjetaController';
import { validarToken } from '../middleware/auth';

class TarjetaRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, tarjetaController.list);
        this.router.get('/:id1', validarToken, tarjetaController.listOne);
        this.router.post('/', validarToken, tarjetaController.create);
        this.router.put('/update/:idTarjeta', validarToken, tarjetaController.update);
        this.router.delete('/delete/:idTarjeta', validarToken, tarjetaController.delete);
    }
}

export const tarjetaRoutes = new TarjetaRoutes();
export default tarjetaRoutes.router;