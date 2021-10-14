const express = require('express');
const noticiasRoutes = require('./app/routes/noticias.js');
const NODE_ENV = process.env.NODE_ENV||'development';
require('dotenv').config({
    path:`.env.${NODE_ENV}`
});
console.log(`api key = `+process.env.APIKEY);//nunca pude importarla hacia el noticia.js


const path = require('path');
const { Console } = require('console');

let app = express();
app.use(express.static(__dirname +'/public'));
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('App is listening in port: ' + port);
});

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/api', function(req,res){
    res.send('api works!');
});

noticiasRoutes(app);