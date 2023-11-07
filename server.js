//import express package
const express = require('express');
//initialize bear variable by setting it to the value of express. (app)
const bear = express();
//specify which port the server will run on
const PORT = process.env.PORT || 3000;
const route = require('./routes/index.js');


//parsing incoming JSON data & urlencoded data
bear.use(express.urlencoded({ extended: true }));
bear.use(express.json());

//host public folder
bear.use(express.static('public'));

//routes
bear.use(express.json(route));


//listen() method is responsible for listening to incoming connectings on the specified port
//console.log placeholder
bear.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});