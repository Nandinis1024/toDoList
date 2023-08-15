const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const app = express();

app.use(express.static("static"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

const tasks =['Love Yourself', 'Clean your Ass'];
console.log(tasks);
app.get("/", function(req, res){

    let currentDate = new Date();
    let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    let formattedDate = currentDate.toLocaleDateString('en-US', options);

    

    res.render('list', {newItems: tasks, date: formattedDate});

});

app.post("/", function(req, res){
    
    var newTask = req.body.newTask;
    tasks.push(newTask);
    res.redirect('/');
    

});


app.listen(port, function(){
    console.log(`http://localhost:${port}`);
})

