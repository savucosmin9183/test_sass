const express = require('express');

const app = express();

app.get('/books/:id', (req, res) => { // exemplu de url: '/books/3'
  const paramId = req.params.id;
  res.send(`You sent a request with param id ${paramId}`);
});

app.listen(3000);