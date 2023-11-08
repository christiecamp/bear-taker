//import express package
const express = require('express');
//initialize express app
const bear = express();
//specify port
const PORT = process.env.PORT || 3005;

//parsing incoming JSON data & urlencoded data
bear.use(express.urlencoded({ extended: true }));
bear.use(express.json());
//host public folder
bear.use(express.static('public'));

//point server to route file
const panda = require('./routes/index.js');
//routes
bear.use('/', panda);


//listen() method is responsible for listening to incoming connectings on the specified port
bear.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}!`));