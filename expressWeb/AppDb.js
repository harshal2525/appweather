const express = require('express');
const app = express();
const path = require('path');
const static_path = path.join('C:\Users\Harshal Vaishnav\Desktop\nodefile\form');
const port = 3000;

//app.set('view engine','hbs')

app.use(express.static(static_path));

app.get('/form',function(req,res) {
    res.sendFile(path.join('C:\Users\Harshal Vaishnav\Desktop\nodefile\form\index.html'));
});

app.post('/submit',function(req,res){
  res.render('index',{title:"Data Saved",
  message: 'Data Saved Success'
})
})

app.listen(port, () =>{
    console.log("Listening to port 3000");
    console.log("Yes ,I exists")
})



















/*var mysql = require("mysql");
//const express = require('express');
//var app = express();
//const bodyparser = require('body-parser');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'my_db'

});

mysqlConnection.connect((err) => {
    if(!err)
    {
        console.log("DB Connected");
    }
    else{
        console.log("DB Connection Failed");
    }
});


mysqlConnection.query('SELECT * FROM students',(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);
})
*/