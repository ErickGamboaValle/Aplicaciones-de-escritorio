const express = require('express');
const noticiasRoutes= require('./src/app/routes/noticias');
const userRoutes = require('./src/app/routes/users');
let app = express();

app.listen(3000, ()=>{
    console.log('App is listening in port 3000');
});

app.get('/', function(req,res){
    res.send('works');
});

app.get('/api', function(req,res){
    res.send('api works');
});

noticiasRoutes(app);
userRoutes(app);