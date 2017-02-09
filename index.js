'use strict';

const express = require('express');
const http = require('http');

let app = express();

app.get('/', (req, res) => {
    res.send("<style>html { font-family: sans-serif }</style>Heisann, dette er appen til LEAN😘");
});

http.createServer(app).listen(5000, () => {
    console.log("Listen on 0.0.0.0:5000");
});

process.on('SIGINT', function() {
    process.exit();
});
