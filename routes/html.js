const path = require('path');

//html routes
const bear = require('express').Router();

    //home
    bear.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    //notes
    bear.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //wildcard
    bear.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

module.exports = bear;