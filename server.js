const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 3001;


const app = express();

app.get('/', (req, res) => {
  res.send('Note Taker');
});

app.listen(PORT);