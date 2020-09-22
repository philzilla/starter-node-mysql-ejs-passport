
var mysql = require('mysql');
 
var mysql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});
 
var databaseName = "passportjs";
 
mysql.connect(function(err) {
  if (err) throw err;
  varId = 6;
  mysql.query("create database "+databaseName, function (err, result, fields) {
    if (err) throw err;
  });
  mysql.end();
   
 
});
 
 
console.log("Base de donnée créer.");