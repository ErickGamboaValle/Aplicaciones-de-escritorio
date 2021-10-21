const usersRouter = require('express').Router();

usersRouter.get('/', function(req, res) {
  res.send('Users endpoint!');
});

module.exports = usersRouter;
