const doctorsRouter = require('express').Router();
doctorsRouter.get('/', function (req, res) {
    res.send('Doctors endpoint!');
});

doctorsRouter.post('/doctors', function (req, res) {
    res.send('doctors post endpoint!');
});

usersRouter.put('/users', function (req, res) {
    res.send('Change pass endpoint!');
});

module.exports = doctorsRouter;
