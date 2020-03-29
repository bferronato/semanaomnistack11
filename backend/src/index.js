const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
    // origin:'http://meuapp.com' #Para ambiente de produção
}));
app.use(express.json());
app.use(routes);



app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * M[etodos HTTP:
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-ed
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados na rota
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: SQLite, MySQL, PostgreSQL, Oracle
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: Select * from Users
  * Query Builder: table('user').select('*').where()
  */
 


