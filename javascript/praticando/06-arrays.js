const users = ['Fernando', 'Victor', 'Aline'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Fernando',
    age: 25,
    gender: gender.MAN
  },
  {
    name: 'Victor',
    age: 4,
    gender: gender.MAN
  },
  {
    name: 'Aline',
    age: 35,
    gender: gender.WOMAN
  }
];

// Retorna a qtd de itens de um array
console.log('Itens:', persons.length);

// Verifica se é um array
console.log('A variável persons é um array:', Array.isArray(persons)); // true

// Iterar sobre os itens do array
persons.forEach((person) => console.log(`FOREACH => Nome: ${person.name}`));
/*
FOREACH => Nome: Fernando
FOREACH => Nome: Victor
FOREACH => Nome: Aline
*/

persons.forEach((person, index, arr) => console.log(`FOREACH.INDEX => Nome: ${person.name} index: ${index}`, arr));
/*
FOREACH.INDEX => Nome: Fernando index: 0 [
  { name: 'Fernando', age: 25, gender: Symbol(M) },
  { name: 'Victor', age: 4, gender: Symbol(M) },
  { name: 'Aline', age: 35, gender: Symbol(W) }
]
FOREACH.INDEX => Nome: Victor index: 1 [
  { name: 'Fernando', age: 25, gender: Symbol(M) },
  { name: 'Victor', age: 4, gender: Symbol(M) },
  { name: 'Aline', age: 35, gender: Symbol(W) }
]
FOREACH.INDEX => Nome: Aline index: 2 [
  { name: 'Fernando', age: 25, gender: Symbol(M) },
  { name: 'Victor', age: 4, gender: Symbol(M) },
  { name: 'Aline', age: 35, gender: Symbol(W) }
]
*/

// filtar um array
const personFiltered = persons.filter((person) => person.gender === gender.MAN);
console.log('Nova lista apenas com homens', personFiltered);
/*
Nova lista apenas com homens [
  { name: 'Fernando', age: 25, gender: Symbol(M) },
  { name: 'Victor', age: 4, gender: Symbol(M) }
]
*/

// retorna um novo
const personNew = persons.map((person) => {
  person.course = 'Introdução ao JS';
  return person
});

console.log('Pessoas com a adição do course:', personNew);
/*
Pessoas com a adição do course: [
  {
    name: 'Fernando',
    age: 25,
    gender: Symbol(M),
    course: 'Introdução ao JS'
  },
  {
    name: 'Victor',
    age: 4,
    gender: Symbol(M),
    course: 'Introdução ao JS'
  },
  {
    name: 'Aline',
    age: 35,
    gender: Symbol(W),
    course: 'Introdução ao JS'
  }
]
*/

// Transformando um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('Soma a idade:', totalAge); // Soma a idade: 64

// Juntando operações
const totalEvenAges = persons.filter((person) => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);

console.log('Soma a idade das pessoas com idade "PAR":', totalEvenAges); // Soma a idade das pessoas com idade "PAR": 4
