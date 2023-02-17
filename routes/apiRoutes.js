const path = require('path');
const fs = require('fs');


var uniqid = require('uniqid');

module.exports = ( app )  => {

  app.get('/api/notes', (req, res)  => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db =JSON.parse.apply(db);
    res.json(db);
  
  }
  
  )






}
