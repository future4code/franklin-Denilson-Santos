/* 
 # Exercício 1 
  Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`

  a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
    => Construtor serve para inicializar variáveis;
    => Usamos a palavra reservada `this` para chamar os atributos e metodos do construtor;
*/

/* 
    b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
*/
class ContaUsuario {
    private cpf: string;
    private nome: string;
    private idade: number;
    private saldo: number = 0;
    private transacoes: Transacao[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe ContaUsuario")
       this.cpf = cpf;
       this.nome = name;
       this.idade = age;
    }
    public pegaCpf(): string {
        return this.cpf
    }

    public pegaNome(): string {
        return this.nome
    }

    public pegaIdade():number {
        return this.idade
    }
  
}

const denilson = new ContaUsuario("123456", "Denilson", 31)
console.log(denilson.pegaCpf())
console.log(denilson.pegaNome())
console.log(denilson.pegaIdade())


/*
    c) Como conseguimos ter acesso às propriedades privadas de uma classe?
     => Através da chamada dos métodos publicos da classe, por exemplo
     denilson.pegaNome();
*/

/*
  # Exercício 2

    Transforme a variável de tipo abaixo, chamada `Transaction` em uma classe `Transaction`. Ela deve conter as mesmas propriedades: *data*, *valor* e *descrição*. Agora, porém, todas elas devem ser **privadas**. Portanto, crie métodos (*getters*) para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount. Crie uma instância dessa classe e adicione à instância já criada de UserAccount

    type Transaction = {
        description: string,
        value: number,
        date: string
    }
*/

class Transacao {
    private data: string;
    private valor: number;
    private descricao: string;
    
    constructor(data: string, valor: number, descricao: string) {
      this.data = data;
      this.valor = valor;
      this.descricao = descricao
    }
}

/*
    # Exercício 3
    
    Crie uma classe **Bank**, que será responsável por guardar todos os dados da aplicação. Ela deve possuir a propriedades *accounts*, privada (crie os *getters* e *setters* que achar apropriado).
*/

class Bank {
    private contas: ContaUsuario[];
    
    constructor(contas: ContaUsuario[]) {
      this.contas = contas;
    }
  
}
