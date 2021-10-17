// Retorna um array quebrando a string por um delimitador
const splittedTest = 'Teste split'.split('s');
console.log('\nArray com posições separadas pelo delimitador:', splittedTest); // [ 'Te', 'te ', 'plit' ]

// Busca por um valor e substitui por outro
const replaceTest = 'Teste split'.replace('Test, tseT');
console.log('\nSubstitui o valor:', replaceTest);

// Retorna parte do valor
const lastChar = 'Texto'.slice(-1);
console.log('\nRetorna a última letra da string:', lastChar); // o

const slice2 = 'Texto'.slice(0, -1);
console.log('Retorna a string, menos a última letra:', slice2); // Text

const slice3 = 'Texto'.slice(1);
console.log('Tira a 1 letra, e retorna o restante da string', slice3); // exto

// Retorna N caracteres a partir de uma posição
const substrTest = 'Texto'.substr(0, 2);
console.log('Retorna as duas primeiras letras:', substrTest); // Te

const substrTest = 'Texto'.substr(0, 4);
console.log('Retorna as 4 primeiras letras:', substrTest); // Text

