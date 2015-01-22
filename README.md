# Getting Started with Express.js


* A web application framework
* HTTP utility methods (GET, PUT, POST, DELETE)
* Middleware


## INSTALLING

First, create a directory to hold your application

```bash 
$ mkdir myapp
$ cd myapp
```

Create a package.json file

```bash
$ npm init
```

Install Express in the app directory and save it in the dependencies list

```bash
$ npm install express --save
```
Create a file

```bash
$ touch app.js 
```
#### In app.js file:
```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen (3000, function () {
    
    var host = server.address().address;
    var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)

});
````

The app starts a server and listens on port for connection.  It will respond with "Hello World!" for request to the homepage.

Save the code in file named app.js and run it with the following command

```bash
$ node app.js
```

Then, load [localhost:3000](http://localhost:3000/) in the browser to see the output

For more information, refer to the docs: http://expressjs.com

# Jade Template

Install Jade in the app directory and save it in the dependencies list

```bash
$ npm install jade --save
```

Comment out old example and implement the code below
#### In app.js file:

```javascript
var express = require('express');
var app = express();

var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set ('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000);
```

First, create a directory to hold your application
```bash
$ mkdir views

$ cd views
```
Create a file
```bash
$ touch index.jade
```

Create a h1 in the Jade file
```javascript
h1
  | Hello, my name is Jade!
```

Save the code in file named app.js and run it with the following command

```bash
$ cd ..
$ node app.js
```

Then, load [localhost:3000](http://localhost:3000/) in the browser to see the output
