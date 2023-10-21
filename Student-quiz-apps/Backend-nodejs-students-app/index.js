const express = require('express'),
  app = express(),
 bodyParser = require('body-parser');
  port = process.env.PORT || 5000;

// const mysql = require('mysql');

// var conn = mysql.createConnection({
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "bf021028b74c5a",
//   password: "a400e1ff",
//   database: "heroku_41eba3417d89b14"
// });

// conn.connect(function(err) {
//   if (err) console.log("UnConnected!");
//   console.log("Connected!");
// });

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.send('Hello World!')
  })

var routes = require('./routs/Simple/userRoutes'); 
routes(app); 

var routesScore = require('./routs/Simple/scoreRoutes'); 
routesScore(app); 

var childRoutes = require('./routs/Simple/childRoutes'); 
childRoutes(app);

var typeRoutes = require('./routs/typeRoutes'); 
typeRoutes(app);

var registerRoutes = require('./routs/registerRoutes'); 
registerRoutes(app);

var loginRoutes = require('./routs/loginRoutes'); 
loginRoutes(app);

var addScore = require('./routs/addScore'); 
addScore(app);