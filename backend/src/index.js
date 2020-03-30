const express = require('express');
const cors = require('cors');

/**
 * sem ./ é uma biblioteca
 *  ./ significa que é arquivo
 */
const routes = require('./routes');
const app = express();

app.use(cors());

/**
 * Import para utilizar o json
 */
app.use(express.json());

app.use(routes);


app.listen(3333);