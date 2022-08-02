
export function exercicio1 () {
    // a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
    
    // b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
    
    let nome = process.argv[2];
    let idade = Number(process.argv[3]);
    let novaIdade = idade + Number(process.argv[4]);
    
    if(!nome == "" && !idade == "") {
        console.log("Olá,",nome ,"! Você tem ", idade, "anos.");

    } else {
        console.log("Esperava 2 parametros, mas não os recebi")
    }

    if (!nome == "" && !idade == "" && !novaIdade == "") {
        // c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
        console.log("Olá,",nome ,"! Você tem ", idade, " anos. Em ",Number(process.argv[4]),"anos você terá ",novaIdade)
    } else {
        console.log("Esperava 3 parametros, mas não os recebi")
    }
    
    
}