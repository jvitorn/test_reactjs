import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-form">
        <h4 className="App-label">Login</h4>
          <div className="App-form-group" align="center">
            <label className="App-label">Digite Seu Email</label>
            <input type="email" className="App-form-control" placeholder="Digite Seu Email"></input>
          </div>
          <div className="App-form-group" align="center">
            <label className="App-label">Digite Sua Senha</label>
            <input type="password" className="App-form-control" placeholder="Digite Sua Senha"></input>
          </div>
          <div className="App-form-group" align="center">
            <button className="App-btn">Enviar</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
