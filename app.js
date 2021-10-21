const express = require('express');
const app = express();
const apiRoutes = require('./src/routes/index.ts');

if (process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}

const port = process.env.PORT;

app.get('/', function(req, res) {
  res.send('Application works!');
});

app.use('/api', apiRoutes);

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
