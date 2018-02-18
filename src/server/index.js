const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, console.log(`now listening on port ${PORT}`));

app.get('/', (req, res) => {
  res.end('Prediction forum home page');
});
