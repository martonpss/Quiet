import React from 'react';
import './App.css';

import logo from './assets/logo.svg';
import mapPreview from './assets/map-preview.jpg';

function App() {
  return (

    <div className="container">
      
      <img src={logo} alt="Logo da quiet" />

      <div className="content">
        <p>
          Olá, somos a <strong>quiet</strong>! Nossa missão é <strong>reduzir</strong> os conflitos causados pela <strong>poluição sonora</strong>.
        </p>

        <div className="mapContainer">
          <img src={mapPreview} id="map" alt="Mapa"></img>
        </div>
        
        <div className="buttonsHome">
          <button className="btn">Denunciar</button>
          <button className="btn">Registrar evento</button>
        </div>
      </div>


    </div>

  );
}

export default App;
