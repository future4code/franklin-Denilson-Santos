import { Usuario } from "./Usuario";

export class Vendedor extends Usuario {
  vendas:number
  comissao:number

  constructor(
    id: string, 
    email: string, 
    nome:string, 
    senha: string, 
    vendas:number, 
    comissao:number
    ) {
    super(id,email, nome, senha); 
    
    this.vendas = vendas;
    this.comissao = comissao
  }

}