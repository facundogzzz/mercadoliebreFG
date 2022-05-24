const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3030;
const path = require("path");

app.listen(PORT, function(){console.log(`Server up ${PORT}`)}); // Esta linea usa comilla ` torcida para mezclar codigo y string

app.use(express.static("public"))

app.get('/', function(rep,res){
    res.sendFile(path.join(__dirname,"views","home.html"))})

app.get('/login', function(rep,res){
    res.sendFile(path.join(__dirname,"views","login.html"))})
    
app.get('/register', function(rep,res){
    res.sendFile(path.join(__dirname,"views","register.html"))})