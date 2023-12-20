'use client'

import './page.css'
export default function Questao1() {
	const handleClick = () => {
		alert('O botão foi clicado!');
	  };
  	return (
		<>
			<h1>Questão 1</h1>
			<p>
				Crie um botão vermelho com as bordas arredondadas que exiba "Clique-me!"
				como texto. Ao clicar no botão, um alerta deve ser disparado avisando
				que o botão foi clicado.
			</p>
			<div className='redBtn'>
				<button onClick={handleClick}>Clique-me!</button>
			</div>
		</>
  )
}
