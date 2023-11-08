const path = require('path');
const fs = require('fs');
//uniqid generates a unique identifier string
const uniqid = require('uniqid');

//api routes
const bear = require('express').Router();

    //GET note
    bear.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    // //POST note
    bear.post('/notes', (req,res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        //body of note
        let newBear = {
            title: req.body.title,
            text: req.body.text,
            //unique id to new note
            teddy: uniqid(),
        };
        //add to array
        db.push(newBear);
        //update JSON file with new note
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        //respond with new note
        res.json(db);
        console.log(newBear);
    }); 

    //DELETE note
    bear.delete('/api/notes/:teddy', (req, res) => {
    //reading notes from db.json
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    //remove note (teddy-item)
    let deleteBear = db.filter(item => item.teddy !== req.params.id);
    //rewriting note
    fs.writeFileSync('db/db.json', JSON.stringify(deleteBear));
    res.json(deleteBear);
    })

module.exports = bear;