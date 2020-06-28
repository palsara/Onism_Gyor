const mysql = require("mysql");
const config = require('./config');


const connection = mysql.createConnection({
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

connection.connect((err, con) => {
  if (err) throw err;
});

module.exports = connection;