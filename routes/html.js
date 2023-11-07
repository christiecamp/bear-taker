const polar = require('express').Router();
const path = require('path');

//html routes

//home
polar.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//notes
polar.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//wildcard
polar.get('*', (req,res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = polar;