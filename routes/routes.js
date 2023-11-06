const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');
//creating to use as placeholders
const notes = require('../public/notes.html');
const index = require('../public/index.html');


//api routes

//GET note
bear.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, notes));
    //reads and sends JSON response 
    res.json(db);
    console.info(`${req.method} request received to view notes`);
});

//GET specific note
bear.get('/api/notes/:note', (req,res) => {
    res.json(notes[req.params.note]);
    console.info(`${req.method} request received to view specific note`);
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
    //update JSON
    fs.writeFileSync(db);
    //respond with new note
    res.json(db);
    console.log(req.body);
    console.info(`${req.method} request received to post a new note`);
});


//DELETE note
bear.delete('/api/notes/:note', (req, res) => {
    console.info(`${req.method} request received to delete note`);
});








//html routes
//home
bear.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, index));
});
//notes
bear.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, notes));
});
//wildcard
bear.get('*', (req,res) => {
    return res.sendFile(path.join(__dirname, index));
});



module.exports = bear;