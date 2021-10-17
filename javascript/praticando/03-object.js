let user = {
  name: 'Fernando',
  lastName: 'Lasmar'
};

console.log('Antes:', user); // Antes: { name: 'Fernando', lastName: 'Lasmar' }

// formas de alterar o obj
user.name = 'Victor';
console.log('Primeiro victor:', user); // Primeiro victor: { name: 'Victor', lastName: 'Lasmar' }

user['name'] = 'Victor 2';
console.log('Segundo victor:', user); // Segundo victor: { name: 'Victor 2', lastName: 'Lasmar' }

const prop = 'name';
console.log('Terceiro victor 3:', user); // Terceiro victor: { name: 'Victor 2', lastName: 'Lasmar' }

user[prop] = 'Victor 4'
console.log('Quarto victor:', user); // Quarto victor: { name: 'Victor 4', lastName: 'Lasmar' }

// Criando uma propriedade
user.age = 4;
console.log('Propriedade criada:', user); // { name: 'Victor 4', lastName: 'Lasmar', age: 4 }

// Deletando uma propriedade
delete user.lastName;
console.log('Propriedade deletada:', user) // { name: 'Victor 4', age: 4 }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const userSecond = {
  name: 'Aline',
  lastName: 'Schirm'
};

// Recupera a chaves d obj
console.log('Propriedades do objeto userSecond:', Object.keys(userSecond)); // [ 'name', 'lastName' ]

// Valores do objeto
console.log('Valores do objeto userSecond:', Object.values(userSecond)); // [ 'Aline', 'Schirm' ]

// Retorna um array chave: valor
console.log('Retorna um array chave: valor userSecond:', Object.entries(userSecond)); // [ [ 'name', 'Aline' ], [ 'lastName', 'Schirm' ] ]

// é usado para copiar os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos de origem para um objeto de destino . Este método irá retornar o objeto de destino .
console.log(Object.assign(userSecond, { fullName: 'Aline Schirm', age: 34 } ));
// console.log(userSecond);
/*
{
  name: 'Aline',
  lastName: 'Schirm',
  fullName: 'Aline Schirm',
  age: 34
}
*/

// Previne todas as alterações em um obj
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('newObj depois das alterações:', newObj);

// Permite alterações apenas de propriedades existentes em um obj
// O método do JavaScript Object seal () evita que novas propriedades sejam adicionadas e marca todas as propriedades existentes como não configuráveis.
const person = { name: 'Fernando' };
Object.seal(person);

person.name = 'Fernando Galo'; // { name: 'Fernando Galo' }
delete person.name;
person.age = 26;

console.log('person depois das alterações:', person); 
