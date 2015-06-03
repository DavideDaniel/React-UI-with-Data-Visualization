var path = require('path');
// var url = require('url');
var express = require('express');
// var App         = require('./main');
var app = express();
// var development = process.env.NODE_ENV !== 'production';

app
  .use(express.static(__dirname + '/public'))
  .listen(2000, function () {
    console.log('Go to http://localhost:2000 in Safari, Firefox or Chrome');
  });

app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
  })
  //
  // if (development) {
  //   app.get('/assets/bundle.js',
  //     browserify('./client', {
  //       debug: true,
  //       watch: true
  //     }));
  // }
;
