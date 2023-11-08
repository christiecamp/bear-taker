const path = require('path');
const fs = require('fs');
//uuidv4 generates a unique identifier string
const { uuid } = require('uuidv4');

//api routes
module.exports = (app) => {

    //GET note
    app.get('/api/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    // //POST note
    app.post('/api/notes', (req,res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        //body of note
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            //unique id to new note
            id: uuid(),
        };
        //add to array
        db.push(newNote);
        //update JSON file with new note
        fs.writeFile('db/db.json', JSON.stringify(db));
        //respond with new note
        res.json(db);
        console.log(newNote);
    }); 

    //DELETE note
    app.delete('/api/notes/:id', (req, res) => {
    //reading notes from db.json
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    //remove note (teddy-item)
    let deleteNote = db.filter(item => 
    item.id !== req.params.id);
    //rewriting note
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
    });
};