const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send(`
	<form action="" method="POST">
		<label>
		<span>Nome do cliente</span>
		<input type="text" name="" />
		</label>

		<button>Enviar</button>
		</form>
	`);
});

app.post('/', (req, res) => {
	res.send('Formulário recebido!');
});

app.listen(3000, () => {
	console.log('Servidor executando na porta 3000');
	console.log('Acesse\x1b[36m http://localhost:3000');
});
