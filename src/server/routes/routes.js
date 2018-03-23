const routes = require('express').Router();
const { getStockInfo } = require('../helpers/getStockInfo.js');
const { getUserInfo } = require('../helpers/getUserInfo.js');
const { getPredictions } = require('../heleprs/getPredictions.js');

// loads all predictions within past week
routes.get('/', (req, res) => {
    let stocks = [];
    // query database and retrieve all stock predictions from past 10 days

    // return list of stocks
    res.send(stocks);
});

// route for all predictions
routes.get('/predictions', (req, res) => {
    console.log("predictions triggered")
    const predictions = []
    for (var i = 0; i < 10; i += 1) {
      predictions.push(generatePrediction())
    }
    res.status(200).json(predictions)
});

// gets specific stock info and all comments for that stock clicked
routes.get('/stock/:stockId', (req, res) => {
    const { stockId } = req.params;
    let stockInfo = getStockInfo(stockId);
    
    // return object of stock info

});

// gets specific user info
routes.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    let userInfo = getUserInfo(userId);

    // return object of all user info

});


module.exports = routes;