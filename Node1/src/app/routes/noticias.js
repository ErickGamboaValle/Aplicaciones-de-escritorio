module.exports = function(app){
    app.get('/api/noticias', function(req,res){ 
        res.send('Noticias endpoint!');
    })
}

