const alunos = [
  {
    nome: 'Fernando Lasmar',
    nota: 5,
    turma: '1B',
  },
  {
    nome: 'Aline Schirm',
    nota: 9,
    turma: '1B',
  },
  {
    nome: 'Victor Lasmar schirm',
    nota: 6,
    turma: '2C',
  },
  {
    nome: 'Novato',
    nota: 3,
    turma: '2C',
  },
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for(let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i];

    if(nota >= media) {
      aprovados.push(nome);
    };
  };
  return aprovados;
};

console.log(alunosAprovados(alunos, 5));
