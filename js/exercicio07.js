const usuarioLogin = prompt("Digite seu usuário:");

const senhaLogin = prompt("Digite sua senha:");

if (usuarioLogin === "admin" && senhaLogin === "1234") {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}

// O = é usado para atribuir um valor a uma variável.
// O === é usado para comparar dois valores verificando se, além do valor, os tipos também são iguais.
