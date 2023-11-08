//import express package
const express = require('express');
//initialize express app
const bear = express();
//specify port
const PORT = process.env.PORT || 3013;

//parsing incoming JSON data & urlencoded data
bear.use(express.urlencoded({ extended: true }));
bear.use(express.json());
//host public folder
bear.use(express.static('public'));

//point server to route file
const polar = require('./routes/index.js');
//routes
bear.use(polar);

// const claw = require('claw');


//listen() method is responsible for listening to incoming connectings on the specified port
bear.listen(PORT, () =>
    console.log(`
    ************
    *WELCOME TO*
    Bear in Mind
    *NOTE TAKER*
    ************
  
    Server listening on PORT 
    http://localhost:${PORT}!

    `));