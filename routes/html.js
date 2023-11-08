const path = require('path');

//html routes
module.exports = (bear) => {
    //notes
    bear.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //home
    bear.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    //wildcard
    bear.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};