export class Producto {
    id_producto?:number;
    nombre:string;
    tipo:string;
    consola:string;
    genero:string;
    stock:number;
    precio:number;
    caracteristicas:string;
    valoracion:number;
    imagen:string;

    constructor() {
        this.nombre = '';
        this.tipo = '';
        this.consola = '';
        this.genero = '';
        this.stock = 0;
        this.precio = 0.0;
        this.caracteristicas = '';
        this.valoracion = 0.0;
        this.imagen = '';
    }
}