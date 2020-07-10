require('express-async-errors');
const express = require('express');
const winston = require('winston');
const app = express();
const path = require('path');

require('./Startup/db')(); //Database connection
require('./Startup/errorhandler')(app); //error handling if for anyreason something went wrong in our code :)
app.use(express.json());
app.use('/api', require('./routes/index'));

app.use(express.static(path.join(__dirname, 'Frontend/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'Frontend/build', 'index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port, () => winston.info(`Listening on port ${port}`));
