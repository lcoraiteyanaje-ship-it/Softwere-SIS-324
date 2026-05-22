// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Clase User simplificada
class User {
    constructor(id, name, terminal_name) {
        this.id = id;
        this.name = name;
        this.terminal_name = terminal_name;
    }
}

// Datos iniciales con tu información
let users = [
    new User(1, "Luz Clara Coraite Yanaje - ING DE SISTEMAS 21/05/2026", "Ejemplo de curso")
];

// Endpoint GET: listar usuarios
app.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint POST: crear un nuevo usuario
app.post('/users', (req, res) => {
    const { name, terminal_name } = req.body;
    const newUser = new User(users.length + 1, name, terminal_name);
    users.push(newUser);
    res.status(201).json([newUser]); // devuelve en array como pide el laboratorio
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

