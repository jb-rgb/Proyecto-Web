import { Request, Response } from "express";
import pool from "../database";

class TarjetaController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM tarjeta';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM tarjeta WHERE id_tarjeta = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Tarjeta no encontrada' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO tarjeta set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idTarjeta } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE tarjeta set ? WHERE id_tarjeta = ?", [req.body, idTarjeta]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idTarjeta } = req.params;
        const resp = await pool.query(`DELETE FROM tarjeta WHERE id_tarjeta = ${idTarjeta}`);
        res.json(resp);
    }
}

export const tarjetaController = new TarjetaController();