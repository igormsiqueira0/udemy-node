const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/profile/:id?', (req, res) => {
	if (+req.query.hidden == 1) {
		res.send(`Não podemos mostrar seu id`);
	} else {
		res.send(`Seu id é ${req.params.id}`);
	}
});

app.get('/', (req, res) => {
	res.send(`
	<form action="" method="POST">
		<label>
			<span>Digite seu nome</span>
			<input type="text" name="nome" />
		</label>
	</form>
	`);
});

app.post('/', (req, res) => {
	res.send(`Formulário recebido! Seu nome é ${req.body.nome}`);
});

app.listen(3000, () => {
	console.log('Servidor executando na porta 3000');
	console.log('Acesse\x1b[36m http://localhost:3000');
});
