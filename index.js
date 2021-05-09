require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./routes/routes');
const schedule = require('./routes/scheduler');
app.use(bodyParser.json());

app.use(route);

app.listen(4000, () => {
  console.log('Server running on 4000');
});
