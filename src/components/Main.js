import React from 'react';
import Home from './Home';
import Stocks from './Stocks';
import User from './User';
import Company from './Company';
import TinoIQ from './TinoIQ';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/stocks' component={Stocks}/>
      <Route path='/tinoiq' component={TinoIQ}/>
      <Route path='/user' component={User}/>
      <Route path='/company' component={Company}/>
    </Switch>
  </main>
);

export default Main;
