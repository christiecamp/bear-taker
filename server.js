//import express package
const express = require('express');
//import built-in Node.js package 'path' to respolve path of files that are located on the server
const path = require('path');
//initialize bear variable by setting it to the value of express. (app)
const bear = express();
//specify which port the server will run on
const PORT = 3001; //placeholder


//parsing incoming JSON data & urlencoded data
bear.use(express.urlencoded({ extended: true }));
//static middleware pointing to public folder
bear.use(express.static('public'));
bear.use(express.json());

//route file - placeholder
bear.require('.routes/routes.js');


//listen() method is responsible for listening to incoming connectings on the specified port
//console.log placeholder
bear.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}!`)
);