//import express package
const express = require('express');
//import built-in Node.js package 'path' to respolve path of files that are located on the server
const path = require('path');
//initialize bear variable by setting it to the value of express. (app)
const bear = express();
//specify which port the server will run on
const PORT = 3001; //placeholder


//static middleware pointing to public folder
//parsing incoming JSON data & urlencoded data
// `urlencoded` data represents a URL encoded form.
bear.use(express.static(path.join('public')));
bear.use(express.json());
bear.use(express.urlencoded({ extended: true }));

//route file - placeholder
bear.require('.routes/routes.js');


//listen() method is responsible for listening to incoming connectings on the specified port
//console.log placeholder
bear.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);