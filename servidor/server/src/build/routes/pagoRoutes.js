"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagoRoutes = void 0;
const express_1 = require("express");
const pagoController_1 = require("../controllers/pagoController");
const auth_1 = require("../middleware/auth");
class PagoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, pagoController_1.pagoController.list);
        this.router.get('/:id1', auth_1.validarToken, pagoController_1.pagoController.listOne);
        this.router.post('/', auth_1.validarToken, pagoController_1.pagoController.create);
        this.router.put('/update/:idPago', auth_1.validarToken, pagoController_1.pagoController.update);
        this.router.delete('/delete/:idPago', auth_1.validarToken, pagoController_1.pagoController.delete);
    }
}
exports.pagoRoutes = new PagoRoutes();
exports.default = exports.pagoRoutes.router;
