const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');
const notes = require('../public/notes.html');
const index = require('../public/index.html');


//all variables and routes

//GET request for all notes
//__dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file - keeping as placement
bear.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, notes));
    //reads and sends JSON response 
    res.json(db);
    console.info(`${req.method} request received view notes`);
});

//POST route for notes
bear.post('/api/notes', (req,res) => {
    console.info(`${req.method} request received to post a new note`);
});

//GET route that returns a specific note
bear.get('/api/notes/:note', (req,res) => {
    res.json(notes[req.params.note]);
    console.info(`${req.method} request received to view specific note`);
});

//deletes specific note
bear.delete('/api/notes/:note', (req, res) => {
    console.info(`${req.method} request received to delete note`);
});

//display notes.html
bear.get('notes', (req, res) => {
    res.sendFile(path.join(__dirname, notes));
})

//display index.html when other routes don't exist 
bear.get('*', (req,res) => {
    return res.sendFile(path.join(__dirname, index));
});


module.exports = bear;