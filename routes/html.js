const path = require('path');
const polar = require('express').Router();

//html routes

//home
polar.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
polar.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
//
polar.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});
//wildcard
polar.get('*', (req,res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = polar;