//exemplos

//DECLARANDO CLASSES
class Pessoa {
    nome: string 
    altura: number
    constructor(nome:string, altura:number){
        this.nome = nome
        this.altura = altura
    }
    // Metodo ou complemento
    codar(){
        console.log("Codei em POO! mais ou menos")
    }
}

//instância da classe ou um objeto
const heitor:Pessoa = {
    nome:"Heitor Côrte", 
    altura:1.71,
    codar:()=>{console.log("Codei em POO! mais ou menos")}
}

console.log(heitor)

//tipagem com classe 
const joelita:Pessoa = {
    nome: "Joelita Côrte",
    altura: 1.65,
    codar:()=>{console.log("Codei em POO! mais ou menos")}
}


//EXERCICIO 1 =============================================
//Transforme o type estudante em uma classe Estudante:
type pessoa = {
    nome: string,
    idade: number
}

//EXERCICIO 2 =============================================
class Estudante {
    //1 - Torne as propriedades da classe Estudantes privadas. 
   private nome: string
   private matricula: number
   private senha:number

    constructor(novoNome: string, novaMatricula: number, novaSenha:number){
        this.nome = novoNome
        this.matricula = novaMatricula
        this.senha = novaSenha
    }

    //2 - Adicione os getters para pegar o nome ou matrícula do estudante  e setters para alterar a matrícula do estudante.
    public pegaNome():void{
        console.log(this.nome)
    }

    public pegaMatricula():void {
        console.log(this.matricula)
    }

    public alteraMatricula(novaMatricula:number):void{
        this.matricula = novaMatricula
    }

}

//3 - Crie uma instância da classe Estudante
const denilso = new Estudante("Denilson Santos", 191919, 12345);

//4 - imprima o nome e matrícula do estudante criado.
denilso.pegaNome();
denilso.pegaMatricula();
denilso.alteraMatricula(181818);
denilso.pegaMatricula();
