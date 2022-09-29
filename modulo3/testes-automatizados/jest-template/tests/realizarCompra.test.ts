import { realizarCompra, Usuario } from "../src";

describe("Testando função realizarCompra", () => {
   test("Testa se usuário está com o saldo maior do que o valor de compra", () => {
        const user: Usuario = {
            nome: "Denilson", 
            saldo: 1000
        }
        const result = realizarCompra(user, 100)

        expect(result).toEqual({
            nome: "Denilson",
            saldo: 900
        })
    });

    test("Testa se usuário está com o saldo igual ao valor de compra", () => {
        const user: Usuario = {
            nome: "Denilson",
            saldo: 500
        }
        const result = realizarCompra(user, 500)

        expect(result).toEqual({
            nome: "Denilson",
            saldo: 0
        })
    });

    test("Testa se usuário está com o saldo menor do que o valor de compra", () => {
        const user: Usuario = {
            nome: "Denilson",
            saldo: 400
        }
        const result = realizarCompra(user, 600)

        expect(result).not.toBeDefined()
    });
})

