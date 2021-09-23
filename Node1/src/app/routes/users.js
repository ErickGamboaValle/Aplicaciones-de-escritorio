module.exports = function(app){
    app.get('/api/user', function(req,res){ 
        res.send('user endpoint!');
    })
}

