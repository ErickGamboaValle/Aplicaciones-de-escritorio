const usersRouter = require('express').Router();
usersRouter.get('/', function (req, res) {
    res.send('Users endpoint!');
});

usersRouter.post('/users', function (req, res) {
    res.send('Users post endpoint!');
});

usersRouter.put('/users', function (req, res) {
    res.send('Change pass endpoint!');
});


module.exports = usersRouter;
