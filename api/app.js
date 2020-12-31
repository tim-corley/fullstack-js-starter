const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  await res.send('Home Page');
});

app.use(async (res, req, next) => {
  next(createError.NotFound('⛔ Oops! This route does not exist.'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('❗There was an error trying to start the server.', err);
    return;
  }
  console.log(`\n ⚡ Server is up & running at: http://localhost:${PORT}`);
});
