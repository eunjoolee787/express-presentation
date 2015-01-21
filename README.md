# Express.js Getting started Examples


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

The app starts a server and listens on port for connection.  It will respond with "Hello World!" for request to the homepage.

Save the code in file named app.js and run it with the following command

```bash
$ node app.js
```

Then, load [localhost:3000](http://localhost:3000/) in the browser to see the output

For more information, refer to the docs: http://expressjs.com
