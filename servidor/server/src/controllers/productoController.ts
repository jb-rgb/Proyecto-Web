import { Request, Response } from "express";
import pool from "../database";

class ProductoController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = 'SELECT * FROM producto';
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { id1 } = req.params;
        const consulta = 'SELECT * FROM producto WHERE id_producto = ' + id1;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'Producto no encontrado' });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO producto set ?",
            [req.body]);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { idProducto } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE producto set ? WHERE id_producto = ?", [req.body, idProducto]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { idProducto } = req.params;
        const resp = await pool.query(`DELETE FROM producto WHERE id_producto = ${idProducto}`);
        res.json(resp);
    }
    public async mostrarTipo(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { tipo } = req.params;
        const consulta = `SELECT * FROM producto WHERE tipo = '${tipo}'`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async mostrarConsola(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { consola } = req.params;
        const consulta = `SELECT * FROM producto p WHERE p.consola = '${consola}'`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async mostrarValoracion(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const { valoracion } = req.params;
        const consulta = `SELECT * FROM producto p WHERE p.valoracion = '${valoracion}'`;
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
}

export const productoController = new ProductoController();