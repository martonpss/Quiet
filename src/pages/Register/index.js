import React from 'react';
import InputMask from 'react-input-mask';


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
				Quais são as informações do seu evento?
			</p>
			<form onSubmit={handleSubmit}>

				<div className="registerType">
					<label htmlFor="registerType">TIPO DO EVENTO</label>
					<select id="publicOrPrivate">
						<option selected value="public">Público</option>
						<option value="private">Privado</option>
					</select>
				</div>

				<label htmlFor="registerLink">LINK</label>
				<input
					type="text"
					id="registerLink"
					placeholder="URL do evento"
					maxLength="2048"
				/>

				<label htmlFor="registerTitle">TÍTULO *</label>
				<input
					type="text"
					id="registerTitle"
					placeholder="Descrição breve"
					maxLength="50"
					pattern=".{5,}"
					required
				/>

				<label htmlFor="registerDescription">DESCRIÇÃO</label>
				<textarea
					id="registerDescription"
					placeholder="Descrição detalhada"
					maxLength="500"
				/>

				<label htmlFor="registerContact">CONTATO *</label>
				<InputMask
					mask="99 99999 9999"
					maskChar={null}
					placeholder="Número do Telegram"
					pattern=".{17,}"
					required
				/>

				<button type="submit" className="btn">Enviar</button>
			</form>
		</>
	);
}