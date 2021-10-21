const doctorsRouter = require('express').Router();

doctorsRouter.get('/', function(req, res) {
  res.send('Doctors endpoint!');
});

module.exports = doctorsRouter;
