// Reduce simples, somando os valores de um array
// var numeros = [0, 1, 2, 3, 4, 5, 6];
// var total = numeros.reduce((acumulador, numero, indice, original) => {
//   console.info(`${acumulador} total até o momento`);
//   console.log(`${numero} valor atual`);
//   console.log(`${indice} indice atual`);
//   console.log(`${original} array original`);
//   return acumulador += numero;
// }, 0)
// console.warn('acaboooou');
// console.log(total);


// Reduce usando como valor inicial, um outro array reducezado
// como o reduce de b é o valor inicial, ele é reducezado primeiro
// const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10];
// var ab = a.reduce((acumulador, elemento) => {
//   console.log('reduce de A');
//   console.log(`${acumulador} total até o momento`);
//   console.log(`${elemento} valor atual`)
//   return acumulador += elemento
// }, b.reduce((acumulador, elemento) => {
//   console.log('reduce de B');
//   console.log(`${acumulador} total até o momento`);
//   console.log(`${elemento} valor atual`)
//   return acumulador += elemento
// }, 0))
// console.log(ab);

//exemplo com array de objectos
animais = [
  {
    nome: 'Fumaça',
    idade: 3,
    tipo: 'cao'
  },
  {
    nome: 'Tobby',
    idade: 6,
    tipo: 'cao'
  },
  {
    nome: 'Laminha',
    idade: 1,
    tipo: 'gato'
  },
  {
    nome: 'Nutella',
    idade: 3,
    tipo: 'cao'
  },
];

dogsAgeSum = animais.reduce((total, elemento) => {
  if (elemento.tipo === 'cao') return total += (elemento.idade *= 7);
  else return total}, 0);

// console.log(dogsAgeSum);
