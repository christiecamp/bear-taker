const grizzly = require('express').Router();
const fs = require('fs');
//uuidv4 generates a unique identifier string
const { uuid } = require('uuidv4');

//api routes

//GET note
grizzly.get('/api/notes', (req,res) => {
    let db = JSON.parse(fs.readFile('../db/db.json', "utf8"));
    res.json(db);
});


// //POST note
// grizzly.post('/api/notes', (req,res) => {
//     let db = fs.readFileSync('../db/db.json');
//     db = JSON.parse(db);
//     res.json(db);
//     //body of note
//     let newBear = {
//         title: req.body.title,
//         text: req.body.text,
//         note: uuid()
//     };
//     // //unique id to new note
//     // newBear.note = uuid();
//     //adds to array
//     db.push(newBear);
//     //update JSON file with new note
//     fs.writeFileSync('../db/db.json', JSON.stringify(db));
//     //respond with new note
//     res.json(db);
//     console.log(newBear);
// });


// //DELETE note
// grizzly.delete('/api/notes/:note', (req, res) => {
//     //reading note from db.json
//     let db = JSON.parse(fs.readFileSync('../db/db.json'))
//     //remove note (teddy-item)
//     let deleteBear = db.filter((teddy) =>
//     //id
//     teddy.note !== req.params.note);
//     //rewriting note
//     fs.writeFileSync('../db/db.json', JSON.stringify(deleteBear));
//     res.json(deleteBear);
// });


module.exports = grizzly;