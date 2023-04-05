import { Request, Response } from "express";
import pool from "../database";
import bcrypt from 'bcryptjs';

class EmpleadoController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM empleado';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM empleado WHERE id_empleado = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Empleado no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const resp = await pool.query("INSERT INTO empleado set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idEmpleado } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE empleado set ? WHERE id_empleado = ?", [req.body, idEmpleado]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idEmpleado } = req.params;
        const resp = await pool.query(`DELETE FROM empleado WHERE id_empleado = ${idEmpleado}`);
        res.json(resp);
    }
    public async vereficarEmpleado(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const consulta = `SELECT id_empleado FROM empleado WHERE correo = "${req.body.correo}"`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        if(respuesta.length == 0) {
            console.log("null");
            res.json(null);
            return ;
        } else {
            res.json(respuesta);
            return;
        }
        // const empleado = respuesta[0];
        // const contrasenaCoincide = await bcrypt.compare(req.body.password, empleado.password);
        // if (contrasenaCoincide) {
        //     console.log("Contraseña correcta");
        //     res.json({ id_empleado: empleado.id_empleado });
        //     return;
        // } else {
        //     console.log("Contraseña incorrecta");
        //     res.json({ mensaje: "Contraseña incorrecta" });
        //     return;
        // }
    }
    public async mostrarRol(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { rol } = req.params;
        const consulta = `SELECT * FROM empleado WHERE puesto = '${rol}'`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async cambiarPassword(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        let pass = req.body.password;
        let cor = req.body.correo;
        console.log(pass, cor);
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        console.log(req.body.password);
        const resp = await pool.query("UPDATE empleado SET password = ? WHERE correo = ?", [req.body.password, req.body.correo]);
        res.json(resp);
    }
}

export const empleadoController = new EmpleadoController();