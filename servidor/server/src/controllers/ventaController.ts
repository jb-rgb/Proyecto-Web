import { Request, Response } from "express";
import pool from "../database";

class VentaController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM venta';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM venta WHERE id_venta = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Venta no encontrada' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO venta set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idVenta } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE venta set ? WHERE id_venta = ?", [req.body, idVenta]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idVenta } = req.params;
        const resp = await pool.query(`DELETE FROM venta WHERE id_venta = ${idVenta}`);
        res.json(resp);
    }
    public async ventaInfo(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = `SELECT v.id_venta, c.id_pago, dv.id_producto, v.fecha, c.nombre, dv.cantidad, dv.precio FROM venta v INNER JOIN detalle_venta dv ON v.id_venta = dv.id_venta INNER JOIN cliente c ON c.id_cliente = v.id_cliente`
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async totalVenta(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = `SELECT SUM(subquery.precio) as precio_total FROM ( SELECT dv.precio FROM venta v INNER JOIN detalle_venta dv ON v.id_venta = dv.id_venta INNER JOIN cliente c ON c.id_cliente = v.id_cliente ) as subquery`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
}

export const ventaController = new VentaController();