export interface Usuario {
    nome: string,
    saldo: number
}

export function realizarCompra(user: Usuario, value: number): Usuario | undefined {
    if(user.saldo >= value) {
        return {
            ...user,
            saldo: user.saldo - value
        }
    }
} 