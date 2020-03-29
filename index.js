//importando o  modulo express
const express = require("express");

//instanciando o express
const server = express();

//falando para o express que vou usar JSON
server.use(express.json());

/***************************
 *
 *  Query Params = ?teste=1
 *  Route params = /users/1
 *  Request body = { "nome": "Moises", "idade": 22 }
 *  CRUD - Create, Read, Update, Delete
 *  APRENDER SOBRE O METODO SPLICE
 *
 */

//array de usuarios
const users = ["Moises", "Carlos", "Junior"];

//middleware / rota que aparecerá em todas as rotas
//otima para ser utilizada em alguma api onde se comunique com
// footer navbar etc..
server.use((req, res, next) => {
  console.log("A requisição está global");
  return next();
});

//middleware/rota que lista todos os usuarios
server.get("/users", (req, res) => {
  return res.json(users);
});

// middleware/rota que lista  apenas 1 usuario
server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

// middleware/rota que cria um novo usuario
server.post("/users", (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

// middleware/rota que edita um usuario
server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

//middleware/rota que deleta um usuario
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send("");
});

//servidor ouvindo na porta 3000
server.listen(3000);
