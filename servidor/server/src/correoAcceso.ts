import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

var email = require("emailjs/email");
console.log("hola");

module.exports = (formulario: any) => {
    const token: string = jwt.sign(formulario.correo, process.env.TOKEN_SECRET || 'prueba');
    console.log(formulario);
    var server = email.server.connect(
        {
            user: "bacj010509@gs.utm.mx",
            password: "#Jorge4820",
            host: "smtp.gmail.com",
            ssl: true,
        });

    var message: any = {};
    message = {
        from: "bacj010509@gs.utm.mx",
        to: "jb30085@gmail.com",
        bcc: "",
        subject: "Probando ando",
        attachment: [
            { data: `¡¡Te damos la más cordial bienvenida !!
            <a href="http://localhost:4200/recuperar/${token}" >ACEPTAR</a>
            <br><br>
            `, alternative: true }
        ]
    };
    console.log(message);
    server.send(message, function (err: any, message: any) { console.log(err); });
}