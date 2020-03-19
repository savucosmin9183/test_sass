const express = require('express');
const myRoute = require('./route.js');
const app = express();

app.use('/books', myRoute);



app.listen(3000, () => {console.log('App listening on port 3000');});