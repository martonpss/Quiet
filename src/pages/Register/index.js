import React from 'react';

export default function Register() {
	
	function handleSubmit(event) {
		event.preventDefault();

		/*
			ATENÇÃO!
			A geolocalização deve ser enviada.
		*/

	}

	
	return (
		<>
			<p>
				Qual é sua queixa?
			</p>
			<form onSubmit={handleSubmit}>

				<div className="registerType">
					<label htmlFor="registerType">TIPO DO EVENTO</label>
					<select>
						<option selected value="public">Público</option>
						<option value="private">Privado</option>
					</select>
				</div>

				<label htmlFor="registerLink">LINK</label>
				<input
					type="text"
					id="registerLink"
					placeholder="URL do evento"
				/>

				<label htmlFor="registerTitle">TÍTULO *</label>
				<input
					type="text"
					id="registerTitle"
					placeholder="Descrição breve"
				/>

				<label htmlFor="registerDescription">DESCRIÇÃO</label>
				<textarea
					id="registerDescription"
					placeholder="Descrição detalhada"
				/>

				<label htmlFor="registerContact">CONTATO *</label>
				<input
					type="text"
					id="registerContact"
					placeholder="Número do Telegram"
				/>

				<button type="submit" className="btn">Enviar</button>
			</form>
		</>
	);
}