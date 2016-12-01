var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(req.headers);
    res.send(JSON.stringify(req.headers));
});

app.listen(8080, function () {
  console.log('Header Parser app listening on port 8080!');
});
