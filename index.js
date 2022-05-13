const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares')

const app = express();

app.use(bodyParser.json());

const products = [];

app.post('/sales', middlewares.authProduct, function (request, response) {
  const { productName, infos } = request.body;
  
  products.push({ productName, infos });
  
  response.status(201).json({ "message": "Venda cadastrada com sucesso" });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
