const myNumber = 13.4048;

// Transformar numero para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', typeof numberAsString); // string

// Retorna número com duas casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('Retorna número com duas casas decimais:', fixedTwoDecimals); // 13.40

// Transforma um string em numero float
console.log(parseFloat('13.22')); // 13.22

// Transforma um string em numero int
console.log(parseInt('13.22')); // 13

const nullVariable = null;
console.log(typeof nullVariable); // object

let undefinedVariable;
console.log(typeof undefinedVariable); // undefined
