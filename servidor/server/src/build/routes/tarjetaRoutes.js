"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tarjetaRoutes = void 0;
const express_1 = require("express");
const tarjetaController_1 = require("../controllers/tarjetaController");
const auth_1 = require("../middleware/auth");
class TarjetaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, tarjetaController_1.tarjetaController.list);
        this.router.get('/:id1', auth_1.validarToken, tarjetaController_1.tarjetaController.listOne);
        this.router.post('/', auth_1.validarToken, tarjetaController_1.tarjetaController.create);
        this.router.put('/update/:idTarjeta', auth_1.validarToken, tarjetaController_1.tarjetaController.update);
        this.router.delete('/delete/:idTarjeta', auth_1.validarToken, tarjetaController_1.tarjetaController.delete);
    }
}
exports.tarjetaRoutes = new TarjetaRoutes();
exports.default = exports.tarjetaRoutes.router;
