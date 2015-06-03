var path = require('path');
var express = require('express');
var cors = require('cors');
var app = express();
// var development = process.env.NODE_ENV !== 'production';

app
  .set('port', process.env.PORT || 8080)
  .use(cors())
  .use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendfile('./public/index.html');
});

app.listen(app.get('port'), function () {
  console.log('Server listening on port %d', app.get(
    'port'));
});
