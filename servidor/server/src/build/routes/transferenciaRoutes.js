"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferenciaRoutes = void 0;
const express_1 = require("express");
const transferenController_1 = require("../controllers/transferenController");
const auth_1 = require("../middleware/auth");
class TransferenciaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, transferenController_1.transferenciaController.list);
        this.router.get('/:id1', auth_1.validarToken, transferenController_1.transferenciaController.listOne);
        this.router.post('/', auth_1.validarToken, transferenController_1.transferenciaController.create);
        this.router.put('/update/:idTransferencia', auth_1.validarToken, transferenController_1.transferenciaController.update);
        this.router.delete('/delete/:idTransferencia', auth_1.validarToken, transferenController_1.transferenciaController.delete);
    }
}
exports.transferenciaRoutes = new TransferenciaRoutes();
exports.default = exports.transferenciaRoutes.router;
