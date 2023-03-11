import { Router } from 'express';
import { depositoController } from '../controllers/depositoController';
import { validarToken } from '../middleware/auth';

class DepositoRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, depositoController.list);
        this.router.get('/:id1', validarToken, depositoController.listOne);
        this.router.post('/', validarToken, depositoController.create);
        this.router.put('/update/:idDeposito', validarToken, depositoController.update);
        this.router.delete('/delete/:idDeposito', validarToken, depositoController.delete);
    }
}

export const depositoRoutes = new DepositoRoutes();
export default depositoRoutes.router;