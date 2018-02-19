const express = require('express');
const bodyParser = require('body-parser'); 

const generatePrediction = require('./helpers/generatePrediction');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, console.log(`now listening on port ${PORT}`));

app.get('/predictions', (req, res) => {
  const predictions = [];
  for (var i = 0; i < 5; i += 1) {
    predictions.push(generatePrediction());
  }
  console.log(predictions);
  // res.status(200).end();
});
