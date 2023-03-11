import { Request, Response } from "express";
import pool from "../database";

class FacturaController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM factura';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM factura WHERE id_factura = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Factura no encontrada' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO factura set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idFactura } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE factura set ? WHERE id_factura = ?", [req.body, idFactura]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idFactura } = req.params;
        const resp = await pool.query(`DELETE FROM factura WHERE id_factura = ${idFactura}`);
        res.json(resp);
    }
    public async info(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = `SELECT v.id_venta, c.id_pago, f.id_factura, dv.id_producto, v.fecha, c.nombre, dv.cantidad, dv.precio FROM venta v INNER JOIN detalle_venta dv ON v.id_venta = dv.id_venta INNER JOIN factura f ON v.id_venta = f.id_venta INNER JOIN cliente c ON v.id_cliente = c.id_cliente`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async totalFactura(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = `SELECT SUM(subquery.precio) as precio_total FROM ( SELECT dv.precio FROM venta v INNER JOIN detalle_venta dv ON v.id_venta = dv.id_venta INNER JOIN factura f ON v.id_venta = f.id_venta INNER JOIN cliente c ON v.id_cliente = c.id_cliente ) as subquery`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
}

export const facturaController = new FacturaController();