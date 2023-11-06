//import express package
const express = require('express');
//import built-in Node.js package 'path to respolve path of files that are located on the server
const fs = require('fs');
const path = require('path');
//require JSON file and assigns it to a variable called 'db'
const db = require('./db/db.json');

//initialize bear variable by setting it to the value of express. (app)
const bear = express();
//specify which port the server will run on
const PORT = 3001; //placeholder



//static middleware pointing to the public folder
bear.use(express.static('public'));
bear.use(express.json());

//route file - placeholder
bear.require('.routes/routes.js');

// app.get() is a method that allows express to respond to requests from the client. 
// Each routing method corresponds to an HTTP method of the same name. ]
// res.sendFile() allows you to send static files to the client. It accepts an argument of root and an optional options array.
// bear.get('/send', (req, res) =>
//     res.sendFile(path.join('public/sendFile.html')));


//listen() method is responsible for listening to incoming connectings on the specified port
//console.log placeholder
bear.listen(PORT, () =>
    console.log(`Application listening at PORT http://localhost:${PORT}`)
);