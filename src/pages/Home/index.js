import React from 'react';

import mapPreview from '../../assets/map-preview.jpg';


export default function Home() {
	return (
		<>
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
		</>
	);
}