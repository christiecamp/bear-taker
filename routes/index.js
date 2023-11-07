const express = require('express');

//routes
const grizzly = require('./api.js');
const polar = require('./html.js');

const bear = express ();

bear.use('/notes', grizzly);
bear.use('/', polar);


module.exports = bear;