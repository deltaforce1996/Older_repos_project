var mysql = require('mysql')

var conn = mysql.createPool({
  connectionLimit:100,
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'bf021028b74c5a',
  password: 'a400e1ff',
  database: 'heroku_41eba3417d89b14'
});

// var conn = mysql.createPool({
//   connectionLimit:100,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'heroku_41eba3417d89b14'
// });

// var conn = mysql.createConnection({
//   host: 'us-cdbr-iron-east-05.cleardb.net',
//   user: 'bf021028b74c5a',
//   password: 'a400e1ff',
//   database: 'heroku_41eba3417d89b14'
// });

// conn.connect(function(err) {
//   if (err) console.log('UnConnected!');
//   console.log('Connected!');
// });

module.exports = conn;
