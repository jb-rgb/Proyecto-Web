"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empleadoRoutes = void 0;
const express_1 = require("express");
const empleadoController_1 = require("../controllers/empleadoController");
const auth_1 = require("../middleware/auth");
class EmpleadoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, empleadoController_1.empleadoController.list);
        this.router.get('/:id1', auth_1.validarToken, empleadoController_1.empleadoController.listOne);
        this.router.get('/mostrarRol/:rol', auth_1.validarToken, empleadoController_1.empleadoController.mostrarRol);
        this.router.post('/', auth_1.validarToken, empleadoController_1.empleadoController.create);
        this.router.post('/verificarEmpleado', auth_1.validarToken, empleadoController_1.empleadoController.vereficarEmpleado);
        this.router.put('/update/:idEmpleado', auth_1.validarToken, empleadoController_1.empleadoController.update);
        this.router.delete('/delete/:idEmpleado', auth_1.validarToken, empleadoController_1.empleadoController.delete);
    }
}
exports.empleadoRoutes = new EmpleadoRoutes();
exports.default = exports.empleadoRoutes.router;
