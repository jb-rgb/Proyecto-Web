"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facturaController = void 0;
const database_1 = __importDefault(require("../database"));
class FacturaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = 'SELECT * FROM factura';
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { id1 } = req.params;
            const consulta = 'SELECT * FROM factura WHERE id_factura = ' + id1;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Factura no encontrada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO factura set ?", [req.body]);
            res.json(resp);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idFactura } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE factura set ? WHERE id_factura = ?", [req.body, idFactura]);
            res.json(resp);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idFactura } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM factura WHERE id_factura = ${idFactura}`);
            res.json(resp);
        });
    }
    info(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = `SELECT v.id_venta, c.id_pago, f.id_factura, dv.id_producto, v.fecha, c.nombre, dv.cantidad, dv.precio FROM venta v INNER JOIN detalle_venta dv ON v.id_venta = dv.id_venta INNER JOIN factura f ON v.id_venta = f.id_venta INNER JOIN cliente c ON v.id_cliente = c.id_cliente`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    totalFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = `SELECT SUM(subquery.precio) as precio_total FROM ( SELECT dv.precio FROM venta v INNER JOIN detalle_venta dv ON v.id_venta = dv.id_venta INNER JOIN factura f ON v.id_venta = f.id_venta INNER JOIN cliente c ON v.id_cliente = c.id_cliente ) as subquery`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
}
exports.facturaController = new FacturaController();
