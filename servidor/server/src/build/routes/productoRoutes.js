"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoRoutes = void 0;
const express_1 = require("express");
const productoController_1 = require("../controllers/productoController");
const auth_1 = require("../middleware/auth");
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, productoController_1.productoController.list);
        this.router.get('/:id1', auth_1.validarToken, productoController_1.productoController.listOne);
        this.router.get('/mostrarTipo/:tipo', auth_1.validarToken, productoController_1.productoController.mostrarTipo);
        this.router.get('/mostrarConsola/:consola', auth_1.validarToken, productoController_1.productoController.mostrarConsola);
        this.router.get('/mostrarValoracion/:valoracion', auth_1.validarToken, productoController_1.productoController.mostrarValoracion);
        this.router.post('/', auth_1.validarToken, productoController_1.productoController.create);
        this.router.put('/update/:idProducto', auth_1.validarToken, productoController_1.productoController.update);
        this.router.delete('/delete/:idProducto', auth_1.validarToken, productoController_1.productoController.delete);
    }
}
exports.productoRoutes = new ProductoRoutes();
exports.default = exports.productoRoutes.router;
