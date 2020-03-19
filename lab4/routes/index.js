const Router = require('express')();

const AuthorsController = require('../Authors/controllers.js');
const BooksController = require('../Books/controllers.js');
const PublishersController = require('../Publishers/controllers.js');

Router.use('/authors', AuthorsController);
Router.use('/books', BooksController);
Router.use('/publishers', PublishersController);

module.exports = Router;