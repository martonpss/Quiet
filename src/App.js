import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (

    <div className="container">
      
      <img src={logo} alt="Logo da quiet" />

      <div className="content">
        <p>
          Nossa missão é <strong>reduzir</strong> os conflitos causados pela <strong>poluição sonora</strong>
        </p>

        <button className="btn" id="btnDenunciar">Denunciar</button>
        <button className="btn" id="btnRegistrar">Registrar evento</button>
      </div>


    </div>

  );
}

export default App;
