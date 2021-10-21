const appointmentsRouter = require('express').Router();
appointmentsRouter.get('/', function (req, res) {
    res.send('Appointments get endpoint!');
});

appointmentsRouter.post('/appointment', function (req, res) {
    res.send('Appointments post endpoint!');
});

appointmentsRouter.put('/appointment', function (req, res) {
    res.send('Change appointment endpoint!');
});

module.exports = appointmentsRouter;
