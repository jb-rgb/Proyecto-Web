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
exports.carritoController = void 0;
const database_1 = __importDefault(require("../database"));
class CarritoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = 'SELECT * FROM carrito';
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
            const consulta = 'SELECT * FROM carrito WHERE id_carrito = ' + id1;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'No encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO carrito set ?", [req.body]);
            res.json(resp);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCarrito } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE carrito set ? WHERE id_carrito = ?", [req.body, idCarrito]);
            res.json(resp);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCarrito } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM carrito WHERE id_carrito = ${idCarrito}`);
            res.json(resp);
        });
    }
    mostrarCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { idCliente } = req.params;
            const consulta = `SELECT c.id_carrito, c.cantidad, p.nombre, p.imagen, p.caracteristicas, p.precio FROM carrito c INNER JOIN cliente cl INNER JOIN producto p ON c.id_producto = p.id_producto WHERE cl.id_cliente = '${idCliente}'`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    totalCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { idCliente } = req.params;
            const consulta = `SELECT SUM(c.total) AS total_carrito FROM carrito c WHERE c.id_cliente = ${idCliente}`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
}
exports.carritoController = new CarritoController();
