import { Router } from 'express';
import { clienteController } from '../controllers/clienteController';
import { validarToken } from '../middleware/auth';

class ClienteRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, clienteController.list);
        this.router.get('/:id1', validarToken, clienteController.listOne);
        this.router.post('/', validarToken, clienteController.create);
        this.router.post('/verificarCliente', validarToken, clienteController.verificarCliente);
        this.router.post('/registrarCliente', validarToken, clienteController.registrarCliente);
        this.router.post('/cambiarPassword', clienteController.cambiarPassword);
        this.router.put('/update/:idCliente', validarToken, clienteController.update);
        this.router.delete('/delete/:idCliente', validarToken, clienteController.delete);
    }
}

export const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;