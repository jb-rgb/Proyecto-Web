"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRoutes = void 0;
const express_1 = require("express");
const clienteController_1 = require("../controllers/clienteController");
const auth_1 = require("../middleware/auth");
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, clienteController_1.clienteController.list);
        this.router.get('/:id1', auth_1.validarToken, clienteController_1.clienteController.listOne);
        this.router.post('/', auth_1.validarToken, clienteController_1.clienteController.create);
        this.router.post('/verificarCliente', auth_1.validarToken, clienteController_1.clienteController.verificarCliente);
        this.router.post('/registrarCliente', auth_1.validarToken, clienteController_1.clienteController.registrarCliente);
        this.router.post('/cambiarPassword', clienteController_1.clienteController.cambiarPassword);
        this.router.put('/update/:idCliente', auth_1.validarToken, clienteController_1.clienteController.update);
        this.router.delete('/delete/:idCliente', auth_1.validarToken, clienteController_1.clienteController.delete);
    }
}
exports.clienteRoutes = new ClienteRoutes();
exports.default = exports.clienteRoutes.router;
