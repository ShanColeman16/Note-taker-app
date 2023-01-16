const express = require('express');
const fs = require('fs');
const { join } = require('path');
const path = require('path');

const PORT = process.env.PORT || 3001;


const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => console.log('runing at port 3001'));