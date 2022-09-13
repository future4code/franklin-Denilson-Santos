export class Usuario {
    private id: string;
    private email: string;
    private nome: string;
    private senha: string;
  
    constructor(
        id: string,
        email: string,
        nome: string,
        senha: string
    ){
        console.log("Chamando o construtor da classe Usuario")
        this.id = id
        this.email = email
        this.nome = nome 
        this.senha = senha
    }

    public pegaId(): string {
    return this.id
    }

    public pegaEmail(): string {
    return this.email
    }

    public pegaNome(): string {
    return this.nome
    }

    public apresenteSe(): string {
        return `Olá, sou ${this.nome}. Bom dia!`
    }
}