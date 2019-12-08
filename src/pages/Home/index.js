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
				{/* <img src={mapPreview} id="map" alt="Mapa"></img> */}
				<script type='text/javascript' src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=[AqbhoEBCDoZlA3xZfK3avDb11QKeryn6yAikGe3C27tBggnxiP5JjDZWzr3ONO4L]' async defer></script>
			</div>
			
			<div className="buttonsHome">
				<button className="btn" onClick={report}>Denunciar</button>
				<button className="btn" onClick={register}>Registrar evento</button>
			</div>
		</>
	);
}