const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();

const db = require('./database');

const port = 3200;

db.hasConnection();

app.use(express.json());

app.use(routes);

app.listen(port, ()=> {
    console.log('Servidor iniciado na porta: '+port);
});
