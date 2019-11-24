import React from 'react';

export default function Report() {
	
	function handleSubmit(event) {
		event.preventDefault();

		/*
			ATENÇÃO!
			Os valores passados devem ser o título, descrição (opcional) e geolocalização.
			O usuário só pode fazer a submissão a cada certo intervalo de tempo.
		*/

	}

	
	return (
		<>
			<p>
				Qual é a sua queixa?
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="reportTitle">TÍTULO *</label>
				<input
					type="text"
					id="reportTitle"
					placeholder="Descrição breve"
					maxLength="50"
					pattern=".{5,}"
					required
				/>

				<label htmlFor="reportDescription">DESCRIÇÃO</label>
				<textarea
					id="reportDescription"
					placeholder="Descrição detalhada"
					maxLength="500"
				/>

				<button type="submit" className="btn">Enviar</button>
			</form>
		</>
	);
}