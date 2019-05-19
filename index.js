
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const boom = require('express-boom');

const {
  PORT,
} = process.env;
require('./config/database');
const routes = require('./config/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(boom());

app.use('/', routes);

app.use((req, res) => {
  res.boom.notFound();
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});
