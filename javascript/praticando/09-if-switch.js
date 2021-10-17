const array = [0, 1, 2, 3, 4, 5];

array.forEach((e) => {
  if (e % 2 === 0) {
    console.log(`${e}-PAR.`);
  } else {
    console.log(`${e}-Ímpar.`);
  }
});

/*
0-PAR.
1-Ímpar.
2-PAR.
3-Ímpar.
4-PAR.
5-Ímpar.
*/

const array2 = [2, 3, 4, 5, 6, 8, 10, 15];
console.log('ELSE IF //////////////////////////////////');
array2.forEach((e) => {
  if (e % 2 === 0) {
    console.log(`${e} Divisível por 2`);
  } else if (e % 3 === 0) {
    console.log(`${e} Divisível por 3`)
  } else if (e % 5 === 0) {
    console.log(`${e} Divisível por 5`)
  }
});
/*
2 Divisível por 2
3 Divisível por 3
4 Divisível por 2
5 Divisível por 5
6 Divisível por 2
8 Divisível por 2
10 Divisível por 2
15 Divisível por 3
*/


console.log('IF //////////////////////////////////////');
array2.forEach((e) => {
  if (e % 2 === 0) console.log(`${e} Divisível por 2`);
  if (e % 3 === 0) console.log(`${e} Divisível por 3`);
  if (e % 5 === 0) console.log(`${e} Divisível por 5`); 
});
/*
2 Divisível por 2
3 Divisível por 3
4 Divisível por 2
5 Divisível por 5
6 Divisível por 2
6 Divisível por 3
8 Divisível por 2
10 Divisível por 2
10 Divisível por 5
15 Divisível por 3
15 Divisível por 5
*/

const fruit = 'Banana';

switch (fruit) {
  case 'Banana':
    console.log('R$ 3,00 / Kg');
    break;
  case 'Mamão':
  case 'Pera':
    console.log('R$ 2,00 / Kg');
    break;
  default:
    console.log('***Produto não encontrado***.');
    break;
}