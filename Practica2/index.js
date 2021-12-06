const express = require('express');
const noticiasRoutes = require('./app/routes/noticias.js');
const NODE_ENV = process.env.NODE_ENV||'development';
require('dotenv').config({
    path:`.env.${NODE_ENV}`
});

const path = require('path');
const { Console } = require('console');

let app = express();
app.use('/assets', express.static(path.join(__dirname, 'assets')));
const port = process.env.PORT || 3001;

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