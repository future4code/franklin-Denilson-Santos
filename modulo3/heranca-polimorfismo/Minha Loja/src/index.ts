import { Cliente } from "./classes/Cliente";
import { Usuario } from "./classes/Usuario";

// Exercicio 1
const denilson = new Usuario("1", "denilson@email.com", "Denilson", "123456");
console.log(denilson.pegaEmail());
console.log(denilson.pegaId());
console.log(denilson.pegaNome());
// console.log(denilson.senha) Não pois a senha é privada, só pode ser acessada pela classe Usuario

// Exercicio 2
const pedro = new Cliente("2", "pedro@email.com", "Pedro", "654321", "99999");
console.log(pedro.pegaId());
console.log(pedro.pegaNome());
console.log(pedro.pegaEmail());
console.log(pedro.pegaCartaoCredito());
pedro.totalCompra = 10;
console.log(pedro.totalCompra);

// Exercicio 3
console.log(pedro.pegaId());
console.log(pedro.pegaNome());
console.log(pedro.pegaEmail());
console.log(pedro.pegaCartaoCredito());
pedro.totalCompra = 10;
console.log(pedro.totalCompra);

// Exercicio 4
console.log(pedro.apresenteSe())

// Exercicio 5
console.log(denilson.apresenteSe())



