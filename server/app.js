const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json());
app.use(cors());

const indexRouter = require('./routes/index.js');
const searchRouter = require('./routes/search.js');

app.use('/', indexRouter);
app.use('/search', searchRouter);

app.listen(port, () => console.log(`Listening on ${port} friendo`));
