const nomeAluno = prompt("Qual é o nome do aluno?");

const nota1 = prompt("Digite a primeira nota:");
const nota2 = prompt("Digite a segunda nota:");

const notaNumero1 = Number(nota1);
const notaNumero2 = Number(nota2);

const media = (notaNumero1 + notaNumero2) / 2;

if (
  notaNumero1 < 0 ||
  notaNumero1 > 10 ||
  notaNumero2 < 0 ||
  notaNumero2 > 10 ||
  isNaN(notaNumero1) ||
  isNaN(notaNumero2)
) {
  console.log("Nota inválida");
} else {
  let situacao;

  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

  console.log(`Nome: ${nomeAluno}`);
  console.log(`Nota 1: ${notaNumero1}`);
  console.log(`Nota 2: ${notaNumero2}`);
  console.log(`Média: ${media.toFixed(1)}`);
  console.log(`Situação: ${situacao}`);
}
