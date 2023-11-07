//import express package
const express = require('express');
//point server to route file
const route = require('./routes/index.js');

//initialize express
const bear = express();
//specify port
const PORT = process.env.PORT || 3000;


//parsing incoming JSON data & urlencoded data
bear.use(express.urlencoded({ extended: true }));
bear.use(express.json());

//host public folder
bear.use(express.static('public'));

//routes
bear.use(route);

//listen() method is responsible for listening to incoming connectings on the specified port
bear.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});