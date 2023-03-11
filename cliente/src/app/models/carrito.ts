export class Carrito {
    id_carrito?: number;
    id_cliente?: number;
    id_producto?: number;
    cantidad: number;
    total?: number;

    constructor() {
        this.cantidad = 1;
    }
}