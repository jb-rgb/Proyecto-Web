import { Router } from 'express';
import { transferenciaController } from '../controllers/transferenController';
import { validarToken } from '../middleware/auth';

class TransferenciaRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, transferenciaController.list);
        this.router.get('/:id1', validarToken, transferenciaController.listOne);
        this.router.post('/', validarToken, transferenciaController.create);
        this.router.put('/update/:idTransferencia', validarToken, transferenciaController.update);
        this.router.delete('/delete/:idTransferencia', validarToken, transferenciaController.delete);
    }
}

export const transferenciaRoutes = new TransferenciaRoutes();
export default transferenciaRoutes.router;