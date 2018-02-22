import React from "react";
import { Switch, Route } from "react-router-dom";
import AllStock from "./AllStock";
import SingleStock from "./SingleStock";

const Stocks = () => (
  <Switch>
    <Route exact path="/stocks" component={AllStock} />
    <Route path="/stocks/:ticker" component={SingleStock} />
  </Switch>
);

export default Stocks;
