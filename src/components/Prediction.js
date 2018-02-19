import React from 'react';

const Prediction = (props) => (
  <div>
    <h3>{props.prediction.ticker}</h3>
    <p>{props.prediction.company} | Start: {props.prediction.startDate} | {props.prediction.window} Day | End: {props.prediction.endDate} | Votes: {props.prediction.votes}</p>
  </div>
);

export default Prediction;
