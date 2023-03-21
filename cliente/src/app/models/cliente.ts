export class Cliente {
    id_cliente?:number;
    nombre:string;
    apellido:string;
    direccion:string;
    correo:string;
    password:string;
    telefono:string;
    pais:string;
    estado:string;
    municipio:string;
    codigo_postal:string;
    id_pago: number;

    constructor() {
        this.nombre = '';
        this.apellido = '';
        this.direccion = '';
        this.correo = 'bacj010509@gs.utm.mx';
        this.password = '';
        this.telefono = '';
        this.pais = '';
        this.estado = '';
        this.municipio = '';
        this.codigo_postal = '';
        this.id_pago = 0;
    }
}