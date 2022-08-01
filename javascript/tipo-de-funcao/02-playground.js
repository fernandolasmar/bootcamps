const pessoa1 = {
  nome: 'Fernando Lasmar',
  idade: 37
};

const pessoa2 = {
  nome: 'Aline Schirm',
  idade: 36
};

const pessoa3 = {
  nome: 'Victor Lasmar schirm',
  idade: 5
};

const animal1 = {
  nome: 'Brutus',
  idade: 8,
  raca: 'Pincher'
};

function calculaIdade(ano) {
  return `Daqui a ${ano} anos, ${this.nome} terá ${this.idade + ano} anos de idade :)`;
};

console.log(calculaIdade.call(pessoa2, 5));
console.log(calculaIdade.call(animal1, 5));
console.log('============================================');
console.log(calculaIdade.apply(pessoa2, [5]));
console.log(calculaIdade.apply(pessoa2, [5]));
