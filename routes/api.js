const grizzly = require('express').Router();
const path = require('path');
const fs = require('fs');

//api routes

//GET note
grizzly.get('/notes', (req,res) => {
   res.sendFile(path.join(__dirname, '../db/db.json'));
});


//POST note
grizzly.post('/notes', (req,res) => {
    let db = fs.readFileSync('../db/db.json');
    db = JSON.parse(db);
    res.json(db);
    //body of note
    let newBear = {
        title: req.body.title,
        text: req.body.text,
    };
    //unique id to new note
    //uuidv4 generates a unique identifier string
    newBear.note = uuidv4();
    //adds to array
    db.push(newBear);
    //update JSON file with new note
    fs.writeFileSync('../db/db.json', JSON.stringify(db));
    //respond with new note
    res.json(db);
    console.log(newBear);
});


//DELETE note
grizzly.delete('/notes/:note', (req, res) => {
    //reading note from db.json
    let db = JSON.parse(fs.readFileSync('../db/db.json'))
    //remove note (teddy-item)
    let deleteBear = db.filter((teddy) =>
    //id
    teddy.note !== req.params.note);
    //rewriting note
    fs.writeFileSync('../db/db.json', JSON.stringify(deleteBear));
    res.json(deleteBear);
});


module.exports = grizzly;