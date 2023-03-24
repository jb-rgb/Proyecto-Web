import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
var email = require("emailjs/email");
console.log("hola");

module.exports = (formulario: any) => {
    const token: string = jwt.sign(formulario.correo, process.env.TOKEN_SECRET || 'prueba');
    console.log(formulario);
    console.log(formulario.correo);
    var server = email.server.connect(
        {
            user: "equipodo6semestre@gmail.com",
            password: "syrucrporkvrfmwg",
            host: "smtp.gmail.com",
            ssl: true,
        });
    var message: any = {};
    message = {
        from:"equipodo6semestre@gmail.com",
        to: formulario.correo,
        bcc: "",
        subject: "Probando ando",
        attachment: [
            {
                data: `¡¡Buenos dias !!
        <a href="http://localhost:4200/recuperar/${token}" >ACEPTAR</a>
<br><br>
        `, alternative: true
            }
        ]
    };
    
    console.log(message)
    server.send(message, function (err: any, message: any) { console.log(err); });
}