//import express package
const express = require('express');

//initialize express app
const app = express();

//specify port
const PORT = process.env.PORT || 3013;

//parsing incoming JSON data & urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//host public folder
app.use(express.static('public'));

//routes
//point server to route files
require('./routes/api')(app);
require('./routes/html')(app);


//listen() method is responsible for listening to incoming connectings on the specified port
app.listen(PORT, () =>
    console.log(`
    ************
    *WELCOME TO*
    Bear in Mind
    *NOTE TAKER*
    ************
  
    Server listening on PORT 
    http://localhost:${PORT}!

    `));