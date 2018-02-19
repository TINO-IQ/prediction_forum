// This function generates the prediction windows to be displayed on the home page

const moment = require('moment');

const generatePrediction = () => {
  const tickers = ['GOOGL', 'AAPL', 'AMZN', 'FB', 'JPM'];
  const windows = [5, 10];
  const prediction = {};

  prediction.predictionID = getRandomInt(0, 1000);
  prediction.ticker = tickers[getRandomInt(0, 4)];
  prediction.window = windows[getRandomInt(0, 1)];
  prediction.startDate = moment().format('MMM Do YY');
  prediction.endDate = moment().add(prediction.window, 'days').format('MMM Do YY');
  prediction.votes = getRandomInt(-5, 25);
  
  switch (prediction.ticker) {
    case 'GOOGL':
      prediction.company = 'Alphabet, Inc.';
      break;
    case 'AAPL':
      prediction.company = 'Apple, Inc.';
      break;
    case 'AMZN':
      prediction.company = 'Amazon.com, Inc.';
      break;
    case 'FB':
      prediction.company = 'Facebook';
      break;
    case 'JPM':
      prediction.company = 'JPMorgan Chase & Co.';
      break;
  }
  
  return prediction;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

generatePrediction();