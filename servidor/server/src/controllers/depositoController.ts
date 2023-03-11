import { Request, Response } from "express";
import pool from "../database";

class DepositoController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM deposito';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM deposito WHERE id_deposito = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Deposito no encontrada' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO deposito set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idDeposito } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE deposito set ? WHERE id_deposito = ?", [req.body, idDeposito]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idDeposito } = req.params;
        const resp = await pool.query(`DELETE FROM deposito WHERE id_deposito = ${idDeposito}`);
        res.json(resp);
    }
}

export const depositoController = new DepositoController();