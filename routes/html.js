const path = require('path');

//html routes
module.exports = (app) => {
    //notes
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //home
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    //wildcard
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};