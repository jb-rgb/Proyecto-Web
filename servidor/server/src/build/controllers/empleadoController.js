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
exports.empleadoController = void 0;
const database_1 = __importDefault(require("../database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class EmpleadoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const consulta = 'SELECT * FROM empleado';
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
            const consulta = 'SELECT * FROM empleado WHERE id_empleado = ' + id1;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Empleado no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
            const resp = yield database_1.default.query("INSERT INTO empleado set ?", [req.body]);
            res.json(resp);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idEmpleado } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE empleado set ? WHERE id_empleado = ?", [req.body, idEmpleado]);
            res.json(resp);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idEmpleado } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM empleado WHERE id_empleado = ${idEmpleado}`);
            res.json(resp);
        });
    }
    vereficarEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const consulta = `SELECT id_empleado FROM empleado WHERE correo = "${req.body.correo}" AND password = "${req.body.password}"`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length == 0) {
                console.log("null");
                res.json(null);
                return;
            }
            const empleado = respuesta[0];
            const contrasenaCoincide = yield bcryptjs_1.default.compare(req.body.password, empleado.password);
            if (contrasenaCoincide) {
                console.log("Contraseña correcta");
                res.json({ id_empleado: empleado.id_empleado });
                return;
            }
            else {
                console.log("Contraseña incorrecta");
                res.json({ mensaje: "Contraseña incorrecta" });
                return;
            }
        });
    }
    mostrarRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params);
            const { rol } = req.params;
            const consulta = `SELECT * FROM empleado WHERE puesto = '${rol}'`;
            console.log(consulta);
            const respuesta = yield database_1.default.query(consulta);
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    cambiarPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let pass = req.body.password;
            let cor = req.body.correo;
            console.log(pass, cor);
            const salt = yield bcryptjs_1.default.genSalt(10);
            req.body.password = yield bcryptjs_1.default.hash(req.body.password, salt);
            console.log(req.body.password);
            const resp = yield database_1.default.query("UPDATE empleado SET password = ? WHERE correo = ?", [req.body.password, req.body.correo]);
            res.json(resp);
        });
    }
}
exports.empleadoController = new EmpleadoController();
