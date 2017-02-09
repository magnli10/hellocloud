'use strict';

const express = require('express');
const http = require('http');

let app = express();

app.get('/', (req, res) => {
    res.send('<style>html { font-family: sans-serif }</style><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');
});

http.createServer(app).listen(5000, () => {
    console.log("Listen on 0.0.0.0:5000");
});

process.on('SIGINT', function() {
    process.exit();
});
