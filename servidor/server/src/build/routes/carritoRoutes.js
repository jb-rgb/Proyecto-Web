"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritoRoutes = void 0;
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
const auth_1 = require("../middleware/auth");
class CarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, carritoController_1.carritoController.list);
        this.router.get('/:id1', auth_1.validarToken, carritoController_1.carritoController.listOne);
        this.router.get('/carrito/:idCliente', auth_1.validarToken, carritoController_1.carritoController.mostrarCarrito);
        this.router.get('/carrito/total/:idCliente', auth_1.validarToken, carritoController_1.carritoController.totalCarrito);
        this.router.post('/', auth_1.validarToken, carritoController_1.carritoController.create);
        this.router.put('/update/:idCarrito', auth_1.validarToken, carritoController_1.carritoController.update);
        this.router.delete('/delete/:idCarrito', auth_1.validarToken, carritoController_1.carritoController.delete);
    }
}
exports.carritoRoutes = new CarritoRoutes();
exports.default = exports.carritoRoutes.router;
