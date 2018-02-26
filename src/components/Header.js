import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Prediction Forum powered by TINO IQ</h1>
      <br/><br/>
        <Link to='/'>Home  |</Link>
        <Link to='/stocks'> Stocks Predictions  |</Link>
        <Link to='/company'> Companies  |</Link>
        <Link to='/user'> User View  |</Link>
        <Link to='/tinoiq'> TinoIQ Results </Link>
    </header>
  </div>
);

export default Header;
