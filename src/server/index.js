const express = require('express');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser'); 
const app = express()
const generatePrediction = require('./helpers/generatePrediction');

const PORT = process.env.PORT || 3000;

// Connect all routes to our app
app.use('/', routes);

// Use BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Access public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

app.listen(PORT, console.log(`now listening on port ${PORT}`));

