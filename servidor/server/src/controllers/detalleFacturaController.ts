import { Request, Response } from "express";
import pool from "../database";

class DetalleFacturaController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM detalle_factura';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1, id2 } = req.params;
        const consulta = 'SELECT * FROM detalle_factura WHERE id_factura = ' + id1 + ' AND id_venta = ' + id2;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'detalleFactura no encontrada' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO detalle_factura set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idFactura, idVenta } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE detalle_factura set ? WHERE id_factura = ? AND id_venta = ?", [req.body, idFactura, idVenta]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idFactura, idVenta } = req.params;
        const resp = await pool.query("DELETE FROM detalle_factura WHERE detalle_factura.id_venta = ? AND detalle_factura.id_factura = ?", [idVenta, idFactura]);
        res.json(resp);
    }
}

export const detalleFacturaController = new DetalleFacturaController();