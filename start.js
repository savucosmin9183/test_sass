const express = require('express');
const myAwesomeRoute = require('./route.js');
 
const app = express();
 
app.use('/hello', myAwesomeRoute);
 
app.listen(3000, () => {console.log('App listening on port 3000');})