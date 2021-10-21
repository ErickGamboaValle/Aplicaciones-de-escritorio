const appointmentsRouter = require('express').Router();

appointmentsRouter.get('/', function(req, res) {
  res.send('Appointments endpoint!');
});

module.exports = appointmentsRouter;
