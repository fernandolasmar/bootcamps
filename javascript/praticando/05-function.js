function fn() {
  return 'Code here';
};

const arrowFn = () => 'Retorno implicito';
console.log(arrowFn());


const arrowFn2 = () => {
  return 'Mais de uma expressão, abre o bloco'
};
console.log(arrowFn2());


// Funções tbm são obj;
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Recber parâmetros
const logValue = value => console.log('VALUE:', value);
const logFnResult = fnParam => console.log('PARAM:', fnParam());

// Passando uma função como parâmetro
logFnResult(fn);

// Receber e retorna funções
const controlFn = fnParam => allowed => {
  if (allowed) fnParam();
}

const handleFnExecution = controlFn(fn);

handleFnExecution(true); // executa a função fn
handleFnExecution(); // não executa a função fn

// controlFn como função
function controlFn(fnParam) {
  return function(allowed) {
    if (allowed) {
      fnParam();
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

this.name = 'Nome no contexto de criação';

const getNameArrow = () => this.name;

function getName() {
  return this.name;
}

const user = {
  name: 'Nome no obj de execução',
  getNameArrow,
  getName
};

console.log(user.getNameArrow());
console.log(user.getName());
