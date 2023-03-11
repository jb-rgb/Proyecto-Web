export class Empleado {
    id_empleado?:number;
    nombre:string;
    apellido:string;
    puesto:string;
    password:string;
    correo:string;

    constructor() {
        this.nombre = '';
        this.apellido = '';
        this.puesto = '';
        this.password = '';
        this.correo = '';
    }
}