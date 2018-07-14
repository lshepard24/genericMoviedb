import React from 'react';
import Routes from './routes';
import logo from './gmdb.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">The Generic Movie Database</h1>
      </header>
      <Routes />
    </div>
  );
};

export default App;
