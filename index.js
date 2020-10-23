var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/myOwn.html'));
});

app.listen(PORT);