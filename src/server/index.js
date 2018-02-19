const express = require('express');
const bodyParser = require('body-parser'); 

const generatePrediction = require('./helpers/generatePrediction');

const app = express();
const PORT = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, console.log(`now listening on port ${PORT}`));

app.get('/predictions', (req, res) => {
  console.log('predictions triggered');
  const predictions = [];
  for (var i = 0; i < 10; i += 1) {
    predictions.push(generatePrediction());
  }
  res.status(200).json(predictions);
});
