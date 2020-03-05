const express = require('express');
const books = require("./database.js");
const router = express.Router();
 
router.use(express.json());

/*router.get('/', (req, res) => {
    res.send(books.getAllFromDb());
})
*/
router.get('/', (req, res) => {
  const query = req.query.author;
  if(query === undefined)
    res.send(books.getAllFromDb());
  else
    res.send(books.getFromDbByAuthor(query));
})

router.get('/:id', (req, res) => {
  const paramId = req.params.id;
  res.send(books.getFromDbById(paramId));
})

router.post('/', (req, res) => {
  const body = req.body;
  books.insertIntoDb(body);
  res.json(body);
})

router.put('/:id', (req, res) => {
  const paramId = req.params.id;
  const body = req.body;
  books.updateById(paramId, body);
  res.json(body);
})

router.delete('/:id', (req, res) => {
  const paramId = req.params.id;
  books.removeFromDbById(paramId);
  res.send("Stergere efectuata");
})

router.delete('/', (req, res) => {
  const query = req.query.author;
  if(query != undefined){
    books.removeFromDbByAuthor(query);
    res.send("Stergere efectuata");
  }
  else {
    books.purgeDb();
    res.send("Stergere efectuata");
  }
})


module.exports = router;