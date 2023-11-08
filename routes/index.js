const express = require('express');

//import modular routers
const grizzly = require('./api');
const polar = require('./html');

const bear = express();

bear.use('/api/notes', grizzly);
bear.use('/', polar);


module.exports = bear;