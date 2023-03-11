import { Request, Response } from "express";
import pool from "../database";

class DetalleVentaController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM detalle_venta';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM detalle_venta WHERE id_detalle_venta = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'detalleVenta no encontrada' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO detalle_venta set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idDetalleVenta } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE detalle_venta set ? WHERE id_detalle_venta = ?", [req.body, idDetalleVenta]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idDetalleVenta } = req.params;
        const resp = await pool.query(`DELETE FROM detalle_venta WHERE id_detalle_venta = ${idDetalleVenta}`);
        res.json(resp);
    }
}

export const detalleVentaController = new DetalleVentaController();