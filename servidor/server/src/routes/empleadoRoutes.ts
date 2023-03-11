import { Router } from 'express';
import { empleadoController } from '../controllers/empleadoController';
import { validarToken } from '../middleware/auth';

class EmpleadoRoutes {
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/', validarToken, empleadoController.list);
        this.router.get('/:id1', validarToken, empleadoController.listOne);
        this.router.get('/mostrarRol/:rol', validarToken, empleadoController.mostrarRol);
        this.router.post('/', validarToken, empleadoController.create);
        this.router.post('/verificarEmpleado', validarToken, empleadoController.vereficarEmpleado);
        this.router.put('/update/:idEmpleado', validarToken, empleadoController.update);
        this.router.delete('/delete/:idEmpleado', validarToken, empleadoController.delete);
    }
}

export const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;