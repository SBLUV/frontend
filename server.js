const express = require('express');
const mysql = require('mysql2');

const app = express();

// Configuración de conexión a MySQL
const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root123',
  database: 'testdb'
});

// Intentar conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.log("Error conectando a MySQL:", err);
  } else {
    console.log("Conectado correctamente a MySQL");
  }
});

// Ruta principal de la web
app.get('/', (req, res) => {
  res.send(`
    <h1>Aplicación Docker funcionando 🚀</h1>
    <p>Servidor web conectado correctamente.</p>
    <p>Evaluación DevOps ISY1101</p>
  `);
});

// Levantar servidor
app.listen(3000, () => {
  console.log("Servidor iniciado en puerto 3000");
});