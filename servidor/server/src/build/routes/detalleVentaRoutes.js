"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detalleVentaRoutes = void 0;
const express_1 = require("express");
const detalleVentaController_1 = require("../controllers/detalleVentaController");
const auth_1 = require("../middleware/auth");
class DetalleVentaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, detalleVentaController_1.detalleVentaController.list);
        this.router.get('/:id1', auth_1.validarToken, detalleVentaController_1.detalleVentaController.listOne);
        this.router.post('/', detalleVentaController_1.detalleVentaController.create);
        this.router.put('/update/:idDetalleVenta', detalleVentaController_1.detalleVentaController.update);
        this.router.delete('/delete/:idDetalleVenta', detalleVentaController_1.detalleVentaController.delete);
    }
}
exports.detalleVentaRoutes = new DetalleVentaRoutes();
exports.default = exports.detalleVentaRoutes.router;
