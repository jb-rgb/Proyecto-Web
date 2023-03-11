"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detalleFacturaRoutes = void 0;
const express_1 = require("express");
const detalleFacturaController_1 = require("../controllers/detalleFacturaController");
const auth_1 = require("../middleware/auth");
class DetalleFacturaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, detalleFacturaController_1.detalleFacturaController.list);
        this.router.get('/:id1/:id2', auth_1.validarToken, detalleFacturaController_1.detalleFacturaController.listOne);
        this.router.post('/', auth_1.validarToken, detalleFacturaController_1.detalleFacturaController.create);
        this.router.put('/update/:idProducto/:idVenta', auth_1.validarToken, detalleFacturaController_1.detalleFacturaController.update);
        this.router.delete('/delete/:idProducto/:idVenta', auth_1.validarToken, detalleFacturaController_1.detalleFacturaController.delete);
    }
}
exports.detalleFacturaRoutes = new DetalleFacturaRoutes();
exports.default = exports.detalleFacturaRoutes.router;
