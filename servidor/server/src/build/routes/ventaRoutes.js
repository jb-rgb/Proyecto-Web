"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventaRoutes = void 0;
const express_1 = require("express");
const ventaController_1 = require("../controllers/ventaController");
const auth_1 = require("../middleware/auth");
class VentaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, ventaController_1.ventaController.list);
        this.router.get('/:id1', auth_1.validarToken, ventaController_1.ventaController.listOne);
        this.router.get('/venta/info', auth_1.validarToken, ventaController_1.ventaController.ventaInfo);
        this.router.get('/venta/total/sum', auth_1.validarToken, ventaController_1.ventaController.totalVenta);
        this.router.post('/', auth_1.validarToken, ventaController_1.ventaController.create);
        this.router.put('/update/:idVenta', auth_1.validarToken, ventaController_1.ventaController.update);
        this.router.delete('/delete/:idVenta', auth_1.validarToken, ventaController_1.ventaController.delete);
    }
}
exports.ventaRoutes = new VentaRoutes();
exports.default = exports.ventaRoutes.router;
