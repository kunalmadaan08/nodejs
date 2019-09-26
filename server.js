var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors());

var contactController = require('./controllers/contact')

app.get('/contacts', contactController.getContacts);

app.listen(5000, function(){
  console.log('Server started on port ' + 5000);
});