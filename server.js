/* eslint-disable no-console */
const express = require('express');
const { join, resolve } = require('path');
const morgan = require('morgan');
const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
