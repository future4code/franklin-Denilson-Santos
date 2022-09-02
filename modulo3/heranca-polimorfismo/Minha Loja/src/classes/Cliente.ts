import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
  public totalCompra: number = 0;
  private cartao: string;

  constructor(
    id: string,
    email: string,
    nome: string,
    senha: string,
    cartao: string
  ) {
    super(id, email, nome, senha);
    console.log("Chamando o construtor da classe Cliente");
    this.cartao = cartao;
  }

  public pegaCartaoCredito(): string {
    return this.cartao;
  }
}