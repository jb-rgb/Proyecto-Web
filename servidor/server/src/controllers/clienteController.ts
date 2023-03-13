import { Request, Response } from "express";
import pool from "../database";
import bcrypt from 'bcryptjs';

class ClienteController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM cliente';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM cliente WHERE id_cliente = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Cliente no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO cliente set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idCliente } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE cliente set ? WHERE id_cliente = ?", [req.body, idCliente]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idCliente } = req.params;
        const resp = await pool.query(`DELETE FROM cliente WHERE id_cliente = ${idCliente}`);
        res.json(resp);
    }
    public async verificarCliente(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const consulta = `SELECT nombre, id_cliente, password FROM cliente WHERE correo = "${req.body.correo}"`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        if (respuesta.length == 0) {
            console.log("Usuario no encontrado");
            res.json({ mensaje: "Usuario no encontrado" });
            return;
        }
        const cliente = respuesta[0];
        const contrasenaCoincide = await bcrypt.compare(req.body.password, cliente.password);
        if (contrasenaCoincide) {
            console.log("Contraseña correcta");
            res.json({ id_cliente: cliente.id_cliente, nombre: cliente.nombre });
            return;
        } else {
            console.log("Contraseña incorrecta");
            res.json({ mensaje: "Contraseña incorrecta" });
            return;
        }
    }
    public async registrarCliente(req: Request, res: Response): Promise<void> {
        console.log(req.body);

        // Validar contraseña
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{10,})/;
        if (!passwordRegex.test(req.body.password)) {
            res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.' });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const consulta = `INSERT INTO cliente (id_cliente, nombre, apellido, direccion, correo, password, telefono, pais, estado, municipio, codigo_postal) VALUES (NULL, '${req.body.nombre}', '${req.body.apellido}', NULL, '${req.body.correo}', '${req.body.password}', NULL, NULL, NULL, NULL, NULL)`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
}

export const clienteController = new ClienteController();