const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('Symbol1 é igual à symbol2:', symbol1 === symbol2); // false

// Previnir conflito entre nomes de propriedades
// Usar Symbol () para criar identificadores exclusivos:
const nameS1 = Symbol('name');
const nameS2 = Symbol('name');


const user = {
  [nameS1]: 'Fernando',
  [nameS2]: 'Galo',
  lastName: 'Victor Lasmar'
}

console.log(user);
/*
{
  lastName: 'Victor Lasmar',
  [Symbol(name)]: 'Fernando',
  [Symbol(name)]: 'Galo'
}
*/

for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`Valor da chave ${key}: ${user[key]}`);
  };
};

console.log('Propriedades do obj user:', Object.keys(user)); // [ 'lastName' ]
console.log('Valores do obj user:', Object.values(user)); // [ 'Victor Lasmar' ]

// Exibir symbols de um obj
console.log('Symbols registrados no obj user:', Object.getOwnPropertySymbols(user)); // [ Symbol(name), Symbol(name) ]

// Acessando todas as propriedades do obj
console.log('Todas propriedades do obj user:', Reflect.ownKeys(user)); // [ 'lastName', Symbol(name), Symbol(name) ]

// Criar um enum
// https://stijndewitt.com/2014/01/26/enums-in-javascript/

const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
};

console.log(directions);