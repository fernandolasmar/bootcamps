// Deletar algo
// delete something;

// Determinar tipo
// typeof something;

// in
something in somethingItens

// Arrays
let arvores = new Array('Pau Brasil', 'Louveiro', 'Cedro', 'Carvalho', 'Sicômoro');
0 in arvores; // retorna true
3 in arvores; // retorna true
6 in arvores; // retorna false (So tem 5 indices)

'Cedro' in arvores; // retorna false, tem que passar o indice

'length' in arvores; // retorna true, (length é uma propriedade de Array)

// Obj predefinidos
'PI' in Math;
let minhaString = new String('Coral');
'length' in minhaString; // retorna true

// Obj personalizados
let meuVeiculo = {
  marca: 'Yamaha',
  modelo: 'Factor 125 ED',
  ano: 2012
};
'marca' in meuVeiculo; // retorna true
'modelo' in meuVeiculo; // retorna true

// instceof
objeto instanceof tipoObjeto

let dia = new Date(2018, 12, 17);

if (dia instanceof Date) { 
  // code here
}