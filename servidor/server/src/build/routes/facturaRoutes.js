"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facturaRoutes = void 0;
const express_1 = require("express");
const facturaController_1 = require("../controllers/facturaController");
const auth_1 = require("../middleware/auth");
class FacturaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, facturaController_1.facturaController.list);
        this.router.get('/:id1', auth_1.validarToken, facturaController_1.facturaController.listOne);
        this.router.get('/factura/info', auth_1.validarToken, facturaController_1.facturaController.info);
        this.router.get('/factura/total/sum', auth_1.validarToken, facturaController_1.facturaController.totalFactura);
        this.router.post('/', auth_1.validarToken, facturaController_1.facturaController.create);
        this.router.put('/update/:idFactura', auth_1.validarToken, facturaController_1.facturaController.update);
        this.router.delete('/delete/:idFactura', auth_1.validarToken, facturaController_1.facturaController.delete);
    }
}
exports.facturaRoutes = new FacturaRoutes();
exports.default = exports.facturaRoutes.router;
