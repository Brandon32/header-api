var express = require('express');
var app = express();

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  var ip = req.get('X-Forwarded-For').split(', ');
  var lang = req.get('accept-language').split(',');
  var soft = req.get('user-agent').split(/\s?[\(\)]\s?/);
  var whoami = {
    "ipaddress":ip[0],
    "language":lang[0],
    "software":soft[1]
  };
  console.log(ip,lang,soft);
  res.send(JSON.stringify(whoami));
});

app.listen(port, function () {
  console.log('Header Parser app listening on port 8080!');
});
