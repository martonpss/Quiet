import React from 'react';

import mapPreview from '../../assets/map-preview.jpg';


export default function Home({ history }) {

	function report() {
		history.push('/report');
	}

	function register() {
		history.push('/register');
	}

	return (
		<>
			<p>
				Olá, somos a <strong>quiet</strong>! Nossa missão é <strong>reduzir</strong> os conflitos causados pela <strong>poluição sonora</strong>.
			</p>

			<div className="mapContainer">
				<img src={mapPreview} id="map" alt="Mapa"></img>
			</div>
			
			<div className="buttonsHome">
				<button className="btn" id="reportButton" onClick={report}>Denunciar</button>
				<button className="btn" id="registerButton" onClick={register}>Registrar evento</button>
			</div>
		</>
	);
}