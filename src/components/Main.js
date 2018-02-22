import React from 'react';
import Home from './Home';
import Stocks from './Stocks';
import Misc from './Misc'
import { Switch, Route } from 'react-router-dom'


const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/stocks' component={Stocks}/>
        <Route path='/misc' component={Misc}/>
      </Switch>
    </main>
);

export default Main;
