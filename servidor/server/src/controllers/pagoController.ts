import { Request, Response } from "express";
import pool from "../database";

class PagoController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM pago';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM pago WHERE tipo_pago = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Pago no encontrada' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO pago set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idPago } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE pago set ? WHERE tipo_pago = ?", [req.body, idPago]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idPago } = req.params;
        const resp = await pool.query(`DELETE FROM pago WHERE tipo_pago = ${idPago}`);
        res.json(resp);
    }
}

export const pagoController = new PagoController();