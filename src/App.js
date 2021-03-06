import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';

import logo from './gmdb.svg';
import './App.css';
import { Nav } from './components/index';

const App = () => {
  return (
    <div className="App">
      <Link to="/">
        <header className="App-header">
          <img className="logo" src={logo}/>
          <h1 className="App-title">The Generic Movie Database</h1>
        </header>
      </Link>
      <Nav/>
      <Routes/>
    </div>
  );
};

export default App;
