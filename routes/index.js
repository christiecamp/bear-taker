const express = require('express');
const fs = require('fs');
//import built-in Node.js package 'path' to respolve path of files that are located on the server
const path = require('path');
//import db JSON file
const db = require('./db/db.json');
const grizzly = require('./api.js');
const polar = require('./html.js');
const bear = express ();

bear.use('/notes', grizzly);
bear.use('/', polar);


module.exports = bear;





//api routes

//GET note
bear.get('/api/notes', (req,res) => {
    fs.readFile('/db/db.json', "utf8", (err, info) => {
        if (err) throw err;
        //reads and sends JSON response 
        let dbBear = JSON.parse(info)
        res.json(dbBear);
    });
});

//GET specific note
bear.get('/api/notes/:note', (req,res) => {

    // res.json(notes[req.params.note]);
});



//POST note
bear.post('/api/notes', (req,res) => {
    //note currently being saved by user
    const newNote = req.body;
    //unique id to new note
    //uuidv4 generates a unique identifier string
    newNote.note = uuidv4();
    //adds to array
    db.push(newNote);
    //update JSON file with new note
    fs.writeFileSync(db, JSON.stringify(db));
    //respond with new note
    res.json(db);
    console.log(newNote);
});


//DELETE note
bear.delete('/api/notes/:note', (req, res) => {
    const newBear = db.filter((teddy) =>
    teddy.note !== req.params.note);
    fs.writeFileSync(db, JSON.stringify(newBear));
    readFile.json(newBear);
});




//html routes
//home
bear.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
//notes
bear.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
//
bear.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});
//wildcard
bear.get('*', (req,res) => {
    return res.sendFile(path.join(__dirname, '/public/index.html'));
});
