const { FILE } = require('dns');
const path = require('path');
const write = require('./modules/escrever');
const read = require('./modules/ler');

const FILE_PATH = path.resolve(__dirname, 'teste.json');

// const pessoas = [
// 	{
// 		nome: 'João',
// 	},
// 	{
// 		nome: 'Maria',
// 	},
// 	{
// 		nome: 'Eduardo',
// 	},
// 	{
// 		nome: 'Luiza',
// 	},
// ];
// const json = JSON.stringify(pessoas, '', 2);

// write(FILE_PATH, json);

let dadosArquivo;

async function ler(caminho) {
	const data = JSON.parse(await read(FILE_PATH));
	render(data);
}
function render(dados) {
	dadosArquivo = dados;
	console.log(dadosArquivo);
}

ler(FILE_PATH);
