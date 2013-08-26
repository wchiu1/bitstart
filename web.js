var express = require('express');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.logger());

var data = new Buffer(fs.readFileSync('index.html'));

app.get('/', function(request, response) {
  response.send(data.toString('utf-8'));
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
