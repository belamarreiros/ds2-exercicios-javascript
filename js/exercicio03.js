const nomeAluno = prompt("Qual é o seu nome?");
const idadeAluno = prompt("Qual é a sua idade?");
const cursoAluno = prompt("Qual é o seu curso?");
const cidadeAluno = prompt("Em qual cidade você mora?");

console.log(
  "Olá, meu nome é " +
    nomeAluno +
    ", tenho " +
    idadeAluno +
    " anos, moro em " +
    cidadeAluno +
    " e estou cursando " +
    cursoAluno +
    ".",
);

console.log(
  `Olá, meu nome é ${nomeAluno}, tenho ${idadeAluno} anos, moro em ${cidadeAluno} e estou cursando ${cursoAluno}.`,
);
