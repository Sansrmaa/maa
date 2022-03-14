const express = require('express');
const dotenv = require('dotenv');
const connection = require('./database');
dotenv.config();
const app = express();

var id = 5;
app.get('/', (req, res) => {
    res.send('Hello World!');
    connection.query('SELECT * from fck', (err, rows, fields) => {
        if (err) throw err;
        console.log(rows);
      })

  })

  app.get('/lalar', (req, res) => {
    res.send('hi lalaraa')
    id++;
    connection.query(`INSERT INTO fck (idfck, fname, lname, age) VALUES (${id}, "hi", "lalar", 18)`, (err, rows, fields) => {
        if (err) throw err;
        console.log("amjilttai hadgallaa");
      })
  })

app.listen(process.env.PORT,() => {
    console.log(`fucking app is listening on PORT --> ${process.env.PORT}`);
    connection.connect((err) => {
        if(err) throw err;
        console.log("Database connected");
    });
    
  });

  