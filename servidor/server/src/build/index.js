"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const empleadoRoutes_1 = __importDefault(require("./routes/empleadoRoutes"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const detalleVentaRoutes_1 = __importDefault(require("./routes/detalleVentaRoutes"));
const ventaRoutes_1 = __importDefault(require("./routes/ventaRoutes"));
const facturaRoutes_1 = __importDefault(require("./routes/facturaRoutes"));
const detalleFacturaRoutes_1 = __importDefault(require("./routes/detalleFacturaRoutes"));
const pagoRoutes_1 = __importDefault(require("./routes/pagoRoutes"));
const depositoRoutes_1 = __importDefault(require("./routes/depositoRoutes"));
const tarjetaRoutes_1 = __importDefault(require("./routes/tarjetaRoutes"));
const transferenciaRoutes_1 = __importDefault(require("./routes/transferenciaRoutes"));
const carritoRoutes_1 = __importDefault(require("./routes/carritoRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/clientes', clienteRoutes_1.default);
        this.app.use('/api/empleados', empleadoRoutes_1.default);
        this.app.use('/api/productos', productoRoutes_1.default);
        this.app.use('/api/detalleVentas', detalleVentaRoutes_1.default);
        this.app.use('/api/ventas', ventaRoutes_1.default);
        this.app.use('/api/facturas', facturaRoutes_1.default);
        this.app.use('/api/detalleFacturas', detalleFacturaRoutes_1.default);
        this.app.use('/api/pagos', pagoRoutes_1.default);
        this.app.use('/api/depositos', depositoRoutes_1.default);
        this.app.use('/api/tarjetas', tarjetaRoutes_1.default);
        this.app.use('/api/transferencias', transferenciaRoutes_1.default);
        this.app.use('/api/carritos', carritoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
