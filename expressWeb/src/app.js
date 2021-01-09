const express = require('express');
const path = require('path')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;
//public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");


const stylepath = path.join(__dirname,"../public/css");

app.set('view engine','hbs');
app.set('views',template_path);
app.set('css',stylepath);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing
app.get("",(req,res) => {
    res.send("Welcome to Homepage Website")
})

app.get("/about",(req,res) => {
    res.render('index')
})
app.get("/weather",(req,res) => {
    res.render('weather')
})

/*app.get("/form",(req,res) => {
    res.render('form')
})*/


app.get("*",(req,res) => {
    res.render('404err')
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})