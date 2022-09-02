import { Usuario } from "./Usuario";

export class Funcionario extends Usuario {
    salario:number

    constructor(id: string, email: string, nome:string, senha: string, salario:number) {
        super(id,email, nome, senha); 
        
        this.salario = salario;
    }

}