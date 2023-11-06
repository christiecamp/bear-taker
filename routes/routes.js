const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');


//all variables and routes

//GET route for notes
bear.get('/api/notes', (req,res) => {
    //reads and sends JSON response 
    res.json(db);
});

//POST route for notes
bear.post('/api/notes', (req,res) => {

});

//GET route that returns a specific note
bear.get('/api/notes/:note', (req,res) => {
    res.json(notes[req.params.note]);
});

//deletes specific note
bear.delete('/api/notes/:note', (req, res) => {
    console.log('Note deleted!');
});

//display notes.html
bear.get('notes', (req, res) => {
    res.sendFile(path.join('../public/notes.html'));
})

//display index.html when other routes don't exist
bear.get('*', (req,res) => {
    res.sendFile(path.join('../public/index.html'));
});


module.exports = bear;