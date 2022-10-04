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
