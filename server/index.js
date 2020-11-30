const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

app.use(express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});