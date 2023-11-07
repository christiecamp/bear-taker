//import express package
const express = require('express');
//point server to route file
const panda = require('./routes/index.js');

//specify port
const PORT = process.env.PORT || 3005;
//initialize express
const bear = express();


//parsing incoming JSON data & urlencoded data
bear.use(express.json());
bear.use(express.urlencoded({ extended: true }));

//routes
require('/api', panda)(bear);

//host public folder
bear.use(express.static('public'));

//listen() method is responsible for listening to incoming connectings on the specified port
bear.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});