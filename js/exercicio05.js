const idadeVoto = prompt("Qual é a sua idade?");

const idadeNumeroVoto = Number(idadeVoto);

if (idadeVoto === "" || idadeNumeroVoto < 0 || isNaN(idadeNumeroVoto)) {
  console.log("Idade inválida");
} else if (idadeNumeroVoto < 16) {
  console.log("Não pode votar");
} else if (idadeNumeroVoto < 18) {
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório");
}
