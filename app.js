// var express = require('express');
// var app = express();

// var path = require('path');

// app.set('views', path.join(__dirname, 'views'));
// app.set ('view engine', 'jade');

// //render the JADE template
// app.get('/', function (req, res) {
//   res.render('index');
// });

// //send plain text
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// var server = app.listen (3000, function () {

//   var host = server.address().address;
//   var port = server.address().port;

// console.log('Example app listening at http://%s:%s', host, port)

// });

var express = require('express');
var app = express();

var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set ('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000);
