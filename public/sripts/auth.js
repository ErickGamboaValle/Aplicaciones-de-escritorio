const authRouter = require('express').Router();
authRouter.get('/', function (req, res) {
    res.send('Auth endpoint!');
});
module.exports = authRouter;
