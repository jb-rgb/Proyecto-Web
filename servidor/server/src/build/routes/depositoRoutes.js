"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.depositoRoutes = void 0;
const express_1 = require("express");
const depositoController_1 = require("../controllers/depositoController");
const auth_1 = require("../middleware/auth");
class DepositoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', auth_1.validarToken, depositoController_1.depositoController.list);
        this.router.get('/:id1', auth_1.validarToken, depositoController_1.depositoController.listOne);
        this.router.post('/', auth_1.validarToken, depositoController_1.depositoController.create);
        this.router.put('/update/:idDeposito', auth_1.validarToken, depositoController_1.depositoController.update);
        this.router.delete('/delete/:idDeposito', auth_1.validarToken, depositoController_1.depositoController.delete);
    }
}
exports.depositoRoutes = new DepositoRoutes();
exports.default = exports.depositoRoutes.router;
