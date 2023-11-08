//import express package
const express = require('express');
const grizzly = require('./routes/api.js');
const polar = require('./routes/html.js');

//initialize express app
const bear = express();

//specify port
const PORT = process.env.PORT || 3013;

//parsing incoming JSON data & urlencoded data
bear.use(express.urlencoded({ extended: true }));
bear.use(express.json());
//host public folder
bear.use(express.static('public'));

//routes
//point server to route files
bear.use('/api', grizzly);
bear.use('/', polar);


//listen() method is responsible for listening to incoming connectings on the specified port
bear.listen(PORT, () =>

    console.log(`
    ************
    *WELCOME TO*
    Bear in Mind
    *NOTE TAKER*
    ************
  
    Server listening on PORT 
    http://localhost:${PORT} !

    `));