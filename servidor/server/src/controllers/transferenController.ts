import { Request, Response } from "express";
import pool from "../database";

class TransferenciaController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM transferencia';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM transferencia WHERE id_transferencia = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Transferencia no encontrada' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO transferencia set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idTransferencia } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE transferencia set ? WHERE id_transferencia = ?", [req.body, idTransferencia]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idTransferencia } = req.params;
        const resp = await pool.query(`DELETE FROM transferencia WHERE id_transferencia = ${idTransferencia}`);
        res.json(resp);
    }
}

export const transferenciaController = new TransferenciaController();