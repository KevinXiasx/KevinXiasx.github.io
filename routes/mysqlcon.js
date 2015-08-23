var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'danjina',
  database : 'nodeproj'
  });

connection.connect();

exports.connection = connection;
