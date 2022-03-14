// var mysql = require('mysql');
const express = require('express');
const mysql = require('mysql');

//  <!-- var http = require('http'); -->
//  <!-- http.createServer(function(req, response){

//  }).listen(3306 ) -->
const db = mysql.createConnection({
  host      :'localhost',
  user      :'root',
  password  :'',
  database  :'student'
});


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "12345678",
//   database: "student"
// });

db.connect(function(err) {
    if (err) {
        console.log("disConnected!");
    }else{
        console.log("Connected!");
    }})
    
//   });
//   var sql = "CREATE TABLE customers (id INT(50), name VARCHAR(50) age INT(200))";
//     con.query(sql, function (err) {
//       if (err) {
//           console.log("Table vvssengv");
//       }
//       console.log("Table vvssengv");
//     });
// <!-- 
// con.connect(function(err) { -->
//   <!-- if (err);
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (id INT(50), name VARCHAR(50) age INT(200))";
//   con.query(sql, function (err, result) {
//     if (err) {
//         console.log("Table created");
//     }
//     console.log("Table created");
//   });
// })

// var CreateTable = "CREATE TABLE student (id INT(50), name VARCHAR(55), age INT(200))";
// con.query(CreateTable, function (err) {
//   if (err) {
//     console.log("Table uusenguu");
//   }
//   else {
//     console.log("Table uussen");
//   }
 
// });
// var CreateTable = "INSERT INTO student (id , name , age ) VALUES ('10', 'Maa', '20')";
//   con.query(CreateTable, function (err ) {
//     if (err) throw err;
//     console.log("insert amjilttai");
//   });

//    con.query("SELECT * FROM student", function (err, result, ) {
//      if (err) throw err;
//      console.log(result);
//    });

//    var CreateTable = "INSERT INTO student (id , name , age ) VALUES ('20', 'Uyanga, '21)";
//  con.query(CreateTable, function (err ) {
//  if (err) throw err;
//   console.log("insert amjilttai");
// });

//  var CreateTable = "INSERT INTO unsiy (id , name , age ) VALUES ('22', 'Anhaa', '17')";
//  con.query(CreateTable, function (err ) {
//   if (err) throw err;   console.log("insert amjilttai");
//  });


//     var sql = "DELETE FROM student WHERE id = '22'";
//     con.query(sql, function (err, result) {
//       if (err){
//         console.log("ustsangu");
//       }
//       else {
//           console.log("ustsan");

//       }
    
//     });

//    var sql = "UPDATE student SET ner = 'Uyanga' WHERE ner = 'Maa'";
//    connectDatabase.query(sql, function (err) {
//      if (err) {
//        console.log("shinchlgdeegu");  
//      }
//      else{
//          console.log("shinchlegdsen");
//      }
//    }); -->
//Connect
db.connect((err) => {
  if(err){
      throw err;
  }
  console.log('MySql Connected...');
});

const app = express();

//Create DB//
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE maa';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Database created...');
  });
});





app.listen('8080', () => {
  console.log('Server started on port 8080');
});

