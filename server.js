const express = require('express');
const fs = require('fs');
const { join } = require('path');
const path = require('path');

const PORT = process.env.PORT || 3001;


const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/api/notes', (req,res) => {
  const data = fs.readFileSync('./db/db.json', 'utf-8');
  const notes = JSON.parse(data);
  const newNotes = {
    ...req.body,
};


app.get('/api/notes', (req, res) => {
  const data = fs.readFileSync('./db/db.json', 'utf-8');
  const notes = JSON.parse(data);
  res.json(notes);
 })

  notes.push(newNotes);
  const stringifyedNotes = JSON.stringify(notes, null, 2);
  fs.writeFileSync('./db/db.json', 'utf8');
  res.json('Saved');
});



app.listen(PORT, () => console.log('runing at port 3001'));