import { Request, Response } from "express";
import pool from "../database";

class CarritoController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM carrito'
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM carrito WHERE id_carrito = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'No encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO carrito set ?", [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idCarrito } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE carrito set ? WHERE id_carrito = ?", [req.body, idCarrito]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idCarrito } = req.params;
        const resp = await pool.query(`DELETE FROM carrito WHERE id_carrito = ${idCarrito}`);
        res.json(resp);
    }
    public async mostrarCarrito(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { idCliente } = req.params;
        const consulta = `SELECT c.id_carrito, c.cantidad, p.nombre, p.imagen, p.caracteristicas, p.precio FROM carrito c INNER JOIN cliente cl INNER JOIN producto p ON c.id_producto = p.id_producto WHERE cl.id_cliente = '${idCliente}'`
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async totalCarrito(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { idCliente } = req.params;
        const consulta = `SELECT SUM(c.total) AS total_carrito FROM carrito c WHERE c.id_cliente = ${idCliente}`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
}

export const carritoController = new CarritoController();