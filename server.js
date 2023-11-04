//import express package
const express = require('express');
//import built-in Node.js package 'path to respolve path of files that are located on the server
const fs = require('fs');
const path = require('path');
//initialize an instance of express
const app = express();
//specify which port the server will run on
const PORT = 3001; //placeholder





//static middleware pointing to the public folder
app.use(express.static('public'));

//route file - placeholder
app.require('.routes/routes.js');

//listen() method is responsible for listening to incoming connectings on the specified port
app.listen(PORT, () =>
    console.log('Application listening on PORT')
);