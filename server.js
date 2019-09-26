var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors());

var dotenv = require('dotenv').config();

var contactController = require('./controllers/contact')

app.get('/contacts', contactController.getContacts);

var PORT = process.env.port || 5000;

app.listen(PORT, function(){
  console.log('Server started on port ' + PORT);
});