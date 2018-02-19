import React from 'react';

const Prediction = (props) => (
  <div>
    <h3>{props.prediction.ticker}</h3>
    <p>{props.prediction.company} | {props.prediction.startDate} | {props.prediction.window} | {props.prediction.endDate} | {props.prediction.votes}</p>
  </div>
);

export default Prediction;
