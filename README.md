# Anotações curso de Node

- ### [Curso](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/)

#### Módulos e exportação

```js
// mod.js
const nome = 'Igor';
const sobrenome = 'Marinho';
const falarNome = () => `${nome} ${sobrenome}`;

// Todos funcionam para exportar
module.exports.nome = 'Algum nome';
exports.falarNome = falarNome;
this.coisa = 'Qualquer coisa';
```

```js
// app.js
const mod = require('./mod');
/* ou com desestruturação */ const { falarNome, nome } = require('./mod');

console.log(mod.falarNome());
console.log(falarNome());
```

É possível definir exports como um objeto

```js
module.exports = {
	nome,
	sobrenome,
	falarNome,
};
```

Porém ele irá ser sobrescrito caso você queira adicionar mais exports abaixo

```js
module.exports = {
	nome,
	sobrenome,
	falarNome,
}; // será sobrescrito

exports.outraCoisa = 'Outra coisa';
```

#### FileSystem (fs)

```js
// importando (já é módulo nativo do node)
const fs = require('fs'); // filesystem
const path = require('path'); // path (para pegar caminhos do diretório/arquivo atual etc..)

const filePath = path.resolve(__dirname, '..', 'teste.txt'); // cria o caminho onde será criado o arquivo teste.txt (pega o diretório atual (aula5/modules), volta um diretório para "aula5", e diz q terá o arquivo teste.txt)

fs.writeFile(filePath, 'Frase 1', { flag: 'w', encoding: 'utf8' }); // cria o arquivo em si no caminho no 1º arg, o conteúdo no 2º arg, e algumas opções no 3º arg
// flag w: para remover todo conteúdo do arquivo (resetar), e escrever o que é pedido
// flag a: escreve por cima do conteúdo já existente
```

```js
// para ler um arquivo:

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'teste.txt');

fs.readFile(filePath, 'utf8');
```

Para escrever JSON

```js
// exemplo de objeto
const pessoas = [
	{
		nome: 'João',
	},
	{
		nome: 'Maria',
	},
	{
		nome: 'Eduardo',
	},
	{
		nome: 'Luiza',
	},
];

const json = JSON.stringify(pessoas, '', 2); // transforma em JSON identado

fs.writeFile(FILE_PATH, json, { flag: 'w', encoding: 'utf8' }); // escreve o arquivo
```

Para ler JSON

```js
async function ler(caminho) {
	const data = JSON.parse(await fs.readFile(FILE_PATH, 'utf8')); // le o arquivo (retorna JSON), e transforma em objeto JS
	dadosArquivo = dados; // coloca os dados em uma váriavel
}

ler(FILE_PATH);
```

OBS: Pode ser utilizado `.promises` após `require('fs')` para que as funções utilizem promessas

#### Express Hello World (aula 6)

O express ajuda a trabalhar as rotas da aplicação

Operações básicas de uma API: CRUD
Create Read Update Delete
POST GET PUT DELETE

Exemplo extremamente básico:

```js
// carregando o express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello world!');
});

// diz a porta ser "ouvida" pelo servidor
app.listen(3000, () => {
	console.log('Servidor executando na porta 3000');
	console.log('Acesse http://localhost:3000');
});
```

#### Parâmetros, query e body

##### Parâmetros:

Em uma URL, é possível definir que coisas após o `/` sejam consideradas parâmetros de uma rota.

Ex: `https://meusite.com/profile/123`.
Aqui, definiremos a parte depos de profile/ como sendo o id

```js
// : indica que a url receberá um parâmetro com aquele nome
// ? indica que aquele parâmetro será opcional

app.get('/profile/:id?', (req, res) => {
	res.send(`Seu id é ${req.params.id}`); // req.params retorna um objeto com os parâmetros definidos
});
```

Neste caso, ao usar `req.params`, será retornado um objeto:

```
{
	id: "123"
}
```

OBS: Também é possível adicionar outros parâmetros em um mesmo endereço, todos retornarão no objeto.

##### Query:

Em uma URL, coisas após o `?` indicam que ali estará o query e para queries adicionais é utilizado `&`, ex: `/loja?ordem=crescente&min=500&max=2000`
neste caso, ao usar `req.query`, será retornado um objeto:

```
{
	ordem: "crescente",
	min="500",
	max="2000"
}
```

##### Body:

`req.body` é utilizado para obter as informações de um POST.

Por padrão, o express não faz um tratamento do req.body para retornar um objeto, por isso, é utilizado a seguinte linha de código para tal:

```js
app.use(express.urlencoded({ extended: true }));
```

Em um formulário, o `name` de um input é o que será utilizado para dar nome ao valor da chave do objeto retornado de `req.body`.

