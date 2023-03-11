import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import clienteRoutes from './routes/clienteRoutes';
import empleadoRoutes from './routes/empleadoRoutes';
import productoRoutes from './routes/productoRoutes';
import detalleVentaRoutes from './routes/detalleVentaRoutes';
import ventaRoutes from './routes/ventaRoutes';
import facturaRoutes from './routes/facturaRoutes';
import detalleFacturaRoutes from './routes/detalleFacturaRoutes';
import pagoRoutes from './routes/pagoRoutes';
import depositoRoutes from './routes/depositoRoutes';
import tarjetaRoutes from './routes/tarjetaRoutes';
import transferenciaRoutes from './routes/transferenciaRoutes';
import carritoRoutes from './routes/carritoRoutes';
import swagger_ui_express from 'swagger-ui-express'
import swaggerDocument from './swagger.json';
import morgan from 'morgan';
import cors from 'cors';

class Server {
    public app : Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
    }
    config() : void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended : false }));
    }
    routes() : void {
        this.app.use(indexRoutes);
        this.app.use('/api/clientes', clienteRoutes);
        this.app.use('/api/empleados', empleadoRoutes);
        this.app.use('/api/productos', productoRoutes);
        this.app.use('/api/detalleVentas', detalleVentaRoutes);
        this.app.use('/api/ventas', ventaRoutes);
        this.app.use('/api/facturas', facturaRoutes);
        this.app.use('/api/detalleFacturas', detalleFacturaRoutes);
        this.app.use('/api/pagos', pagoRoutes);
        this.app.use('/api/depositos', depositoRoutes);
        this.app.use('/api/tarjetas', tarjetaRoutes);
        this.app.use('/api/transferencias', transferenciaRoutes);
        this.app.use('/api/carritos', carritoRoutes);
    }
    start() : void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();