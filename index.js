'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const API_KEY = require('./apiKey');

const server = express();
const level = 0;

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());
server.post('/get-movie-details', (req, res) => {
    console.log(req.body.result.resolvedQuery);
    var speech =
    req.body.result &&
    req.body.result.resolvedQuery &&
    req.body.result.resolvedQuery.echoText ? req.body.result.resolvedQuery.echoText : "Seems like some problem. Speak again.";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});


server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});
