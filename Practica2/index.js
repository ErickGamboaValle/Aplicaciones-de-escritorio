const express = require('express');
const noticiasRoutes = require('./app/routes/noticias.js');
const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.APIKEY);

const path = require('path');

let app = express();
app.use('/assets', express.static(path.join(__dirname, 'assets')));
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('App is listening in port: ' + port);
});

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/api', function (req, res) {
    res.send('api works!');
});

app.get('/noticias', function (req,res){
    newsapi.v2.everything({
        q: `${req.query.q}`,
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      })
})

noticiasRoutes(app);