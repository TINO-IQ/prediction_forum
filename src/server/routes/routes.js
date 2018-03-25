const routes = require('express').Router();
const { getPredictionInfo } = require('../helpers/getStockInfo.js');
const { getUserInfo } = require('../helpers/getUserInfo.js');
const { getPredictions } = require('../heleprs/getPredictions.js');
const { newUser } = require("../helpers/newUser.js");

// loads all predictions within past 10 days
routes.get('/', (req, res) => {
    let stocks = [];
    // query database and retrieve all stock predictions from past 10 days
    getPredictions().then(data => {
      res.send(data)
    });
});

// route for all predictions
routes.get('/predictions', (req, res) => {
    // const predictions = []
    // for (var i = 0; i < 10; i += 1) {
    //   predictions.push(generatePrediction())
    // }
    // res.status(200).json(predictions)

    const predictions = [];

    res.status(200).json(predictions);

});

// gets specific stock info and all comments for that stock clicked
routes.get('/prediction/:predictionId', async (req, res) => {
    const { predictionId } = req.params;
    let predictionInfo = await getPredictionInfo(predictionId);
    
    // return object of stock info
    return predictionInfo;
});

// creates new user 
routes.post('/users', (req, res) => {
    const { googleId } = req.body;
    const { email } = req.body;
    const { token } = req.body;
    const { name } = req.body;
    const { username } = req.body;

    // saves new user into database 
    await newUser(googleId, email, token, name, username);
    res.status(200);
});

// gets specific user info
routes.get('/users/:googleId', async (req, res) => {
    const { googleId } = req.params;
    let userInfo = await getUserInfo(googleId);
    // return object of all user info
    return userInfo;
});


module.exports = routes;