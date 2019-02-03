const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      path = require('path'),
      port = process.env.PORT || 3000,
      request = require('request-promise-native'),
      server = require('http').Server(app);


// PREREQS //

require('dotenv').config();
app.use(express.json());
app.use(cors());


// ROUTES //

const indexRouter = require('./routes/index.js'),
      searchRouter = require('./routes/search.js');

app.use('/', indexRouter);
app.use('/search', searchRouter);



// INIT //

app.listen(port, () => console.log(`Listening on ${port} friendo`))
